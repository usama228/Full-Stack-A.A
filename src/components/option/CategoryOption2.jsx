"use client";
import { productLists } from "@/data/listing";
import { useEffect, useState } from "react";
import { PAGE_LIMIT } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "@/redux/action";

export default function CategoryOption2(props) {
  const [visibleCount, setVisibleCount] = useState(3); 
  const { filterData, name, setName, price, category, setCategory } = props;
  const showMore = () => {
    setVisibleCount(productLists.length);
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  const categoryList = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCategories({
      limit: 20,
      page: 1,
    }));
  }, [dispatch]);

  const changeOfProduct = (searched) => {
    setCategory(searched);
    filterData({
      category_id: searched,
      min_price: price.startPrice,
      max_price: price.endPrice,
      page: 1,
      limit: PAGE_LIMIT,
    });
  };

  return (
    <div className="card-body card-body px-0 pt-0">
      <div className="checkbox-style1 mb15">
        {(categoryList.getAllCategories.category || [])
          .slice(0, visibleCount)
          .map((item, i) => {
            return (
              <label key={i} className="custom_checkbox">
                {item.name}
                <input
                  type="checkbox"
                  checked={category === item.id}
                  onChange={() => changeOfProduct(item.id)}
                />
                <span className="checkmark" />
              </label>
            );
          })}
      </div>
      {
        visibleCount === productLists.length ? (
          <span></span>
        ) : (
          visibleCount < productLists.length && (
            <a
              className="text-thm"
              onClick={showMore}
              style={{ cursor: "pointer" }}
            >
              Show More
            </a>
          )
        )
      }

      {
        visibleCount > 3 && (
          <a
            className="text-thm"
            onClick={showLess}
            style={{ cursor: "pointer" }}
          >
            Show Less
          </a>
        )
      }
    </div>
  );
}
