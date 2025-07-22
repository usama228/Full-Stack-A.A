import Image from "next/image";
import Link from "next/link";

export default function About5() {
  return (
    <>
      <section className="our-about pb0 pt60-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <div
                className="about-img mb30-sm wow fadeInRight"
                data-wow-delay="300ms"
              >
                <Image
                  height={574}
                  width={691}
                  className="w100 h-100"
                  src="/images/about/aboutus-2.png"
                  alt="about"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-5 offset-xl-1">
              <div
                className="position-relative wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <h2 className="mb25">
                  Discover World's Best Marketplace{" "}
                  <br className="d-none d-xl-block" /> of Solar Sellers
                </h2>
                <p className="text mb25">
                  At <b>Soltronic Marketplace</b>, we’re dedicated to creating a platform that highlights and supports local solar sellers offering panels, batteries, and inverters. By bringing these sellers together in one place, we make it easier for customers in your area to find reliable, affordable, and high-quality solar solutions. Our focus is on strengthening local businesses, fostering community connections, and ensuring that every customer gets the best solar products tailored to their needs.
                </p>
                <div className="list-style2">
                  <ul className="mb20">
                    <li>
                      <i className="far fa-check" />
                      A network of verified solar sellers in your community.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Helping customers find competitive prices nearby.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Easy access to reliable solar products and services.
                    </li>
                  </ul>
                </div>
                <Link
                  href="/shops"
                  className="ud-btn btn-thm-border"
                >
                  Top Verified Sellers
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
