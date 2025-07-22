import { createImageFromInitials } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function BrowserCategoryCard2({ data }) {
  return (
    <>
      {" "}
      <Link href={`/category/${data.id}`}>
        <div className="feature-style1 mb30 bdrs16">
          <div className="feature-img bdrs16 overflow-hidden">
            <Image
              height={298}
              width={257}
              className="w-100 h-100 object-fit-cover"
              src={data.avatar || createImageFromInitials(500, data.name)}
              alt="feature image"
            />
          </div>
          <div className="feature-content">
            <div className="top-area">
              <h6 className="title mb-1">{data.name}</h6>
              <h5 className="text">{data.description}</h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
