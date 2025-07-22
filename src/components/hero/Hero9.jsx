"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import HeroSearch1 from "../element/HeroSearch1";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { GetCountryStates, GetStateCities } from "@/redux/action";
import { PAKISTAN_ID } from "../../../config";
import { getFilteredQuery } from "@/assets";


const herobg = [
  "/images/home/Banner1.png",
  "/images/home/Banner3.png",
  "/images/home/Banner2.png",
  
];
const typeList = [
  {
    name: 'Seller',
    id: 'shops'
  },
  {
    name: 'Installer',
    id: 'installers'
  }
]
export default function Hero9() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedType, setSelectedType] = useState('shops');
  const [selectedCity, setSelectedCity] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [name, setName] = useState(null);
  const dispatch = useDispatch()
  const country = useSelector((state) => state.lookUp)
  useEffect(() => {
    dispatch(GetCountryStates(PAKISTAN_ID))
  }, [dispatch])

  const changeInState = (state) => {
    setSelectedCity(null)
    if (state) {
      setSelectedState(state.name)
      dispatch(GetStateCities({
        countryId: PAKISTAN_ID,
        stateId: state.id
      }))
    } else {
      setSelectedState(null)
    }
  }
  const filterStates = (country.statesList || []).filter((item) =>
    item.name.toLowerCase().includes((state || "").toLowerCase())
  )
  const filterCities = (country.citiesList || []).filter((item) =>
    item.name.toLowerCase().includes((city || "").toLowerCase())
  )
  const changeInCity = (city) => {
    if (city) {
      setSelectedCity(city.name)
    }
    else {
      setSelectedCity(null)
    }

  }

  const router = useRouter();

  // search handler
  const searchHandler = () => {
    const query = {
      name: name,
      state: selectedState,
      city: selectedCity
    }
    const url = `/${selectedType}?${getFilteredQuery(query)}`
    router.push(url);
  };
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="hero-home10 p-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper home9-hero-content">
                <div className="navi_pagi_vertical_right dots_nav_light banner-style-one slider-1-grid position-relative">
                  {showSwiper && (
                    <Swiper
                      slidesPerView={1}
                      navigation={{
                        prevEl: ".btn__prev__015",
                        nextEl: ".btn__next__015",
                      }}
                      modules={[Navigation, Pagination]}
                      className="mySwiper"
                      loop={true}
                      pagination={{
                        el: ".swiper__pagination__015",
                        clickable: true,
                      }}
                    >
                      {herobg.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className="slide slide-one"
                            style={{
                              backgroundImage: `url(${item})`,
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div className="ui-verticle-1">
                    <div className="row gap-2">
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__prev__015">
                          <i className="far fa-arrow-left-long" />
                        </button>
                      </div>
                      <div className="col-auto">
                        <div
                          className="swiper__pagination swiper__pagination-2 swiper__pagination__015 d-flex gap-3"
                          style={{
                            paddingTop: "10px",
                          }}
                        ></div>
                      </div>
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__next__015">
                          <i className="far fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-banner-content at-home9">
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <h3 className="banner-title">
                   Join the Solar Revolution <br className="d-none d-lg-block" />
                 
                </h3>
                <p className="banner-text text-white ff-heading mb30">
                  Explore Trusted Dealers Products, and Installers Near You!
                </p>
                <div className="advance-search-tab bgc-white bdrs60 p10 bdrs4-sm banner-btn position-relative zi9">
                  <div className="row g-3"> {/* Added gap between rows */}
                    {/* Column for Name Search */}
                    <div className="col-12 col-md-4">
                      <div className="advance-search-field">
                        <HeroSearch1 name={name} setName={setName} />
                      </div>
                    </div>

                    {/* Column for Type Dropdown */}
                    <div className="col-6 col-md-2">
                      <div className="bselect-style1 bdrl1 bdrn-sm">
                        <div className="dropdown bootstrap-select">
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light w-100"
                            data-bs-toggle="dropdown"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  {selectedType !== null
                                    ? selectedType === "shops"
                                      ? "Sellers"
                                      : "Installers"
                                    : "Type"}
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="dropdown-menu">
                            <div className="inner show">
                              <ul className="dropdown-menu inner show">
                                {(typeList || []).map((item, index) => (
                                  <li
                                    key={index}
                                    onClick={() => setSelectedType(item.id)}
                                    className={`dropdown-item ${selectedType === item.id ? "active" : ""
                                      }`}
                                  >
                                    <span className="text">{item.name}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column for State Dropdown */}
                    <div className="col-6 col-md-2">
                      <div className="bselect-style1 bdrl1 bdrn-sm">
                        <div className="dropdown bootstrap-select">
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light w-100"
                            data-bs-toggle="dropdown"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  {selectedState !== null ? selectedState : "State"}
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="dropdown-menu">
                            <div className="px-3 py-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                              />
                            </div>
                            <div
                              className="inner show"
                              style={{ maxHeight: "200px", overflowY: "auto" }}
                            >
                              <ul className="dropdown-menu inner show">
                                <li
                                  onClick={() => changeInState(null)}
                                  className={`dropdown-item ${selectedState === null ? "active" : ""
                                    }`}
                                >
                                  <span className="text">All</span>
                                </li>
                                {filterStates.length > 0 ? (
                                  filterStates.map((item, index) => (
                                    <li
                                      key={index}
                                      onClick={() => changeInState(item)}
                                      className={`dropdown-item ${selectedState === item.name ? "active" : ""
                                        }`}
                                    >
                                      <span className="text">{item.name}</span>
                                    </li>
                                  ))
                                ) : (
                                  <li className="dropdown-item disabled">
                                    <span className="text">No results found</span>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column for City Dropdown */}
                    <div className="col-6 col-md-2">
                      <div className="bselect-style1 bdrl1 bdrn-sm">
                        <div className="dropdown bootstrap-select">
                          <button
                            type="button"
                            disabled={!selectedState}
                            className="btn dropdown-toggle btn-light w-100"
                            data-bs-toggle="dropdown"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  {selectedCity !== null ? selectedCity : "City"}
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="dropdown-menu">
                            <div className="px-3 py-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            </div>
                            <div
                              className="inner show"
                              style={{ maxHeight: "200px", overflowY: "auto" }}
                            >
                              <ul className="dropdown-menu inner show">
                                <li
                                  onClick={() => changeInCity(null)}
                                  className={`dropdown-item ${selectedCity === null ? "active" : ""
                                    }`}
                                >
                                  <span className="text">All</span>
                                </li>
                                {filterCities.length > 0 ? (
                                  filterCities.map((item, index) => (
                                    <li
                                      key={index}
                                      onClick={() => changeInCity(item)}
                                      className={`dropdown-item ${selectedCity === item.name ? "active" : ""
                                        }`}
                                    >
                                      <span className="text">{item.name}</span>
                                    </li>
                                  ))
                                ) : (
                                  <li className="dropdown-item disabled">
                                    <span className="text">No results found</span>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column for Search Button */}
                    <div className="col-12 col-md-2">
                      <div className="text-center text-md-start">
                        <button
                          onClick={searchHandler}
                          className="ud-btn btn-dark bdrs60 bdrs4-sm w-100 w-md-auto custom-btn-padding"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


const FilterDropDown = ({ disabled, filterData, selectedValue, title, dataList, onChange }) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [data, setData] = useState(dataList)
  const getData = (value) => {
    setSearchQuery(value)
    setData(filterData(value))
  }

  return (
    <div className="bselect-style1 bdrl1 bdrn-sm">
      <div className="dropdown bootstrap-select">
        <button
          type="button"
          disabled={disabled}
          className="btn dropdown-toggle btn-light"
          data-bs-toggle="dropdown"
        >
          <div className="filter-option">
            <div className="filter-option-inner">
              <div className="filter-option-inner-inner">
                {selectedValue !== null ? selectedValue : title}
              </div>
            </div>
          </div>
        </button>
        <div className="dropdown-menu">
          {/* Search Input */}
          <div className="px-3 py-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => getData(e.target.value)}
            />
          </div>

          {/* Scrollable Dropdown */}
          <div className="inner show" style={{ maxHeight: "200px", overflowY: "auto" }}>
            <ul className="dropdown-menu inner show">
              <li
                onClick={() => onChange(null)}
                className={`dropdown-item ${selectedValue === null ? "active" : ""}`}
              >
                <span className="text">All</span>
              </li>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => onChange(item)}
                    className={`dropdown-item ${selectedValue === item.name ? "active" : ""}`}
                  >
                    <span className="text">{item.name}</span>
                  </li>
                ))
              ) : (
                <li className="dropdown-item disabled">
                  <span className="text">No results found</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}