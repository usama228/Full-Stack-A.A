"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation } from "swiper";
import TrendingServiceCard1 from "../card/TrendingServiceCard1";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/redux/api";
import { Loader } from "@/assets";
import Link from "next/link";

export default function TrendingService5() {
  const [showSwiper, setShowSwiper] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [shop, setShop] = useState({ users: [] });

  useEffect(() => {
    setShowSwiper(true);
    setLoading(true);
    setSuccess(false);
    setError(false);

    getAllUsers({
      page: 1,
      limit: 10,
      type: "shop",
    })
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        setError(false);
        setShop(response.data.data);
      })
      .catch(() => {
        setLoading(false);
        setSuccess(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (showSwiper) {
      const prevButton = document.querySelector(".prev-btn");
      const nextButton = document.querySelector(".next-btn");
      if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => {
          document.querySelector(".swiper-button-prev")?.click();
        });
        nextButton.addEventListener("click", () => {
          document.querySelector(".swiper-button-next")?.click();
        });
      }
    }
  }, [showSwiper]);

  return (
    <>
      <section className="pb100 pb30-md">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title text-black">Shops</h2>
                <p className="paragraph text-black">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4">
                <Link
                  className="ud-btn btn-white2 double-border bdrs60"
                  href="/shops"
                >
                  All Shops
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {loading && <Loader />}
          {success && (
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-outer-dib vam_nav_style">
                  {showSwiper && (
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      freeMode={true}
                      loop={true}
                      navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                      }}
                      modules={[Navigation]}
                      breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                      }}
                      className="mySwiper vam_nav_style"
                    >
                      {(shop.users || []).map((item, i) => (
                        <SwiperSlide key={i}>
                          <TrendingServiceCard1 data={item} />
                        </SwiperSlide>
                      ))}
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
          )}
        </div>
      </section>
    </>
  );
}
