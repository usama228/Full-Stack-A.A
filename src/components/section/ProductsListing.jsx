"use client";
import ShopAreaSidebar1 from "../sidebar/ShopAreaSidebar1";
import Pagination1 from "./Pagination1";
import ListingOption2 from "../element/ListingOption2";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { GetAllProducts } from "@/redux/action";
import { PAGE_LIMIT } from "../../../config";
import { Loader } from "@/assets";
import PopularServiceSlideCard from "../card/PopularServiceSlideCard";
import TrendingServiceCard from "../card/TrendingServiceCard";
import BreadcumbProducts from "../breadcumb/BreadcumdProducts";

export default function ProductsListing(props) {
  const [name, setName] = useState(null);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState({
    startPrice: null,
    endPrice: null
  });
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(GetAllProducts({
      name: name,
      category_id: category,
      min_price: price.startPrice,
      max_price: price.endPrice,
      limit: PAGE_LIMIT,
      page: page
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const clickOnPage = (pageNumber) => {
    setPage(pageNumber)
    dispatch(GetAllProducts({
      name: name,
      category_id: category,
      min_price: price.startPrice,
      max_price: price.endPrice,
      page: pageNumber,
      limit: PAGE_LIMIT,
    }))
  }
  const setPriceRange = (values) => {
    setPrice({
      startPrice: values[0],
      endPrice: values[1]
    })
  }
  const filterData = (data) => {
    dispatch(GetAllProducts(data))
  }
  const setChangeInSearch = (value) => {
    setName(value);

  }
  const callAfterChange = () => {
    dispatch(GetAllProducts({
      name: name,
      category_id: category,
      min_price: price.startPrice,
      max_price: price.endPrice,
      page: 1,
      limit: PAGE_LIMIT,
    }))

  }
  return (
    <React.Fragment>
      <BreadcumbProducts  {...props}
        name={name}
        onChange={setChangeInSearch}
        onClick={callAfterChange} />
      <section className="shop-checkout pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-3">
              <ShopAreaSidebar1
                name={name}
                category={category}
                setCategory={setCategory}
                setPriceRange={setPriceRange}
                setName={setName}
                page={page}
                setPage={setPage}
                price={price}
                setPrice={setPrice}
                filterData={filterData} />
            </div>
            {
              product.getAllProductsLoading === true
              &&
              <Loader />
            }

            <div className="col-lg-9">
              <ListingOption2
                listName={`Products`}
                itemLength={(product.getAllProducts.products || []).length} />
              {product.getAllProductsSuccess === true
                &&
                <div className="row">
                  {
                    (product.getAllProducts.products || []).map((item, i) => {
                      return (
                        <div key={i} className="col-sm-6 col-xl-4">
                          {(item?.images || []).length > 1
                            ? (
                              <PopularServiceSlideCard data={item} />
                            ) : (
                              <TrendingServiceCard data={item} />
                            )}
                        </div>
                      )
                    })}
                  {
                    (product.getAllProducts.products || []).length > 0
                    &&
                    product.getAllProducts
                    &&
                    product.getAllProducts?.totalPages
                    &&
                    <div className="mt30">
                      <Pagination1
                        clickOnPage={clickOnPage}
                        page={page}
                        totalItems={product.getAllProducts?.totalCount}
                        itemsPerPage={PAGE_LIMIT}
                        currentPage={page}
                        setPage={setPage} />
                    </div>
                  }
                </div>
              }

            </div>


          </div>
        </div>
      </section>

    </React.Fragment>
  );
}
