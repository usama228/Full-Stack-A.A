"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ShopListCard1({ data }) {
  const router = useRouter();
  const addToCartHandler = (product) => {
    // addToCart(product);
    router.push("/shop-cart");
  };


  return (
    <>
      <div className="shop-item text-center">
        <div className="thumb">
          <Link href={`/shop-single/${data.id}`}>
            <Image
              height={247}
              width={271}
              className="w-100 w-100 object-fit-cover"
              src={data.images[0] || data.Shop.User.avatar}
              alt="product"
            />
          </Link>
        </div>
        <div className="details">
          <p className="mb10">{data.title}</p>
          <h5 className="mb10">{data.Shop.User.name}</h5>
          <h5 className="mb20">{parseFloat(data.price).toFixed(2)}</h5>
          <a
            onClick={() => addToCartHandler(data)}
            className={`ud-btn ${ "btn-light-thm"}`}
          >
            {"Details"}
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
}
