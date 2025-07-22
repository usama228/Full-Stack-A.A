"use client";
import { browserCategory } from "@/data/project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import BrowserCategoryCard2 from "../card/BrowserCategoryCard2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "@/redux/action";
import { PAGE_LIMIT } from "../../../config";
import { Loader } from "@/assets";

export default function BrowserCategory2() {
  const path = usePathname();
  const [showSwiper, setShowSwiper] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category)
  useEffect(() => {
    dispatch(GetAllCategories({
      limit: PAGE_LIMIT,
      page: 1
    }))
    setShowSwiper(true);
  }, [dispatch]);
  
  return (
    <>
      <section className={`pt0 pb-0`}>
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Browse by categories</h2>
                <p className="paragraph">
                  List of All Categories
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4">
                <Link className="ud-btn btn-light-thm bdrs90" 
                href="/categories">
                  All Category
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {
            category.getAllCategoriesLoading === true
            &&
            <Loader />
          }
          {
            category.getAllCategoriesSuccess === true
            &&
            <div className="row">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="col-lg-12">
                  <div className="position-relative">
                    {showSwiper && (
                      <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        className="mySwiper"
                        navigation={{
                          prevEl: ".prev-btn",
                          nextEl: ".next-btn",
                        }}
                        modules={[Navigation]}
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 3,
                          },
                          992: {
                            slidesPerView: 4,
                          },
                          1200: {
                            slidesPerView: 5,
                          },
                        }}
                      >
                        {(category.getAllCategories.category || []).map((item, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <BrowserCategoryCard2 data={item} />
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    )}
                    <button type="button" className="prev-btn">
                      <i className="far fa-chevron-left" />
                    </button>
                    <button type="button" className="next-btn">
                      <i className="far fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
}
