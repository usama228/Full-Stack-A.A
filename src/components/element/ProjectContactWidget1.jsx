"use client";

import { capitalizeFirstLetter, createImageFromInitials } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ProjectContactWidget1() {
  const user = useSelector((state) => state.user);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="freelancer-style1 service-single mb-0 bdrs8">
        <h4>About Buyer</h4>
        <div className="wrapper d-flex align-items-center mt20">
          <div className="thumb position-relative mb25">
            <Image
              height={60}
              width={60}
              className="rounded-circle mx-auto"
              src={
                user.user.avatar || createImageFromInitials(500, user.user.name)
              }
              alt="client"
            />
          </div>
          <div className="ml20">
            <h5 className="title mb-1">{user.user.name}</h5>
            <p className="mb-0">{capitalizeFirstLetter(user.user.type)}</p>
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
              Employees
              <br />
              <span className="fz14 fw400">11-20</span>
            </a>
            <a className="meta fw500 text-start">
              Departments
              <br />
              <span className="fz14 fw400">Designer</span>
            </a>
          </div>
        </div>
        <div className="d-grid mt30">
          <button
            onClick={(e) => {
             
              handleShowModal();
            }}
            className="ud-btn btn-thm-border"
          >
            Contact Buyer
            <i className="fal fa-arrow-right-long" />
          </button>
        </div>
      </div>

      {isModalVisible && (
        <ContactModal show={isModalVisible}
          handleClose={handleHideModal}
          data={user.user} />
      )}
    </>
  );
}


export const ContactModal = (props) => {
  const { data, handleClose, show } = props
  return (
    <Modal show={show}
    size="md" onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          {"Contact Information"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Email: {data.email || "No email provided"}</p>
        <p>Phone: {data.phone_no || "No phone number provided"}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-center gap-3 ">

          <button
            className="ud-btn btn-dark mb25"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => { handleClose() }}
          >
            Cancel
            <i className="fal fa-arrow-right-long" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>

  )
}