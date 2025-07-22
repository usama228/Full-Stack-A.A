"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function ServiceDetailSlider1() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showSwiper, setShowSwiper] = useState(false);
  const product = useSelector((state) => state.product);

  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <div className="scrollbalance-inner">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-calendar" />
              </div>
              <div className="details">
                <h5 className="title">Delivery Time</h5>
                <p className="mb-0 text">1-3 Days</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-goal" />
              </div>
              <div className="details">
                <h5 className="title">Work Level</h5>
                <p className="mb-0 text">Professional</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-tracking" />
              </div>
              <div className="details">
                <h5 className="title">Location</h5>
                <p className="mb-0 text">
                  {product?.product?.Shop?.User?.address?.city || "Not Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-single-slider slider-container">
          {showSwiper && (
            <>
              {/* Main Slider */}
              <Swiper
                loop={true}
                spaceBetween={10} // Space between slides in the main slider
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                thumbs={{
                  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mainSwiper"
              >
                {(product?.product?.images || []).map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      height={554}
                      width={929}
                      src={
                        item || // Use the current image if available
                        product?.product?.Shop?.User?.avatar || // Fallback to the avatar if image is missing
                        createImageFromInitials(500, product?.product?.Shop?.User?.name || "User") // Fallback to initials if avatar and name are missing
                      }
                      alt={`Gallery Image ${index + 1}`}
                      className="main-slider-img"
                    />
                  </SwiperSlide>
                ))}

              </Swiper>
              <button type="button" className="prev-btn">
                <i className="far fa-arrow-left-long" />
              </button>
              <button type="button" className="next-btn">
                <i className="far fa-arrow-right-long" />
              </button>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={1} // Space between thumbnails
                slidesPerView={5} // Number of thumbnails visible at a time
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbnailSwiper"
              >
                {(product?.product.images || []).map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      height={90}
                      width={90}
                      src={
                        item ||
                        product?.product.Shop?.User?.avatar ||
                        createImageFromInitials(150, product?.product?.Shop?.User?.name)
                      }
                      alt={`Thumbnail ${index + 1}`}
                      className="thumbnail-img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </>
  );
}
