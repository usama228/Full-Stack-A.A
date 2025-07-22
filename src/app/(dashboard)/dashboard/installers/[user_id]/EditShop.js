'use client'
import { createImageFromInitials, FieldError, Loader } from "@/assets";
import { useAuth } from "@/authentication/ProvideAuth";
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { AddProduct, AddProject, GetProduct, GetProject, GetUser, RemoveProduct, RemoveProject, UpdateProduct, UpdateProject, UpdateUser } from "@/redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { uploadImage } from "@/redux/api";
import { useParams, useRouter } from "next/navigation";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
    geocodeByPlaceId
} from 'react-places-autocomplete';
import DeleteModal from "@/components/dashboard/modal/DeleteModal";

import Image from "next/image";



function EditInstaller() {
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
                <EditInstallerBody />
            </DashboardLayout>
        </>
    );
}

export default withAuth(EditInstaller);


function EditInstallerBody() {
    const { user_id } = useParams();
    const router = useRouter()
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(GetUser(user_id))
    }, [dispatch, user_id])



    return (
        <div className="dashboard__content hover-bgc-color">


            <div className="row pb40">
                <div className="col-lg-12">
                    <DashboardNavigation />
                </div>
                <div className="col-lg-9">
                    <div className="dashboard_title_area">
                        <h2>{`${parseInt(user_id) > 0 ? 'Edit' : 'Add'} Installer`}</h2>
                    </div>
                </div>
            </div>
            {
                user.userLoading === true
                &&
                <Loader />
            }
            {
                (user.userSuccess === true || user_id === 'new')
                &&
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                            <div className="col-lg-12">
                                <AddEditBody data={user_id === 'new' ? null : user.user} />
                            </div>
                        </div>

                    </div>

                </div>
            }
            {/* <DeleteModal
                show={show}
                setShow={setShow}
                message={'Are You Sure You Want to delete this product'}
                onYes={remove} /> */}

        </div>

    );
}



