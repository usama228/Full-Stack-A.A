"use client";
import BudgetOption1 from "../option/BudgetOption1";
import ClearButton from "../button/ClearButton";
import CategoryOption2 from "../option/CategoryOption2";
import { PAGE_LIMIT } from "../../../config";

export default function ShopAreaSidebar1(props) {
  const { filterData,  price, setPrice, category, setCategory } = props
  
  const callOnClear = () => {
    setPrice({
      startPrice: null,
      endPrice: null
    })
    setCategory(null)
    filterData({
      category_id: null,
      min_price: null,
      max_price: null,
      page: 1,
      limit: PAGE_LIMIT,
    })
  }
  return (
    <div className="shop-sidebar">
      {/* <div className={`default-box-shadow1 `}>
        <div className="search_area">
          <input
            type="text"
            className="form-control"
            onChange={(e) => changeOfProduct(e.target.value)}
            value={name}

            placeholder={
              "Search"
            }
          />
          <label>
            <span className="flaticon-loupe" />
          </label>
        </div>
      </div> */}
      <div className="sidebar-accordion">
        <div className="accordion" id="accordionExample2">
          <div className="card mb20 pb0">
            <div className="scard-header" id="headingTwos">
              <h4>
                Category
              </h4>
            </div>
            <div>
              <CategoryOption2 {...props} />
            </div>
          </div>
          <div className="card mb20 pb5">
            <div className="scard-header" id="headingOnes">
              <h4>
                Price
              </h4>
            </div>
            <div
            >
              <div className="card-body card-body px-0 pt-0">
                <div className="range-slider-style2">
                  <BudgetOption1 {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ClearButton
          show={(price.startPrice || price.endPrice || category)}
          clearFilters={callOnClear}
          {...props} />
      </div>
    </div>

  );
}
