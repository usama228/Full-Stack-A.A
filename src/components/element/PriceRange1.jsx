"use client";
import ReactSlider from "react-slider";

export default function PriceRange1(props) {
  const { setPriceRange, price } = props

  const rangeHandler = (e) => {
    setPriceRange(e);
  };

  return (
    <>
      <div className="price__range__box">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          value={[price.startPrice, price.endPrice]}
          min={0}
          max={100000}
          onChange={rangeHandler}
          minDistance={10}
        />
      </div>
    </>
  );
}
