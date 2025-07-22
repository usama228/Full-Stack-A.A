'use client'
import { createImageFromInitials, Loader } from "@/assets";
import { useAuth } from "@/authentication/ProvideAuth";
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { AddProduct, GetAllCategories, GetProduct, RemoveProduct, UpdateProduct } from "@/redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { uploadImage } from "@/redux/api";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import DeleteModal from "@/components/dashboard/modal/DeleteModal";




function AddEditProduct() {

    return (
        <>

            <MobileNavigation2 />
            <DashboardLayout>

                <AddEditProductBody />
            </DashboardLayout>
        </>
    );
}

export default withAuth(AddEditProduct);

export function AddEditProductBody() {
    const auth = useAuth();
    const { shop_id, id } = useParams();
    const router = useRouter()
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const category = useSelector((state) => state.category)
    useEffect(() => {
        if (parseInt(id) > 0) {
            dispatch(GetProduct(id))
        }
        dispatch(GetAllCategories({
            page: 1,
            limit: 1000000
        }))
    }, [dispatch, id])

    const remove = () => {
        dispatch(RemoveProduct(id, moveToNext))
    }
    const moveToNext = () => {
        if (auth.type === 'superAdmin') {
            router.push(`/dashboard/products/shop/${shop_id}`)
        } else {
            router.push(`/dashboard/products`)
        }
    }
    return (
        <div className="dashboard__content hover-bgc-color">


            <div className="row pb40">
                <div className="col-lg-12">
                    <DashboardNavigation />
                </div>
                <div className="col-lg-9">
                    <div className="dashboard_title_area">
                        <h2>{`${parseInt(id) > 0 ? 'Edit' : 'Add'} Product`}</h2>
                    </div>
                </div>
            </div>
            {
                product.productLoading === true
                &&
                <Loader />
            }
            {
                (product.productSuccess === true || id === 'new')
                &&
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                            <div className={`bdrb1 d-flex  pb15 mb25 ${parseInt(id) > 0 ? 'justify-content-between' : "justify-content-start"}`}>
                                <h5 className="list-title">Product Details</h5>
                                {parseInt(id) > 0 && auth.type !== "superAdmin" &&
                                    <span
                                        onClick={() => setShow(true)}
                                        className="cursor"
                                    >
                                        Delete Product{" "}
                                        <span className="flaticon-delete" />
                                    </span>

                                }

                            </div>


                            <div className="col-lg-12">

                                <AddEditBody data={id === 'new' ? null : product.product} />
                            </div>
                        </div>

                    </div>

                </div>
            }
            <DeleteModal
                show={show}
                setShow={setShow}
                message={'Are You Sure You Want to delete this product'}
                onYes={remove} />

        </div>

    );
}



