"use client";
import { project1, projectProposal1 } from "@/data/product";
import ProjectProposalCard1 from "../card/ProjectProposalCard1";
import ServiceDetailExtra1 from "../element/ServiceDetailExtra1";
import { Sticky, StickyContainer } from "react-sticky";
import ProjectPriceWidget1 from "../element/ProjectPriceWidget1";
import ProjectContactWidget1 from "../element/ProjectContactWidget1";
import useScreen from "@/hook/useScreen";
import { useParams } from "next/navigation";

const skills = [
  "SaaS",
  "Figma",
  "Software Design",
  "Sketch",
  "Prototyping",
  "HTML5",
  "Design",
  "Writing",
];

export default function ProjectDetail3() {
  const isMatchedScreen = useScreen(1216);
  const { id } = useParams();

  const data = project1.find((item) => item.id == id);

  return (
    <>
      <StickyContainer>
        <section className="pt30">
          <div className="container">
            <div className="row wrap">
              <div className="col-lg-8">
                <div className="column">
                  <div className="scrollbalance-inner">
                    <div className="px30 bdr1 pt30 pb-0 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1">
                      <div className="position-relative overflow-hidden d-flex align-items-center">
                        <div className="row ">
                          <div className="col-xl-12">
                            <div className="position-relative">
                              {data ? (
                                <h2>{data.title}</h2>
                              ) : (
                                <h2>
                                  Website Designer Required For Directory Theme
                                </h2>
                              )}
                              <div className="list-meta mt15 mb30 pb30 bdrb1 ">
                                <p className="mb-0 dark-color fz15 fw500 list-inline-item mb5-sm">
                                  <i className="flaticon-place vam fz20 text-thm2 me-2"></i>{" "}
                                  London, UK
                                </p>
                                <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                                  <i className="flaticon-calendar text-thm2 vam fz20 me-2"></i>{" "}
                                  January 15, 2022
                                </p>
                                <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                                  <i className="flaticon-website text-thm2 vam fz20 me-2"></i>{" "}
                                  902 Views
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-xl-4">
                          <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                            <div className="icon flex-shrink-0">
                              <span className="flaticon-notification-1" />
                            </div>
                            <div className="details">
                              <h5 className="title">Seller Type</h5>
                              <p className="mb-0 text">Company</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 col-xl-4">
                          <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                            <div className="icon flex-shrink-0">
                              <span className="flaticon-like-1" />
                            </div>
                            <div className="details">
                              <h5 className="title">Project Level</h5>
                              <p className="mb-0 text">Expensive</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                            <div className="icon flex-shrink-0">
                              <span className="flaticon-translator" />
                            </div>
                            <div className="details">
                              <h5 className="title">Languages</h5>
                              <p className="mb-0 text">20</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-4">
                          <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                            <div className="icon flex-shrink-0">
                              <span className="flaticon-goal" />
                            </div>
                            <div className="details">
                              <h5 className="title">English Level</h5>
                              <p className="mb-0 text">Professional</p>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="service-about">
                      <div className="px30 bdr1 pt30 pb-0 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1">
                        <h4>Description</h4>
                        <p className="text mb30">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.{" "}
                        </p>
                        <p className="text mb30">
                          Many desktop publishing packages and web page editors
                          now use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </p>
                      </div>
                      <hr className="opacity-100 mb60 mt60" />

                      <div className="px30 bdr1 pt30 pb-0 mb30 bg-white bdrs12 wow fadeInUp default-box-shadow1">
                        <h4 className="mb30">Project Proposals (3)</h4>
                        <div className="row">
                          {projectProposal1.slice(0, 3).map((item, i) => (
                            <div key={i} className="col-md-6 col-lg-12">
                              <ProjectProposalCard1 data={item} />
                            </div>
                          ))}
                        </div>
                        <div className="bsp_reveiw_wrt mt25 mb30 ">
                          <h4>Send Your Proposal</h4>
                          <form className="comments_form mt30 mb30-md">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb20">
                                  <label className="fw500 ff-heading dark-color mb-2">
                                    Your hourly price
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="$99"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb20">
                                  <label className="fw500 ff-heading dark-color mb-2">
                                    Estimated Hours
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={4}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-4">
                                  <label className="fw500 fz16 ff-heading dark-color mb-2">
                                    Cover Letter
                                  </label>
                                  <textarea
                                    className="pt15"
                                    rows={6}
                                    placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <ServiceDetailExtra1 />
                              </div>
                              <div className="col-md-12">
                                <div className="d-grid">
                                  <a className="ud-btn btn-thm">
                                    Submit a Proposal
                                    <i className="fal fa-arrow-right-long" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="column">
                  {isMatchedScreen ? (
                    <Sticky>
                      {({ style }) => (
                        <div className="scrollbalance-inner" style={style}>
                          <div className="blog-sidebar ms-lg-auto">
                            <ProjectPriceWidget1 />
                            <ProjectContactWidget1 />
                          </div>
                        </div>
                      )}
                    </Sticky>
                  ) : (
                    <div className="scrollbalance-inner">
                      <div className="blog-sidebar ms-lg-auto">
                        <ProjectPriceWidget1 />
                        <ProjectContactWidget1 />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}
