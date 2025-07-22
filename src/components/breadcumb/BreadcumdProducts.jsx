"use client";

import { capitalizeFirstLetter } from "@/assets";
import Image from "next/image";

export default function BreadcumbProducts(props) {
  const { name, onChange, onClick, type } = props;
  const onBlur = (value) => {
    if (!value) {
      onClick()
    }
  }
    return (
        <>
            <section className="breadcumb-section pt-0">
                <div className="cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
                    <Image
                        height={300}
                        width={532}
                        className="service-v1-vector bounce-y d-none d-xl-block"
                        src="/images/vector-img/vector-3.jpg"
                        alt="vector-shop"
                    />
                    <div className="container">
                        <div className="row wow fadeInUp">
                            <div className="col-xl-7">
                                <div className="position-relative">
                                    <h2>{`${capitalizeFirstLetter(type)}Products List`}</h2>
                                    <p className="text mb30">
                                        Shop Solar Products Close to You.
                                    </p>
                                </div>

                                <div className="advance-search-tab bgc-white p10 bdrs4 zi1 position-relative">
                                    <div className="row">
                                        <div className="col-md-8 col-xl-9">
                                            <div className="advance-search-field ">
                                                <form className="form-search position-relative">
                                                    <div className="box-search bb1-sm">
                                                        <span className="icon far fa-magnifying-glass" />
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="name"
                                                            onChange={(e) => { onChange(e.target.value) }}
                                                            value={name}
                                                            onBlur={(e) => { onBlur(e.target.value) }}
                                                            placeholder="What are you looking for?"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xl-3">
                                            <div className="text-center text-xl-start">
                                                <button className="ud-btn btn-thm w-100"
                                                    onClick={onClick}
                                                    type="button">
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