const AddEditBody = (props) => {
    const { data } = props
    const { shop_id, id } = useParams();
    const [imgLoading, setImgLoading] = useState(null);
    const [imagesList, setImagesList] = useState(data ? data.images : [])
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useAuth();
    const [subCateory, setSubCategory] = useState([])
    const category = useSelector((state) => state.category);

    function getChildren(data, id) {
        for (const item of data) {
            if (parseInt(item.id) === parseInt(id)) {
                return item.children || []; // Return children if the ID matches
            }

            if (item.children && item.children.length > 0) {
                const result = getChildren(item.children, id);
                if (result.length > 0) {
                    return result;
                }
            }
        }

        return [];
    }
    function getObjectById(data, id) {
        for (const item of data) {
            if (item.id === id) {
                return item;
            }

            if (item.children && item.children.length > 0) {
                const result = getObjectById(item.children, id);
                if (result) {
                    return result;
                }
            }
        }

        return null; // Return null if no object found
    }


    const {
        setValue,
        control,
        watch,
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: data ? {
            id: data.id,
            title: data.title,
            images: imagesList,
            price: data.price,

            description: data.description,
        } : {
            title: '',
            images: imagesList,
            price: '',
            description: '',
        },
    });
    const handleImageChange = (e) => {
        let file_ = e.target.files[0];
        if (file_) {
            setImgLoading(true);
            const formData = new FormData();
            formData.append('avatar', file_);
            uploadImage(formData).then(
                response => {
                    if (response.data.succeeded === true) {
                        setImagesList([...imagesList, response.data.data.path])
                        // setSelectedImage(response.data.data.path)
                        setImgLoading(false);

                    }
                    else {

                    }
                }, error => {
                    setImgLoading(false);
                }
            )
        }
    };
    const removeImg = (indexToRemove) => {
        const img = imagesList;
        img.splice(indexToRemove, 1);
        setImagesList(img)
    }
    const onSubmit = async (data) => {
        let final_data = {
            ...data,
            shop_id: shop_id ? shop_id : auth.shop.id,
            images: imagesList,
            category_id: data.sub_category || data.category_id
        }
        if (parseInt(id) > 0) {
            dispatch(UpdateProduct({ ...final_data, id: id }, moveToNext))
        }
        else {
            dispatch(AddProduct(final_data, moveToNext))
        }
    };
    const moveToNext = () => {
        if (auth.type === 'superAdmin') {
            router.push(`/dashboard/products/shop/${shop_id}`)
        } else {
            router.push(`/dashboard/products`)
        }
    }

    const onChangeOfCategory = (id) => {
        setSubCategory(getChildren((category.getAllCategories.category || []), id))
    }
    useEffect(() => {
        if (data) {
            const product_category = getObjectById((category.getAllCategories.category || []), data.category_id)
            const id = product_category ? product_category?.parent_id ? product_category.parent_id : product_category.id : null
            const sub_id = product_category ? product_category.id : null
            if (category.getAllCategories.category.length) {
                setValue('category_id', id || "");
            }

            if (id) {
                setSubCategory(getChildren((category.getAllCategories.category || []), id))
                setValue('sub_category', sub_id || "");
            }
        }
    }, [category.getAllCategories.category]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {
                imgLoading === true
                    ?
                    <Loader />
                    :
                    <div className="col-xl-12">
                        <div className="profile-box d-sm-flex align-items-center mb30">


                            <div className="d-flex gap-1">
                                {(imagesList || []).map((item, i) => {
                                    return (
                                        <div className='col-4'
                                            key={i}>
                                            <Image
                                                height={80}
                                                width={100}
                                                src={item}
                                                alt="image"
                                                className="w-100"
                                            />
                                            <a
                                                className="tag-delt text-thm2"
                                                onClick={() => removeImg(i)}
                                            >
                                                <span className="flaticon-delete text-thm2" />
                                            </a>
                                        </div>
                                    )
                                })}



                            </div>
                        </div>
                    </div>
            }
            <div className="col-lg-12">
                <div className="profile-content ml20 ml0-xs">
                    <div className="d-flex align-items-center my-3">

                        <label>
                            <input
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                className="d-none"
                                onChange={handleImageChange}
                            />
                            <a className="upload-btn ml10">Upload Image</a>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                Title
                            </label>
                            <input
                                type="text"
                                id='title'
                                className="form-control"
                                placeholder=""
                                {...register('title', { required: 'Title is required' })}
                            />
                            {
                                errors.title &&
                                <FieldError message={errors.title.message} />
                            }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                {...register('price', {
                                    required: 'Price is required',
                                    min: {
                                        value: 0,
                                        message: 'Price must be a positive number',
                                    },
                                    pattern: {
                                        value: /^[0-9]+(\.[0-9]{1,2})?$/, // Allows decimal values (up to 2 decimal places)
                                        message: 'Please enter a valid price',
                                    },
                                })}
                                className="form-control"
                                placeholder="Enter the price"
                                step="0.01" // Allows decimals
                            />
                            {errors.price && <FieldError message={errors.price.message} />}
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                Category
                            </label>
                            <select
                                id="category_id"
                                className="form-control"
                                onClick={(e) => { onChangeOfCategory(e.target.value) }}
                                {...register('category_id', { required: 'Category is required' })}
                            >
                                <option value="">Select a category</option>
                                {
                                    (category.getAllCategories.category || []).map((cat, index) => {
                                        return (
                                            <option key={index}
                                                value={cat.id}>
                                                {cat.name}
                                            </option>
                                        )
                                    })
                                }

                            </select>
                            {errors.category_id && (
                                <FieldError message={errors.category_id.message} />
                            )}
                        </div>
                    </div>
                    {
                        (subCateory || []).length > 0
                        &&
                        <div className="col-sm-6">
                            <div className="mb20">
                                <label className="heading-color ff-heading fw500 mb10">
                                    Sub Category
                                </label>
                                <select
                                    id="sub_category"
                                    className="form-control"
                                    {...register('sub_category', { required: 'Sub Category is required' })}
                                >
                                    <option value="">Select a sub category</option>
                                    {
                                        (subCateory || []).map((cat, index) => {
                                            return (
                                                <option key={index}
                                                    value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            )
                                        })
                                    }

                                </select>
                                {errors.sub_category && (
                                    <FieldError message={errors.category.message} />
                                )}
                            </div>
                        </div>}
                    <div className="col-sm-12">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                Description
                            </label>
                            <textarea
                                id="description"
                                {...register('description', { required: 'Description is required' })}
                                className="form-control"
                                rows="10"
                            />

                            {
                                errors.description &&
                                <FieldError message={errors.description.message} />
                            }
                        </div>
                    </div>




                    <div className="col-md-12 ">
                        {
                            (product.productLoading || product.updateProductLoading)
                                ?
                                <Loader />
                                :
                                <div className="d-flex justify-content-end gap-1">
                                    {/* <button
                                        onClick={onClose}
                                        className="ud-btn btn-thm default-box-shadow2"
                                        type="button"
                                    >
                                        Cancel{" "}
                                        <i className="fal fa-arrow-right-long" />
                                    </button> */}
                                    <button
                                        className="ud-btn btn-thm default-box-shadow2"
                                        type="submit"
                                    >
                                        Save{" "}
                                        <i className="fal fa-arrow-right-long" />
                                    </button>
                                </div>
                        }
                    </div>

                </div>
            </div>
        </form>
    )
}