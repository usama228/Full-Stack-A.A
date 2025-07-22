"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";

const partners = [
  "/images/partners/logo1.png",
  "/images/partners/logo2.png",
  "/images/partners/logo3.png",
  "/images/partners/logo4.png",
  "/images/partners/logo5.png",
  "/images/partners/logo6.png",
  "/images/partners/logo7.png",
  "/images/partners/logo8.png",
];

export default function OurPartner1() {
  const [showSwiper, setShowSwiper] = useState(false);

  useEffect(() => {
    setShowSwiper(true);
  }, []);

  const path = usePathname();

  return (
    <section
      className={`our-partners ${path === "/" ||
        path === "/home-3" ||
        path === "/about-2" ||
        path === "/home-15" ||
        path === "/home-6"
        ? "pt0"
        : ""
        } ${path === "/home-8" ? "pt0 pb0" : ""
        } ${path === "/home-14" ? "bdrt1 pt55 pb55" : ""} ${path === "/home-16" ? "pt55 pb55" : ""
        } ${path === "/home-13" ? "pt55 pb55" : ""}`}
      style={{
        backgroundColor: "rgba(0, 205, 125, 0.1) ", padding:'80px', // Lighter opacity for background
      }}
    >
      <div className="container">
        <div className="row">
          {path === "/home-14" ? (
            ""
          ) : (
            <div className="col-lg-12 wow fadeInUp">
              <div className="main-title text-center" style={{ paddingTop: "50px" }}>
                <h2>Our Partners</h2>
              </div>
            </div>
          )}
        </div>
        <div className="row ">
          <div className="col-lg-12">
            <div
              className="ui-browser wow fadeInUp text-center"
              style={{
                padding: "20px",
                borderRadius: "8px", 
                position: "relative", 
              }}
            >
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
                  {partners.map((item, i) => {
                    console.log("item",item)
                    return (
                      <SwiperSlide key={i}>
                        <div className="partner_item text-center mb30-lg">
                          <Image
                            className="wa m-auto w-100 h-100 object-fit-contain"
                            src={item}
                            alt={`Partner Image ${i}` }
                            width={100}
                            height={74}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              )}

              {/* Custom Previous and Next Arrows */}
              <button
                className="prev-btn"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0, 205, 125, 0.5)",
                  border: "none",
                  padding: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button
                className="next-btn"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0, 205, 125, 0.5)",
                  border: "none",
                  padding: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
