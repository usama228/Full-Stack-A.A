import Image from "next/image";
import Link from "next/link";

export default function CtaBanner3() {
  return (
    <>
      <section className="p-0 ">
        <div className="cta-banner mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-md-6 col-xl-5 pl30-md pl15-xs wow fadeInRight"
                data-wow-delay="500ms"
              >
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title">
                      Expert Solar Installers 
                      <br className="d-none d-lg-block" />
                      You Can Trust
                    </h2>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Skilled Local Professionals</h4>
                      <p className="text mb-0 fz15">
                        Connect with certified installers specializing in solar panels,
                        <br className="d-none d-lg-block" />
                        inverters, and batteries in your area.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Reliable and Efficient Service</h4>
                      <p className="text mb-0 fz15">
                        Get quality installations that maximize your solar system’s
                        <br className="d-none d-lg-block" />
                        performance and longevity.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Seamless Installation Process</h4>
                      <p className="text mb-0 fz15">
                        From planning to setup, our installers ensure a hassle-free 
                        <br className="d-none d-lg-block" />
                        experience tailored to your needs.
                      </p>
                    </div>
                  </div>
                </div>
                 <div >
                  <Link
                    href="/installers"
                    className="ud-btn btn-thm-border"
                  >
                   Top Verified Installers
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
              
              <div
                className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
                data-wow-delay="500ms"
              >
                <div className="about-img">
                  <Image
                    height={705}
                    width={691}
                    className="w100 h-100"
                    src="/images/about/aboutus-6.png"
                    alt="about 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
