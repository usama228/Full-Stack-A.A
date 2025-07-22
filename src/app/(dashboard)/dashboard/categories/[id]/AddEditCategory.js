'use client'
import { Loader } from "@/assets";
import { useAuth } from "@/authentication/ProvideAuth";
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { AddCategory, AddProduct, GetAllCategories, GetCategory, GetProduct, RemoveProduct, UpdateCategory, UpdateProduct } from "@/redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { uploadImage } from "@/redux/api";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import DeleteModal from "@/components/dashboard/modal/DeleteModal";




function AddEditCategory() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    return (
        <>

            <MobileNavigation2 />
            <DashboardLayout>

                <AddEditCategoryBody />
            </DashboardLayout>
        </>
    );
}

export default withAuth(AddEditCategory);

export function AddEditCategoryBody() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category)
    useEffect(() => {
        if (parseInt(id) > 0) {
            dispatch(GetCategory(id))
        }
        dispatch(GetAllCategories({
            page: 1,
            limit: 1000000
        }))
    }, [dispatch, id])
    return (
        <div className="dashboard__content hover-bgc-color">


            <div className="row pb40">
                <div className="col-lg-12">
                    <DashboardNavigation />
                </div>
                <div className="col-lg-9">
                    <div className="dashboard_title_area">
                        <h2>{`${parseInt(id) > 0 ? 'Edit' : 'Add'} Category`}</h2>
                    </div>
                </div>
            </div>
            {
                category.categoryLoading === true
                &&
                <Loader />
            }
            {
                (category.categorySuccess === true || id === 'new')
                &&
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                            <div className={`bdrb1 d-flex  pb15 mb25 ${parseInt(id) > 0 ? 'justify-content-between' : "justify-content-start"}`}>
                                <h5 className="list-title">Catgory Details</h5>
                            </div>


                            <div className="col-lg-12">

                                <AddEditBody data={id === 'new' ? null : category.category} />
                            </div>
                        </div>

                    </div>

                </div>
            }


        </div>

    );
}



const AddEditBody = (props) => {
    const { data } = props
    const { id } = useParams();
    const [imagesList, setImagesList] = useState(data ? data.images : [])
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useAuth();
    const category = useSelector((state) => state.category);


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
            name: data.name,
            parent_id: data.parent_id || '',
            description: data.description,
        } : {
            name: '',
            parent_id: '',
            description: '',
        },
    });


    const onSubmit = async (data) => {
    
        if (parseInt(id) > 0) {
            dispatch(UpdateCategory({ ...data, id: id }, moveToNext))
        }
        else {
            dispatch(AddCategory(data, moveToNext))
        }
    };
    const moveToNext = () => {
        router.push(`/dashboard/categories`)
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="col-lg-12">

                <div className="row">
                    <div className="col-sm-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                Name
                            </label>
                            <input
                                type="text"
                                id='name'
                                className="form-control"
                                placeholder=""
                                {...register('name', { required: 'Name is required' })}
                            />
                            {
                                errors.name &&
                                <FieldError message={errors.name.message} />
                            }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                Parent Category
                            </label>
                            <select
                                id="parent_id"
                                className="form-control"
                                {...register('parent_id',)}
                            >
                                <option value="">Select a Parent category</option>
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

                        </div>
                    </div>
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
                            (category.categoryLoading || category.updateCategoryLoading)
                                ?
                                <Loader />
                                :
                                <div className="d-flex justify-content-end gap-1">
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