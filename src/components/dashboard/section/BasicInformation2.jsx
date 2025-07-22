"use client";
import { useState } from "react";
import SelectInput from "../option/SelectInput";
import Link from "next/link";
import UploadAttachment from "./UploadAttachment";

export default function BasicInformation2() {
  const [getCategory, setCategory] = useState({
    option: "Select",
    value: "select",
  });
  const [getFreeType, setFreeType] = useState({
    option: "Select",
    value: "select",
  });
  const [getPriceType, setPriceType] = useState({
    option: "Select",
    value: "select",
  });
  const [getProjectDuration, setProjectDuration] = useState({
    option: "Select",
    value: "select",
  });
  const [getLevel, setLevel] = useState({
    option: "Select",
    value: "select",
  });
  const [getCountry, setCountry] = useState({
    option: "United States",
    value: "usa",
  });
  const [getCity, setCity] = useState({
    option: "New York",
    value: "new-york",
  });
  const [getLanguage, setLanguage] = useState({
    option: "Select",
    value: null,
  });
  const [getLanLevel, setLanLevel] = useState({
    option: "Select",
    value: null,
  });
  const [getSkill, setSkill] = useState({
    option: "Nothing selected",
    value: null,
  });

  // handlers
  const categoryHandler = (option, value) => {
    setCategory({
      option,
      value,
    });
  };
  const freeTypeHandler = (option, value) => {
    setFreeType({
      option,
      value,
    });
  };
  const priceTypeHandler = (option, value) => {
    setPriceType({
      option,
      value,
    });
  };
  const projectDurationHandler = (option, value) => {
    setProjectDuration({
      option,
      value,
    });
  };
  const levelHandler = (option, value) => {
    setLevel({
      option,
      value,
    });
  };
  const countryHandler = (option, value) => {
    setCountry({ option, value });
  };
  const cityHandler = (option, value) => {
    setCity({ option, value });
  };
  const languageHandler = (option, value) => {
    setLanguage({ option, value });
  };
  const lanLevelHandler = (option, value) => {
    setLanLevel({ option, value });
  };
  const skillHandler = (option, value) => {
    setSkill({
      option,
      value,
    });
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">

        <div className="col-xl-12">
          <form className="form-style1">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Shop Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Category Id"
                    defaultSelect={getCategory}
                    handler={categoryHandler}
                    data={[
                      {
                        option: "Select",
                        value: "select",
                      },
                      {
                        option: "Graphics & Design",
                        value: "graphics-design",
                      },
                      {
                        option: "Digital Marketing",
                        value: "digital-marketing",
                      },
                      {
                        option: "Writing & Translation",
                        value: "writing-translation",
                      },
                      {
                        option: "Video & Animation",
                        value: "video-animation",
                      },
                      {
                        option: "Music & Audio",
                        value: "music-audio",
                      },
                      {
                        option: "Programming & Tech",
                        value: "programming-tech",
                      },
                      {
                        option: "Business",
                        value: "business",
                      },
                      {
                        option: "Lifestyle",
                        value: "lifestyle",
                      },
                      {
                        option: "Trending",
                        value: "trending",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Sale Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>
        

              <div className="col-md-12">
                <div className="mb10">
                  <label className="heading-color ff-heading fw500 mb10">
                    Description
                  </label>
                  <textarea cols={30} rows={6} placeholder="Description" />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="mb20">
                  <UploadAttachment />
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-end">
                  <Link className="ud-btn btn-thm" href="/contact">
                    Save
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
