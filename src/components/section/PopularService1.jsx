"use client";
import PopularServiceCard from "../card/PopularServiceCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories, GetAllProducts } from "@/redux/action";
import { Loader } from "@/assets";
import PopularServiceSlideCard from "../card/PopularServiceSlideCard";
import { getAllCategories } from "@/redux/api";

const categories = [
  "All",
  "Batteries",
  "Panels",
  "Inverters",
];

export default function PopularService1() {
  const [getCurrentCategory, setCurrentCategory] = useState("all");
  const [catList, setCatList] = useState([])
  // tab handler
  const tabHandler = (select) => {
    setCurrentCategory(select);
    dispatch(
      GetAllProducts({
        limit: 8,
        category_id: select !== "all" ? select : null,
        page: 1,
      })
    );
  };

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    getAllCategories({
      page: 1,
      limit: 3,
    }).then(
      response => {
        if (response.data.succeeded === true) {
          setCatList(response.data.data)
          
        }
        else {
         
        }
      }, error => {
       
      }
    )

    dispatch(
      GetAllProducts({
        limit: 8,
        page: 1,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="pt-5 pb0">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-xl-3">
              <div className="main-title mb30-lg">
                <h2 className="title">Popular Products</h2>
                <p className="paragraph">
                  Most viewed and all-time top-selling products
                </p>
              </div>
            </div>
            {product.getAllProductsLoading === true && <Loader />}

            <div className="col-xl-9">
              {product.getAllProductsSuccess === true && (
                <div className="navpill-style2 at-home9 mb50-lg">
                  <ul
                    className="nav nav-pills mb20 justify-content-xl-end"
                    id="pills-tab"
                  >
                    <li className="nav-item">
                      <button
                        onClick={() => tabHandler("all")}
                        className={`nav-link fw500 dark-color ${getCurrentCategory === "all" ? "active" : ""
                          }`}
                      >
                        {"All"}
                      </button>
                    </li>
                    {(catList.category || []).map(
                      (item, index) => {
                        return (
                          <li key={index} className="nav-item">
                            <button
                              onClick={() => tabHandler(item.id)}
                              className={`nav-link fw500 dark-color ${getCurrentCategory === item.id ? "active" : ""
                                }`}
                            >
                              {item.name}
                            </button>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {(product.getAllProducts.products || []).map((item, i) => {
                  return (
                    <div key={i} className="col-sm-6 col-xl-3">
                      {(item?.images || []).length > 1 ? (
                        <PopularServiceSlideCard data={item} />
                      ) : (
                        <PopularServiceCard data={item} />
                      )}
                    </div>
                  );
                })}
                <div className="col-lg-12">
                  <div className="text-center mt30">
                    <Link
                      className={`ud-btn bdrs60 btn-white2 double-border 
                          //  "btn-light-thm"
                        `}
                      href="/products"
                    >
                      All Products
                      <i className="fal fa-arrow-right-long" />
                    </Link>
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