const AddEditBody = (props) => {
    const { data } = props
    const [selectedImage, setSelectedImage] = useState(data.avatar);
    const [address, setAddress] = useState(data.address);
    const [imgLoading, setImgLoading] = useState(false)
    const [imgError, setImgError] = useState(null)
    const router = useRouter()
    const dispatch = useDispatch()
    const {
        setValue,
        control,
        watch,
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            id: data.id,
            name: data.name,
            email: data.email,
            avatar: data.avatar,
            type: data.type,
            phone_no: data.phone_no,
            address: data.address?.street || '',
            country: data.address?.country || '',
            state: data.address?.state || '',
            city: data.address?.city || '',
            area: data.address?.area || '',
            zip: data.address?.zip || '',
            status: data.status,
            owner_name: data.type === 'shop' ? data.Shop.owner_name : null,
            experience: data.type === 'installer' ? data.Installer.experience : null,

        },
    });
    const handleImageChange = (e) => {
        let file_ = e.target.files[0];
        if (file_) {
            setImgLoading(true);
            setImgError(null);
            const formData = new FormData();
            formData.append('avatar', file_);
            uploadImage(formData).then(
                response => {
                    if (response.data.succeeded === true) {
                        setSelectedImage(response.data.data.path)
                        setImgLoading(false);
                        setImgError(null);
                    }
                    else {

                    }
                }, error => {
                    setImgLoading(false);
                    setImgError(error);
                }
            )
        }
    };
    const handleSelect = (selectedAddress, placeId) => {
        let address_data = {
            address: selectedAddress
        }
        setValue('address', selectedAddress);

        geocodeByPlaceId(placeId).then(result => {
            const { long_name: postalCode = '' } = result[0].address_components.find(c => c.types.includes('postal_code')) || {};
            const { long_name: country = '' } = result[0].address_components.find(c => c.types.includes('country')) || {};
            const { long_name: state = '' } = result[0].address_components.find(c => c.types.includes('administrative_area_level_1')) || {};
            const { long_name: city = '' } = result[0].address_components.find(c => c.types.includes('locality')) || {};
            const { long_name: area = '' } = result[0].address_components.find(c => c.types.includes('sublocality_level_2')) || {};
            setValue('country', country)
            setValue('state', state)
            setValue('city', city)
            setValue('area', area)
            address_data = {
                street: selectedAddress,
                country: country,
                state: state,
                city: city,
                area: area,
                zip: postalCode,
            }

        })
        geocodeByAddress(selectedAddress)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                setAddress({
                    ...address_data,
                    latitude: latLng.lat,
                    longitude: latLng.lng
                })
            })
            .catch(error => console.error('Esrror', error));

        // setAddress(address_data)
    };
    const onSubmit = async (data) => {
        let final_data = {
            ...data,
            avatar: selectedImage || createImageFromInitials(500, data.name),
            address: address || {
                street: data.address.street || '',
                country: data.address.country || '',
                state: data.address.state || '',
                city: data.address.city || '',
                area: data.address.area || '',
                zip: data.address.zip || '',
            }
        }
        dispatch(UpdateUser(final_data, moveToNext))
    };
    const moveToNext = () => {
        router.push('/dashboard/installers')
    }

    const userReducer = useSelector((state) => state.user);
    return (
        <>

            <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bdrb1 pb15 mb25">
                        <h5 className="list-title">Installer Details</h5>
                    </div>
                    {
                        imgLoading === true
                            ?
                            <Loader />
                            :
                            <div className="col-xl-12">
                                <div className="profile-box d-sm-flex align-items-center mb30">
                                    <div className="profile-img mb20-sm">
                                        <Image
                                            height={71}
                                            width={71}
                                            className="rounded-circle wa-xs"
                                            src={selectedImage ? selectedImage : "/images/team/fl-1.png"}
                                            style={{
                                                height: "71px",
                                                width: "71px",
                                                objectFit: "cover",
                                            }}
                                            alt="profile"
                                        />
                                    </div>
                                    <div className="profile-content ml20 ml0-xs">
                                        <div className="d-flex align-items-center my-3">
                                            <a
                                                className="tag-delt text-thm2"
                                                onClick={() => setSelectedImage(null)}
                                            >
                                                <span className="flaticon-delete text-thm2" />
                                            </a>
                                            <label>
                                                <input
                                                    type="file"
                                                    accept=".png, .jpg, .jpeg"
                                                    className="d-none"
                                                    onChange={handleImageChange}
                                                />
                                                <a className="upload-btn ml10">Upload Images</a>
                                            </label>
                                        </div>
                                        {/* <p className="text mb-0">
                                            Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                                            files are .jpg &amp; .png
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                    }
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
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        readOnly
                                        {...register('email', { required: 'Email is required' })}
                                        className="form-control"
                                        placeholder=""
                                    />
                                    {
                                        errors.email &&
                                        <FieldError message={errors.email.message} />
                                    }
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="mb20">
                                    <label className="heading-color ff-heading fw500 mb10">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="phone_no"
                                        className="form-control"
                                        {...register('phone_no', {
                                            required: 'Phone number is required',
                                            pattern: {
                                                value: /^(?:\+92|92|03)[0-9]{2}\s?[0-9]{7}$/,
                                                message: 'Phone number must be 10-15 digits',
                                            },
                                        })}
                                    />
                                    {
                                        errors.phone_no &&
                                        <FieldError message={errors.phone_no.message} />
                                    }

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb20">
                                    <label className="heading-color ff-heading fw500 mb10">
                                        Installer Experience
                                    </label>
                                    <input
                                        type="number"
                                        id="experience"
                                        className="form-control"
                                        {...register('experience', {
                                            required: 'Experience is required',
                                            min: { value: 0, message: 'Experience must be at least 0 years' },

                                        })}
                                    />
                                    {
                                        errors.experience &&
                                        <FieldError message={errors.experience.message} />
                                    }
                                </div>

                            </div>
                            <div className="col-sm-12">
                                <div className="mb20">
                                    <label className="heading-color ff-heading fw500 mb10">
                                        Address
                                    </label>
                                    <Controller
                                        name="address"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: 'Address is required', // Make the field required
                                        }}
                                        render={({ field: { onChange, value } }) => (
                                            <PlacesAutocomplete
                                                value={value}
                                                onChange={(value) => {
                                                    onChange(value); // Update react-hook-form state
                                                    // handleChange(value);   // Update local state and log form values
                                                }}
                                                onSelect={(selectedAddress, placeId) => {
                                                    onChange(selectedAddress); // Update react-hook-form state
                                                    handleSelect(selectedAddress, placeId);   // Handle address selection and log form values
                                                }}
                                                searchOptions={{
                                                    componentRestrictions: { country: 'pk' }, // Restrict to Pakistan
                                                }}
                                            >
                                                {({
                                                    getInputProps,
                                                    suggestions,
                                                    getSuggestionItemProps,
                                                    loading,
                                                }) => (
                                                    <div>
                                                        <input
                                                            className="form-control"
                                                            {...getInputProps({

                                                            })}
                                                        />
                                                        <div>
                                                            {loading && <div>Loading...</div>}
                                                            {suggestions.map((suggestion) => {
                                                                const className = suggestion.active
                                                                    ? 'suggestion-item--active'
                                                                    : 'suggestion-item';
                                                                return (
                                                                    <div
                                                                        {...getSuggestionItemProps(suggestion, {
                                                                            className,
                                                                        })}
                                                                        key={suggestion.placeId}
                                                                    >
                                                                        {suggestion.description}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                            </PlacesAutocomplete>
                                        )}
                                    />
                                    {
                                        errors.address &&
                                        <FieldError message={errors.address.message} />
                                    }
                                </div>

                            </div>
                            <div className="d-flex col-12 justify-content-between mb25">
                                {
                                    watch('country')
                                    &&
                                    <div>
                                        <label className="form-label fw500 dark-color">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            id='country'
                                            className="form-control"
                                            placeholder=""
                                            readOnly
                                            {...register('country', { required: false })}
                                        />
                                    </div>
                                }
                                {
                                    watch('state')
                                    &&
                                    <div>
                                        <label className="form-label fw500 dark-color">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            id='state'
                                            className="form-control"
                                            placeholder=""
                                            readOnly
                                            {...register('state', { required: false })}
                                        />
                                    </div>
                                }
                                {
                                    watch('city')
                                    &&
                                    <div>
                                        <label className="form-label fw500 dark-color">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id='city'
                                            className="form-control"
                                            placeholder=""
                                            readOnly
                                            {...register('city', { required: false })}
                                        />
                                    </div>
                                }
                                {
                                    watch('area')
                                    &&
                                    <div>
                                        <label className="form-label fw500 dark-color">
                                            Area
                                        </label>
                                        <input
                                            type="text"
                                            id='area'
                                            className="form-control"
                                            placeholder=""
                                            readOnly
                                            {...register('area', { required: false })}
                                        />
                                    </div>
                                }
                            </div>
                            <div className="col-md-12 ">
                                {
                                    userReducer.updateUserLoading === true
                                        ?
                                        <Loader />
                                        :
                                        <div className="d-flex justify-content-end gap-1">
                                            <button
                                                className="ud-btn btn-thm default-box-shadow2"
                                                type="submit"
                                            >
                                                Update{" "}
                                                <i className="fal fa-arrow-right-long" />
                                            </button>
                                        </div>
                                }
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
