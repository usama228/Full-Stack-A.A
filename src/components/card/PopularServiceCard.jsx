"use client";
import { createImageFromInitials } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function PopularServiceCard({ data }) {
  return (
    <div
      className={`listing-style1 bdrs16`}>
      <div className="list-thumb">
        <Image
          height={247}
          width={331}
          className="w-100"
          src={data.images[0] || data.Shop.User.avatar || createImageFromInitials(500, data.Shop.User.name)}
          alt="thumbnail"
        />
        {/* <a
            onClick={() => setFavActive(!isFavActive)}
            className={`listing-fav fz12 ${isFavActive ? "ui-fav-active" : ""}`}
          >
            <span className="far fa-heart" />
          </a> */}
      </div>
      <div className={`list-content `}>
        <p className="list-text body-color fz14 mb-1">{data.Shop.User.name}</p>
        <h5 className="list-title">
          <Link href={`/product/${data.id}`}>
            <span className="product-title">{data.title}</span>
          </Link>
        </h5>

        {/* <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              <span className="dark-color me-2">{data.rating}</span>
              {data.review} reviews
            </p>
          </div> */}
        <hr className="my-2" />
        <div className="list-meta d-flex justify-content-between align-items-center mt15">
            {/* <span className="position-relative mr10">
              <Image
                height={30}
                width={30}
                className="rounded-circle wa"
                src={data.Shop.User.avatar || createImageFromInitials(500, data.Shop.User.name)}
                alt="Shop Photo"
              />
              <span className="online-badges" />
            </span> */}
            {/* <span className="fz14">{data.Shop.owner_name}</span> */}
          <div className="budget">
            <p className="mb-0 body-color">
              Starting at
              <span className="fz17 fw500 dark-color ms-1">
                Rs.{data.price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
