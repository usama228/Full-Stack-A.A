"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Breadcumb4() {


  return (
    <section className="breadcumb-section pt-0">
      <div
        className={`cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center px30-lg cta-service-v1 mx20-lg`}
      >
        <Image
          height={226}
          width={198}
          className="left-top-img wow zoomIn"
          src="/images/vector-img/left-top.png"
          alt="vector-img"
        />
        <Image
          height={181}
          width={255}
          className="right-bottom-img wow zoomIn"
          src="/images/vector-img/right-bottom.png"
          alt="vector-img"
        />
        <Image
          height={300}
          width={532}
          className="service-v1-vector bounce-y d-none d-lg-block"
          src="/images/vector-img/vector-service-v1.png"
          alt="vector-img"
        />

        <div className="container">
          <div className="row wow fadeInUp">
            <div
              className={` col-xl-5 `}
            >
              <div
                className={`position-relative `}
              >
                <h2>Categories</h2>
                <p className="text mb30">
                  All Categories
                </p>
                {/* <div className="d-flex align-items-center">
                    <a
                      onClick={() => setToggler(!toggler)}
                      className="video-btn mr10 popup-iframe popup-youtube"
                    >
                      <i className="fal fa-play" />
                    </a>
                    <h6 className="mb-0">How Freeio Works</h6>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export function Breadcumb4Detail() {


  const category = useSelector((state) => state.category)
  return (
    <section className="breadcumb-section pt-0">
      <div
        className={`cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center px30-lg cta-service-v1 mx20-lg`}
      >
        <Image
          height={226}
          width={198}
          className="left-top-img wow zoomIn"
          src="/images/vector-img/left-top.png"
          alt="vector-img"
        />
        <Image
          height={181}
          width={255}
          className="right-bottom-img wow zoomIn"
          src={"/images/vector-img/right-bottom.png"}
          alt="vector-img"
        />
        <Image
          height={300}
          width={532}
          className="service-v1-vector bounce-y d-none d-lg-block"
          src={category.category.avatar}
          alt="vector-img"
        />

        <div className="container">
          <div className="row wow fadeInUp">
            <div
              className={` col-xl-5 `}
            >
              <div
                className={`position-relative `}
              >
                <h2>{category.category.name}</h2>
                <p className="text mb30">
                  {category.category?.parent
                    ?
                    `Parent Category ${category.category?.parent.name}`
                    : null
                  }
                </p>
                {/* <div className="d-flex align-items-center">
                    <a
                      onClick={() => setToggler(!toggler)}
                      className="video-btn mr10 popup-iframe popup-youtube"
                    >
                      <i className="fal fa-play" />
                    </a>
                    <h6 className="mb-0">How Freeio Works</h6>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}