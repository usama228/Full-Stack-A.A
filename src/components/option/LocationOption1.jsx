"use client";
import { cities } from "@/data/listing";
import { useState } from "react";
import { PAGE_LIMIT } from "../../../config";

export default function LocationOption1(props) {
  const [visibleCount, setVisibleCount] = useState(5);
  const { type, setCity, radius, setRadius, location, filterData, name, setName, city, state, country, area, page, } = props
  const showMore = () => {
    setVisibleCount(cities.length);
  };
  const showLess = () => {
    setVisibleCount(5);
  };


  const changeOfCity = (searched) => {
    setCity(searched)
    filterData({
      name: name,
      country: country,
      state: state,
      city: searched,
      area: area,
      type: type,
      status: "active",
      radius: radius,
      page: 1,
      limit: PAGE_LIMIT,
      userLatitude: location.latitude,
      userLongitude: location.longitude
    })

  }
  const changeOfRaius = (searched) => {
    setRadius(searched)
    filterData({
      name: name,
      country: country,
      state: state,
      city: city,
      area: area,
      type: type,
      status: "active",
      radius: searched,
      page: 1,
      limit: PAGE_LIMIT,
      userLatitude: location.latitude,
      userLongitude: location.longitude
    })

  }
  return (
    <div className="card-body d-block card-body px-0 pt-0">
      <div
        className={`default-box-shadow1 mb30`}>
        <div>
          <label htmlFor="radius" className="radius-label">
            Radius in Km: {radius}
          </label>
          <br />
          <input
            type="range"
            id="volume"
            min="0"
            max="100"
            step="1"
            value={radius}
            onChange={(e) => changeOfRaius(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="checkbox-style1 mb15">
        {cities.slice(0, visibleCount).map((item, i) => (
          <label key={i} className="custom_checkbox">
            {item.title}
            <input
              type="checkbox"
              checked={city === item.value}
              onChange={() => changeOfCity(item.value)}
            />
            <span className="checkmark" />

          </label>
        ))}
      </div>
      {
        // visibleCount === cities.length ? (
        //   <span></span>
        // )
        //   :
          visibleCount < cities.length ? (
            <a className="text-thm" onClick={showMore} style={{ cursor: "pointer" }}>
              Show More
            </a>
          ) :
            (
              <a className="text-thm" onClick={showLess} style={{ cursor: "pointer" }}>
                Show Less
              </a>
            )
      }
    </div>
  );
}
