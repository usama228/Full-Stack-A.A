import { capitalizeFirstLetter } from "@/assets";
import Image from "next/image";

export default function Breadcumb(props) {
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
          {/* <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="left-top"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="right-bottom"
          /> */}


          <Image
            height={300}
            width={532}
            className="service-v1-vector bounce-y d-none d-xl-block"
            src={type === 'installer' ? "/images/vector-img/vector-2.jpg" : "/images/vector-img/vector-1.jpg"}
            alt="vector-installer"
          />

          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-7">
                <div className="position-relative">
                  <h2>{`${capitalizeFirstLetter(type)}s List`}</h2>
                  {type === "shop" ? (
                    <p className="text mb30">
                      Explore a Curated List of Trusted Solar Shops Near You
                    </p>
                  ) : type === "installer" ? (
                    <p className="text mb30"> Find Certified Solar Installers Ready to Bring Your Energy Goals to Life</p>
                  ) : null}
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
