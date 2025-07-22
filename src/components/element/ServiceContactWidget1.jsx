import { useState } from "react";
import { createImageFromInitials } from "@/assets";
import Image from "next/image";
import { ContactModal } from "./ProjectContactWidget1";


export default function ServiceContactWidget1({ product }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => setIsModalVisible(true);
  const handleHideModal = () => setIsModalVisible(false);

  return (
    <>
      <div className="freelancer-style1 service-single mb-0">
        <div className="wrapper d-flex align-items-center">
          <div className="thumb position-relative mb25">
            <Image
              height={90}
              width={90}
              className="rounded-circle mx-auto"
              src={
                product?.Shop?.User?.avatar ||
                createImageFromInitials(500, product?.Shop?.User?.name || "User")
              }
              alt="User Avatar"
            />
            <span className="online" />
          </div>
          <div className="ml20">
            {product?.Shop?.User?.name || "Unknown User"}
            <p className="mb-0">{product?.Shop?.owner_name || "Unknown Owner"}</p>
            <div className="review">
              <p>
                <i className="fas fa-star fz10 review-color pr10" />
                <span className="dark-color">4.9</span> (595 reviews)
              </p>
            </div>
          </div>
        </div>
        <hr className="opacity-100" />
        <div className="details">
          <div className="fl-meta d-flex align-items-center justify-content-between">
            <a className="meta fw500 text-start">
              Location
              <br />
              <span className="fz14 fw400">London</span>
            </a>
            <a className="meta fw500 text-start">
              Rate
              <br />
              <span className="fz14 fw400">Rs.90 / hr</span>
            </a>
            <a className="meta fw500 text-start">
              Job Success
              <br />
              <span className="fz14 fw400">98%</span>
            </a>
          </div>
        </div>
        <div className="d-grid mt30">
          <button onClick={handleShowModal} className="ud-btn btn-thm-border">
            Contact Buyer
            <i className="fal fa-arrow-right-long" />
          </button>
        </div>
      </div>
      {isModalVisible && (
        <ContactModal show={isModalVisible} handleClose={handleHideModal} data={product?.Shop?.User} />
      )}
    </>
  );
}
