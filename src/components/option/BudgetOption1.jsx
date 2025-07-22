"use client";
import priceStore from "@/store/priceStore";
import PriceRange1 from "../element/PriceRange1";

export default function BudgetOption1(props) {
  const {  price } = props
  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        <div className="range-slider-style2">
          <div className="range-wrapper">
            <PriceRange1 {...props} />
            <div className="d-flex align-items-center justify-content-center pt-3">
              <span id="slider-range-value1">${price.startPrice}</span>
              <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
              <span id="slider-range-value2">${price.endPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
