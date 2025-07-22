"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createImageFromInitials } from "@/assets";

export default function PopularServiceSlideCard({ data, onDetails = null }) {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <>
      <div
        className={`listing-style1 `}

      >
        <div className="list-thumb">
          <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid">
            <div className="item">
              {showSwiper && (
                <Swiper
                  navigation={{
                    prevEl: ".btn__prev__005",
                    nextEl: ".btn__next__005",
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  pagination={{
                    el: ".swiper__pagination__005",
                    clickable: true,
                  }}
                >
                  {data?.images?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        height={247}
                        width={331}
                        className="w-100 object-fit-cover"
                        src={item || data.Shop.User.avatar || createImageFromInitials(500, data.Shop.User.avatar)}
                        alt="thumbnail"
                      />
                    </SwiperSlide>
                  ))}
                  <div className="swiper__parent">
                    <div className="row justify-content-center">
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__prev__005">
                          <i className="far fa-arrow-left-long" />
                        </button>
                      </div>
                      <div className="col-auto">
                        <div className="swiper__pagination swiper__pagination-2 swiper__pagination__005"></div>
                      </div>
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__next__005">
                          <i className="far fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Swiper>
              )}
              {/* <a
                onClick={() => setFavActive(!isFavActive)}
                className={`listing-fav fz12 z-1 ${isFavActive ? "ui-fav-active" : ""
                  }`}
              >
                <span className="far fa-heart" />
              </a> */}
            </div>
          </div>
        </div>
        <div className={`list-content`}>
          <p className="list-text body-color fz14 mb-1">{data.Shop.User.name}</p>
          <h5 className="list-title">
            {
              onDetails ?
                <span className="cursor" href={`#`}
                  onClick={() => { onDetails(data) }}>
                  {data.title.length > 40 ? data.title.slice(0, 40) + "..." : data.title}
                </span>
                :

                <Link href={`/product/${data.id}`}>
                  {data.title.length > 40 ? data.title.slice(0, 40) + "..." : data.title}
                </Link>
            }
          </h5>
          {/* <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              <span className="dark-color me-2">{data.rating}</span>
              {data.review}
              reviews
            </p>
          </div> */}
          <hr className="my-2" />
          <div className="list-meta d-flex justify-content-between align-items-center mt15">
            <a>
              <span className="position-relative mr10">
                <Image
                  height={30}
                  width={30}
                  className="rounded-circle object-fit-contain"
                  src={data.Shop.User.avatar || createImageFromInitials(500, data.Shop.User.name)}
                  alt="Shop Photo"
                />
                <span className="online-badge" />
              </span>
              <span className="fz14">{data.Shop.owner_name}</span>
            </a>
            <div className="budget">
              <p className="mb-0 body-color">
                <span className="flaticon-tracking" />
                <span className="fz17 fw500 dark-color ms-1">
                  {data.Shop.User.address.city}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
