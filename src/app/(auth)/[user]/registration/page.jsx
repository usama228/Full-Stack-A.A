"use client";
import { capitalizeFirstLetter, createImageFromInitials, FieldError, Loader } from "@/assets";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";
import Link from "next/link";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
    geocodeByPlaceId
} from 'react-places-autocomplete';
import { Controller, useForm, } from 'react-hook-form';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";
import { uploadImage } from "@/redux/api";
import { AddUser } from "@/redux/action";
import { useRouter } from "next/navigation";
export default function Page(props) {
    const { params: { user } } = props;
    const router = useRouter();
    const userReducer = useSelector((state) => state.user);
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
            name: '',
            password: '',
            email: '',
            avatar: '',
            type: user === 'seller' ? 'shop' : 'installer',
            phone_no: '',
            address: '',
            status: 'active',
            owner_name: '',
            experience: ''

        },
    });
    const [address, setAddress] = useState(null);
    const [img, setImg] = useState(null)
    const [imgLoading, setImgLoading] = useState(false)
    const [imgError, setImgError] = useState(null)
    const handleChange = (value) => {
        setAddress(value);
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
            avatar: img || createImageFromInitials(500, data.name),
            address: address
        }
        dispatch(AddUser(final_data, moveToNext))
    };
    const moveToNext = () => {
        router.push('/login');
    }
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
                        setImg(response.data.data.path)
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
    const removeImage = () => {
        setImg(null)
        setValue('avatar', null)
    }
    return (
        <div className="bgc-thm4">
            <Header21 />

            <section className="our-register">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 m-auto wow fadeInUp"
                            data-wow-delay="300ms"
                        >
                            <div className="main-title text-center">
                                <h2 className="title">{`Sign Up as ${capitalizeFirstLetter(user)}`}</h2>
                                <p className="paragraph">
                                    Give your visitor a smooth online
                                    experience with a solid UX design
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row wow fadeInRight"
                        data-wow-delay="300ms"
                    >
                        <div className="col-xl-6 mx-auto">
                            <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                                <div className="mb30">
                                    <h4>Let's create your account!</h4>
                                    <p className="text mt20">
                                        Already have an account?{" "}
                                        <Link
                                            href="/login"
                                            className="text-thm"
                                        >
                                            Log In!
                                        </Link>
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                                            src={img ? img : "/images/team/fl-1.png"}
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
                                                                onClick={() => removeImage(null)}
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
                                                                <a className="upload-btn ml10">Upload Image</a>
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
                                    {/* <div className="mb25">
                                        {img &&
                                            <div className="d-flex justify-content-center ">
                                                <Image
                                                    height={200}
                                                    width={200}
                                                    className="roundImage img-fluid"
                                                    src={img}
                                                    alt="thumb"
                                                />
                                                <i className="fal fa-times fa-2x cursor"
                                                    onClick={removeImage}
                                                    style={{ color: 'red' }} />
                                            </div>
                                        }
                                        <div>
                                            <label className="form-label fw500 dark-color">
                                                Upload Image
                                            </label>

                                            <input
                                                type="file"
                                                id="avatar"
                                                disabled={imgLoading}
                                                className="form-control"
                                                accept="image/*"
                                                {...register('avatar', { required: false })}
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div> */}
                                    <div className="mb25">
                                        <label className="form-label fw500 dark-color">
                                            {user === 'seller' ? "Shop Name" : 'Installer Name'}
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
                                    <div className="mb25">
                                        <label className="form-label fw500 dark-color">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            {...register('email', { required: 'Email is required' })}
                                            className="form-control"
                                            placeholder=""
                                        />
                                        {
                                            errors.email &&
                                            <FieldError message={errors.email.message} />
                                        }
                                    </div>
                                    <div className="mb15">
                                        <label className="form-label fw500 dark-color">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder=""
                                            {...register('password', { required: 'Password is required' })}
                                        />
                                        {
                                            errors.password &&
                                            <FieldError message={errors.password.message} />
                                        }

                                    </div>
                                    <div className="mb25">
                                        <label className="form-label fw500 dark-color">
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
                                    {
                                        user === 'seller'
                                            ?
                                            <div className="mb25">
                                                <label className="form-label fw500 dark-color">
                                                    Owner Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="owner_name"
                                                    className="form-control"
                                                    placeholder=""
                                                    {...register('owner_name', {
                                                        required: 'Owner Name is required',

                                                    })}
                                                />
                                                {
                                                    errors.owner_name &&
                                                    <FieldError message={errors.owner_name.message} />
                                                }
                                            </div>
                                            :
                                            <div className="mb25">
                                                <label className="form-label fw500 dark-color">
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
                                    }


                                    <div className="mb25">
                                        <label className="form-label fw500 dark-color">
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
                                                        handleChange(value);   // Update local state and log form values
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
                                    <div className="d-flex justify-content-between mb25">
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


                                    <div className="d-grid mb20">
                                        {
                                            userReducer.addUserLoading === true
                                                ?
                                                <Loader />
                                                :
                                                <button
                                                    className="ud-btn btn-thm default-box-shadow2"
                                                    type="submit"
                                                >
                                                    Create Account{" "}
                                                    <i className="fal fa-arrow-right-long" />
                                                </button>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
