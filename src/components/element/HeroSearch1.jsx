"use client";
import { useState } from "react";

export default function HeroSearch1({ name, setName }) {

  return (
    <>
      <form className="form-search position-relative">
        <div className="box-search">
          <span className="icon far fa-magnifying-glass" />
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="What are you looking for?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <div
            className="search-suggestions"
            style={
              isSearchDropdownOpen
                ? {
                    visibility: "visible",
                    opacity: "1",
                    top: "70px",
                  }
                : {
                    visibility: "hidden",
                    opacity: "0",
                    top: "100px",
                  }
            }
          >
            <h6 className="fz14 ml30 mt25 mb-3">Popular Search</h6>
            <div className="box-suggestions">
              <ul className="px-0 m-0 pb-4">
                {searchResult.map((item, index) => (
                  <li
                    key={index}
                    className={
                      getSelectedResult === item ? "ui-list-active" : ""
                    }
                  >
                    <div
                      onClick={() => selectSearch(item)}
                      className="info-product"
                    >
                      <div className="item_title">{item}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </form>
    </>
  );
}
