'use client'
import { createImageFromInitials, FieldError, Loader } from "@/assets";
import { useAuth } from "@/authentication/ProvideAuth";
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { AddProject, GetProject, RemoveProject, UpdateProject } from "@/redux/action";
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
import { Tooltip } from "react-tooltip";



function AddEditProject() {

    return (
        <>

            <MobileNavigation2 />
            <DashboardLayout>

                <AddEditProjectBody />
            </DashboardLayout>
        </>
    );
}

export default withAuth(AddEditProject);

export function AddEditProjectBody() {
    const auth = useAuth();
    const { installer_id,id } = useParams();
    const router = useRouter()

    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const project = useSelector((state) => state.project);
    useEffect(() => {
        if (parseInt(id) > 0) {
            dispatch(GetProject(id))
        }
    }, [dispatch, id])
    const remove = () => {
        dispatch(RemoveProject(id, moveToNext))
    }
    const moveToNext = () => {
        if(auth.type === 'superAdmin'){
            router.push(`/dashboard/projects/installer/${installer_id}`)
        }else{
            router.push(`/dashboard/projects`)
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
                        <h2>{`${parseInt(id) > 0 ? 'Edit' : 'Add'} Project`}</h2>
                    </div>
                </div>
            </div>
            {
                project.projectLoading === true
                &&
                <Loader />
            }
            {
                (project.projectSuccess === true || id === 'new')
                &&
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">

                            <div className={`bdrb1 d-flex  pb15 mb25 ${parseInt(id) > 0 ? 'justify-content-between' : "justify-content-start"}`}>
                                <h5 className="list-title">Project Details</h5>
                                {parseInt(id) > 0 && auth.type !== "superAdmin" && 
                                    <span
                                        onClick={() => setShow(true)}
                                        className="cursor"
                                    >
                                        Delete Project{" "}
                                        <span className="flaticon-delete" />
                                    </span>

                                }

                            </div>

                            <div className="col-lg-12">

                                <AddEditBody data={id === 'new' ? null : project.project} />
                            </div>
                        </div>

                    </div>

                    <DeleteModal
                        show={show}
                        setShow={setShow}
                        message={'Are You Sure You Want to delete this project'}
                        onYes={remove} />
                </div>
            }


        </div>

    );
}



const AddEditBody = (props) => {
    const { data } = props
    const [address, setAddress] = useState(null)
    let auth = useAuth()
    const {installer_id, id } = useParams();
    const project = useSelector((state) => state.project)
    const dispatch = useDispatch();
    const router = useRouter();
    const {
        setValue,
        control,
        watch,
        register,
        reset,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: data ? {
            id: data.id,
            name: data.name,
            end_date: new Date(data.end_date).toISOString().split('T')[0],
            start_date: new Date(data.start_date).toISOString().split('T')[0],
            description: data.description,
            contact_person_name: data.contact_person.name,
            contact_person_number: data.contact_person.phone_no,
            address: data.address?.street || '',
            country: data.address?.country || '',
            state: data.address?.state || '',
            city: data.address?.city || '',
            area: data.address?.area || '',
            zip: data.address?.zip || '',
        } : {
            name: '',
            end_date: '',
            start_date: '',
            description: '',
            contact_person_name: '',
            contact_person_number: '',
            address: '',
            country: '',
            state: '',
            city: '',
            area: '',
            zip: '',
        },
    });
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

        setAddress(address_data)
    };
    const onSubmit = async (data) => {
        let final_data = {
            ...data,
            installer_id: installer_id?installer_id:auth.installer.id,
            address: address,
            contact_person: {
                name: data.contact_person_name,
                phone_no: data.contact_person_number
            }
        }
        if (parseInt(id) > 0) {
            dispatch(UpdateProject({ ...final_data, id: id }, moveToNext))
        }
        else {
            dispatch(AddProject(final_data, moveToNext))
        }
    };
    const moveToNext = () => {
        if(auth.type === 'superAdmin'){
            router.push(`/dashboard/projects/installer/${installer_id}`)
        }else{
            router.push(`/dashboard/projects`)
        }
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
                                Contact Person Name
                            </label>
                            <input
                                type="text"
                                id="contact_person_name"
                                {...register('contact_person_name', {
                                    required: 'Contact Person Name is required',

                                })}
                                className="form-control"

                            />
                            {errors.contact_person_name && <FieldError message={errors.contact_person_name.message} />}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                Contact Person Number
                            </label>
                            <input
                                type="text"
                                id="contact_person_number"

                                {...register('contact_person_number', {
                                    required: 'Contact Person Number is required',
                                    pattern: {
                                        value: /^(?:\+92|92|03)[0-9]{2}\s?[0-9]{7}$/,
                                        message: 'Phone number must be 10-15 digits',
                                    },
                                })}
                                className="form-control"

                            />
                            {errors.contact_person_number && <FieldError message={errors.contact_person_number.message} />}
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="start_date"
                                {...register('start_date', {
                                    required: 'Start Date is required',
                                    validate: (value) => {
                                        const today = new Date().toISOString().split('T')[0];
                                        if (value > today) {
                                            return 'Start Date cannot be in the future';
                                        }
                                        return true;
                                    },
                                })}
                                className="form-control"
                            />
                            {errors.start_date && (
                                <FieldError message={errors.start_date.message} />
                            )}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">
                                End Date
                            </label>
                            <input
                                type="date"
                                id="end_date"
                                {...register('end_date', {
                                    required: 'End Date is required',
                                    validate: (value) => {
                                        const startDate = getValues('start_date');
                                        if (!startDate) {
                                            return 'Please select a Start Date first';
                                        }
                                        if (value < startDate) {
                                            return 'End Date must be equal or after the Start Date';
                                        }
                                        return true;
                                    },
                                })}
                                className="form-control"
                            />
                            {errors.end_date && (
                                <FieldError message={errors.end_date.message} />
                            )}
                        </div>
                    </div>
                    <div className="col-sm-6">
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

                    {
                        watch('country')
                        &&
                        <div className="col-sm-6">
                            <div className="mb20">
                                <label className="heading-color ff-heading fw500 mb10">
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
                        </div>

                    }
                    {
                        watch('state')
                        &&
                        <div className="col-sm-6">
                            <div className="mb20">
                                <label className="heading-color ff-heading fw500 mb10">
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
                        </div>

                    }
                    {
                        watch('city')
                        &&
                        <div className="col-sm-6">
                            <div className="mb20">
                                <label className="heading-color ff-heading fw500 mb10">
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
                        </div>

                    }
                    {
                        watch('area')
                        &&
                        <div className="col-sm-6">
                            <div className="mb20">
                                <label className="heading-color ff-heading fw500 mb10">
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
                        </div>

                    }
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
                            (project.projectLoading || project.updateProjectLoading)
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