"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirstLetter, createImageFromInitials } from "@/assets";
import { ContactModal } from "../element/ProjectContactWidget1";

export default function ProjectCard1({ data }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-lg-center">
        <div className="col-lg-8 ps-0">
          <div className="d-lg-flex bdrr1 bdrn-xl pr15 pr0-lg">
            <div className="thumb w60 position-relative rounded-circle mb15-md">
              <Image
                height={60}
                width={60}
                className="rounded-circle mx-auto"
                src={data.avatar || createImageFromInitials(500, data.name)}
                alt="rounded-circle"
              />
              <span className="online-badge2" />
            </div>
            <div className="details ml15 ml0-md mb15-md">
              <h5 className="title mb-3">{data.name}</h5>
              <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                <i className="flaticon-place fz16 vam text-thm2 me-1" />{" "}
                {data.address.street || 'some Address'}
              </p>

            </div>
          </div>
        </div>
        <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
          <div className="details">
            <div className="d-grid mt15">
              <Link
                href={`/${data.type}-details/${data.id}`}
                className="ud-btn btn-light-thm"
              >
                {capitalizeFirstLetter(data.type)} Detail
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
            <div className="d-grid mt15">
              <button
                onClick={() => {
                  handleShowModal();
                }}
                className="ud-btn btn-light-thm border-0"
              >
                Phone Number
                <i className="fal fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && (
        // <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
        //   <div className="modal-dialog">
        //     <div className="modal-content">
        //       <div className="modal-header">
        //         <h5 className="modal-title">Phone Details</h5>
        //         <button
        //           type="button"
        //           className="btn-close"
        //           data-bs-dismiss="modal"
        //           aria-label="Close"
        //           onClick={handleHideModal}
        //         />
        //       </div>
        //       <div className="modal-body">
        //         <p>Contact Number: {data.phone_no}</p>
        //       </div>
        //       <div className="modal-footer">
        //         <Link
        //           href="#"
        //           onClick={(e) => {
        //             e.preventDefault();
        //             handleHideModal();
        //           }}
        //           className="ud-btn btn-light-thm"
        //         >
        //           Close
        //           <i className="fal fa-arrow-right-long" />
        //         </Link>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <ContactModal show={isModalVisible}
          handleClose={handleHideModal}
          data={data} />
      )}
    </>
  );
}
