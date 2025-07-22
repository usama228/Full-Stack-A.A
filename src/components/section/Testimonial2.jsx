import Image from "next/image";

export default function Testimonial2() {
  const data = [{
    name: 'Mr. Faheem Maalik',
    avatar: '/images/testimonials/ceo.jpg',
    designation: 'Ceo',
  },
  {
    name: 'Mr. Nasir Abdul Rasheed',
    avatar: '/images/testimonials/nasir.jpg',
    designation: 'General Sales Manager',

  }, {
    name: 'Mr. Awais Ahmed',
    avatar: '/images/testimonials/awais.jpg',
    designation: 'Head of I.T',

  }, {
    name: 'Mr. Usama Aslam',
    avatar: '/images/testimonials/usama.jpg',
    designation: 'Senior Developer',

  }, {
    name: 'Ms. Roshanay Amjad',
    avatar: '/images/testimonials/miss.jpg',
    designation: 'Head of Marketing',

  }, {
    name: 'Mr. Ali Sabir',
    avatar: '/images/testimonials/ali.jpg',
    designation: 'Senior Graphic Designer',

  }]
  return (
    <>
      <section className="our-testimonial pt-0">
        <div className="container wow fadeInUp" data-wow-delay="300ms">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="main-title text-center">
                <h2 className="title">What Our CEO Says</h2>
                <p className="paragraph mt10">
                  Connecting You to Local Solar Experts for a Sustainable Tomorrow
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10 mx-auto">
              <div className="home2_testimonial_tabs position-relative">
                <div className="tab-content" id="pills-tabContent2">

                  <div
                    className="tab-pane fade show active"
                    id="pills-profile"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="testimonial-style2 at-about2 text-center">
                      <div className="testi-content text-center">
                        <span className="icon fas fa-quote-left" />
                        <h4 className="testi-text">
                          "At Soltronic MarketPlace, we’re committed to making solar energy simple and accessible by
                          connecting you with trusted local sellers and installers.
                          Together, we’re building a cleaner, brighter future for our communities. "
                        </h4>
                      </div>
                    </div>
                  </div>

                </div>
                <ul className="nav justify-content-center" id="pills-tab2">
                  {
                    (data || []).map((team, index) => {
                      return (
                        <li key={index} className="nav-item pb40">
                          <a
                            className="nav-link"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            href="#pills-home"
                          >
                            <div className="thumb d-flex align-items-center">
                              <Image
                                height={70}
                                width={70}
                                className="rounded-circle h-100"
                                src={team.avatar}
                                alt={index}
                              />
                              <h6 className="title ml30 ml15-xl mb-0">
                                {team.name}
                                <br />
                                <small> {team.designation}</small>
                              </h6>
                            </div>
                          </a>
                        </li>
                      )
                    })
                  }

                </ul>
                {/* <ul className="nav justify-content-center" id="pills-tab2">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      href="#pills-home"
                    >
                      <div className="thumb d-flex align-items-center">
                        <Image
                          height={70}
                          width={70}
                          className="rounded-circle h-100"
                          src="/images/testimonials/ceo.jpg"
                          alt="ceo.jpg"
                        />
                        <h6 className="title ml30 ml15-xl mb-0">
                          Mr.Faheem Maalik
                          <br />
                          <small>CEO</small>
                        </h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#pills-profile"
                    >
                      <div className="thumb d-flex align-items-center">
                        <Image
                          height={70}
                          width={70}
                          className="rounded-circle h-100"
                          src="/images/testimonials/nasir.jpg"
                          alt="2.jpg"
                        />
                        <h6 className="title ml30 ml15-xl mb-0">
                          Mr.Nasir Abdul Rasheed
                          <br />
                          <small>General Sales Manager</small>
                        </h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      href="#pills-contact"
                    >
                      <div className="thumb d-flex align-items-center">
                        <Image
                          height={70}
                          width={70}
                          className="rounded-circle h-100"
                          src="/images/testimonials/awais.jpg"
                          alt="3.jpg"
                        />
                        <h6 className="title ml30 ml15-xl mb-0">
                          Mr.Awais Ahmed
                          <br />
                          <small>Head of IT</small>
                        </h6>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="pt40">
                  <ul className="nav justify-content-center" id="pills-tab2">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        href="#pills-home"
                      >
                        <div className="thumb d-flex align-items-center">
                          <Image
                            height={70}
                            width={70}
                            className="rounded-circle h-100"
                            src="/images/testimonials/usama.jpg"
                            alt="1.jpg"
                          />
                          <h6 className="title ml30 ml15-xl mb-0">
                            Mr.Usama Aslam
                            <br />
                            <small>Senior Developer</small>
                          </h6>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        href="#pills-profile"
                      >
                        <div className="thumb d-flex align-items-center">
                          <Image
                            height={70}
                            width={70}
                            className="rounded-circle h-100"
                            src="/images/testimonials/miss.jpg"
                            alt="2.jpg"
                          />
                          <h6 className="title ml30 ml15-xl mb-0">
                            Ms.Roshanay Amjad
                            <br />
                            <small>Head of Marketing</small>
                          </h6>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        href="#pills-contact"
                      >
                        <div className="thumb d-flex align-items-center">
                          <Image
                            height={70}
                            width={70}
                            className="rounded-circle h-100"
                            src="/images/testimonials/ali.jpg"
                            alt="3.jpg"
                          />
                          <h6 className="title ml30 ml15-xl mb-0">
                            Mr.Ali Sabir
                            <br />
                            <small>Senior Graphic Designer</small>
                          </h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
