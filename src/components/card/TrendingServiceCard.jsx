"use client";
import { createImageFromInitials } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function TrendingServiceCard({ data, onDetails = null }) {
  return (
    <div className={`listing-style1 `}>
      <div className="list-thumb">
        <Image
          height={190}
          width={255}
          className="w-100 h-100 object-fit-cover"
          src={
            (data?.images?.[0]) ||
            (data?.Shop?.User?.avatar) ||
            createImageFromInitials(500, data?.Shop?.User?.name || "Default Name")
          }
          alt="thumbnail"
        />
      </div>
      <div className={`list-content `}>
        <p className="list-text body-color fz14 mb-1">{data.Shop.User.name}</p>
        <h5 className="list-title">
          {onDetails ? (
            <span
              className="cursor truncate-single-line"
              onClick={() => {
                onDetails(data);
              }}
            >
              {data.title}
            </span>
          ) : (
            <Link href={`/product/${data.id}`} className="truncate-single-line">
              {data.title}
            </Link>
          )}
        </h5>
        <hr className="my-2" />
        <div
          className="list-meta d-flex justify-content-start align-items-center mt15"
        >
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


export function TrendingServiceCardForProjects({ data, onDetails = null }) {

  return (
    <div
      className={`listing-style1 `}
    >
      <div className="list-thumb">
        <Image
          height={190}
          width={255}
          className="w-100 h-100 object-fit-cover"
          src={data.Installer.User.avatar || createImageFromInitials(500, data.Installer.User.name)}
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
        <p className="list-text body-color fz14 mb-1">{data.Installer.User.name}</p>
        <h5 className="list-title">
          {
            onDetails ?
              <span className="cursor" href={`#`}
                onClick={() => { onDetails(data) }}>
                {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
              </span>
              :

              <Link href={`/project/${data.id}`}>
                {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
              </Link>
          }
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

          <div className="budget">
            <p className="mb-0 body-color">
              Start Date
            </p>
            <span className="fz14">
              {data.start_date.split("T")[0]}
            </span>

          </div>
          <div className="budget">
            <p className="mb-0 body-color">
              End Date
            </p>
            <span className="fz14">
              {data.end_date.split("T")[0]}
            </span>

          </div>
        </div>
        {/* <div className="list-meta d-flex justify-content-between align-items-center mt15">
          <a className="d-flex" href="#">
            <span className="position-relative mr10">
              <Image
                height={24}
                width={24}
                className="rounded-circle wa"
                src={data.Shop.User.avatar}
                alt="Shop Photo"
              />
              <span className="online-badges" />
            </span>
            <span className="fz14">{data.Shop.owner_name}</span>
          </a>
          <div className="budget">
            <p className="mb-0 body-color">
              Starting at
              <span className="fz17 fw500 dark-color ms-1">
                Rs.{data.price}
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
  
}
