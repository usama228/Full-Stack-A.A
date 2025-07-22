"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { freelancer1 } from "@/data/product";
import Link from "next/link";
import HeighestRetedCard3 from "../card/HighestRatedCard3";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/redux/api";
import { Loader } from "@/assets";

export default function HighestRated3() {
  const [showSwiper, setShowSwiper] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [installer, setInstaller] = useState({ users: [] })
  useEffect(() => {
    setShowSwiper(true);
    setLoading(true)
    setSuccess(false)
    setError(false)
    getAllUsers({
      page: 1,
      limit: 10,
      type: 'installer'
    }).then((response) => {
      setLoading(false)
      setSuccess(true)
      setError(false)
      setInstaller(response.data.data)
    }).catch((error_) => {
      setLoading(false)
      setSuccess(true)
      setError(true)
    })
  }, []);

  return (
    <>
      <section className="pb10">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Installers</h2>
                <p className="paragraph">
                  Trusted Solar Installers and Service Experts.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4">
                <Link
                  className="ud-btn btn-white2 double-border bdrs60"
                  href="/installers"
                >
                  All Installers
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {
            loading === true
            &&
            <Loader />
          }
          {
            success === true
            &&
            <div className="row">
              <div className="col-lg-12">
                <div className="navi_pagi_bottom_center slider-4-grid">
                  {showSwiper && (
                    <Swiper
                      spaceBetween={30}
                      navigation={{
                        prevEl: ".btn__prev__016",
                        nextEl: ".btn__next__016",
                      }}
                      modules={[Navigation, Pagination]}
                      className="mySwiper"
                      loop={true}
                      pagination={{
                        el: ".swiper__pagination__016",
                        clickable: true,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                        },
                        768: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                        },
                        992: {
                          slidesPerView: 3,
                          slidesPerGroup: 3,
                        },
                        1200: {
                          slidesPerView: 4,
                          slidesPerGroup: 4,
                        },
                      }}
                    >
                      {(installer.users || []).map((item, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <HeighestRetedCard3 data={item} />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  )}
                </div>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button className="swiper__btn btn__prev__016">
                      <i className="far fa-arrow-left-long" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <div className="swiper__pagination swiper__pagination__016"></div>
                  </div>
                  <div className="col-auto">
                    <button className="swiper__btn btn__next__016">
                      <i className="far fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </section>
    </>
  );
}
