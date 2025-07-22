"use client";
import React, { useState } from "react";
import SelectInput from "../option/SelectInput";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/authentication/ProvideAuth";
import { uploadImage } from "@/redux/api";
import { createImageFromInitials, FieldError, Loader } from "@/assets";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId
} from 'react-places-autocomplete';
import { Controller, useForm, } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { UpdateUser } from "@/redux/action";
export default function ProfileDetails() {
  const auth = useAuth()
  const [selectedImage, setSelectedImage] = useState(auth.avatar);
  const [address, setAddress] = useState(null);
  const [imgLoading, setImgLoading] = useState(false)
  const [imgError, setImgError] = useState(null)

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
      id: auth.id,
      name: auth.name,
      email: auth.email,
      avatar: auth.avatar,
      type: auth.type,
      phone_no: auth.phone_no,
      address: auth.address.street || '',
      country: auth.address.country || '',
      state: auth.address.state || '',
      city: auth.address.city || '',
      area: auth.address.area || '',
      zip: auth.address.zip || '',
      status: auth.status,
      owner_name: auth.type === 'shop' ? auth.shop.owner_name : null,
      experience: auth.type === 'installer' ? auth.installer.experience : null,

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
      address: address || auth.address
    }
    dispatch(UpdateUser(final_data, moveToNext))
  };
  const moveToNext = (response) => {
    const final_data = {
      token: auth.token,
      name: response.user.name,
      address: response.user.address,
      avatar: response.user.avatar,
      email: response.user.email,
      id: auth.id,
      phone_no: response.user.phone_no,
      status: response.user.status,
      type: response.user.type, ...(auth.type === "installer" && {
        installer: {
          id: response.userDetails.id,
          experience: response.userDetails.experience
        }
      }),
      ...(auth.type === "shop" && {
        shop: {
          id: response.userDetails.id,
          owner_name: response.userDetails.owner_name
        }
      })
    }
    localStorage.setItem('user', JSON.stringify(final_data))

  }

  const userReducer = useSelector((state) => state.user);
  return (
    <>

      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bdrb1 pb15 mb25">
            <h5 className="list-title">Profile Details</h5>
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
                    <p className="text mb-0">
                      Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                      files are .jpg &amp; .png
                    </p>
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

              {
                auth.type !== 'superAdmin'
                &&
                <div className="col-sm-6">
                  {
                    auth.type === 'shop'
                      ?
                      <div className="mb20">
                        <label className="heading-color ff-heading fw500 mb10">
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
                  }

                </div>
              }




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
