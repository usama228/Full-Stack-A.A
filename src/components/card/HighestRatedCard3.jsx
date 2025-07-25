import { createImageFromInitials } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeighestRetedCard3({ data }) {
  return (
    <>
      <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
        <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
          <Image
            height={90}
            width={90}
            className="rounded-circle mx-auto object-fit-cover"
            src={data.avatar || createImageFromInitials(500, data.name)}
            alt="avatar"
          />
          <span className="online" />
        </div>
        <div className="details">
          <h5 className="title mb-1">{data.name}</h5>
          {/* <p className="mb-0">{data.phone_no}</p> */}
          {/* <div className="review">
            <p>
              <i className="fas fa-star fz10 review-color pr10" />
              <span className="dark-color">{data.rating}</span> ({data.review}{" "}
              reviews)
            </p>
          </div> */}
          {/* <div className="skill-tags d-flex align-items-center justify-content-center mb5">
            <span className="tag">Figma</span>
            <span className="tag mx10">Sketch</span>
            <span className="tag">HTML5</span>
          </div> */}
          <hr className="opacity-100 mt20 mb15" />
          <div className="fl-meta d-flex align-items-center justify-content-between">
            <a className="meta fw500 text-start">
              Location
              <br />
              <span className="fz14 fw400">{[data.address.city, data.address.country].filter(Boolean).join(', ')}</span>
            </a>
            <a className="meta fw500 text-start">
              Experience
              <br />
              <span className="fz14 fw400">{data.Installer.experience} Years</span>
            </a>

          </div>
          <div className="d-grid mt15">
            <Link
              href={`/installer-details/${data.id}`}
              className="ud-btn btn-white2 double-border bdrs60"
            >
              View Details
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
