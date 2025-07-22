"use client";
import { createImageFromInitials } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function TrendingServiceCard({ data }) {
  return (
    <div className="listing-style1">
      <div className="list-thumb">
        <Image
          height={190}
          width={255}
          className="w-100 h-100 object-fit-cover"
          src={data.avatar || createImageFromInitials(500, data.name)}
          alt="thumbnail"
        />
      </div>
      <div className="list-content">
        <h5 className="list-title truncate-text">
          <Link href={`/${data.type}-details/${data.id}`}>
            {data.name}
          </Link>
        </h5>
        <p className="list-text body-color fz14 mb-1">{data.Shop.owner_name}</p>
        <hr className="my-2" />
        <div className="list-meta d-flex justify-content-between align-items-center mt15">
          <div className="budget">
            <p className="mb-0 body-color">
              <i className="flaticon-place vam fz20 text-thm2 me-2" />
              <span className="fz14">
                {[data.address.city, data.address.country].filter(Boolean).join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
