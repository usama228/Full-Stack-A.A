"use client";
import { createImageFromInitials } from "@/assets";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Breadcumb8() {
  const { id } = useParams();

  const product = useSelector((state) => state.product);

  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-service-single cta-banner mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          {/* <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="left-top"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="right-bottom"
          /> */}
          <Image
            height={300}
            width={532}
            className="service-v1-vector bounce-y d-none d-xl-block"
            src="/images/vector-img/vector-4.jpg"
            alt="vector-service"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-7">
                <div className="position-relative">
                  <h2>{product?.product?.title || "Product Name"}</h2>
                  <div className="list-meta mt30">
                    <a className="list-inline-item mb5-sm">
                      <span className="position-relative mr10">
                        <Image
                          height={40}
                          width={40}
                          className="rounded-circle"
                          src={
                            product?.product?.Shop?.User?.avatar ||
                            createImageFromInitials(
                              500,
                              product?.product?.Shop?.User?.name || "User"
                            )
                          }
                          alt="Freelancer Photo"
                        />
                        <span className="online-badge" />
                      </span>
                      <span className="fz14">
                        {product?.product?.Shop?.User?.name || "User Name"}
                      </span>
                    </a>
                    {/* 
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="fas fa-star vam fz10 review-color me-2" />
                      4.82 94 reviews
                    </p>
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="flaticon-file-1 vam fz20 me-2" />2 Order in
                      Queue
                    </p>
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="flaticon-website vam fz20 me-2" />
                      902 Views
                    </p> */}
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
