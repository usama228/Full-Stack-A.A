"use client";

import ProjectProposalCard1 from "../card/ProjectProposalCard1";
import { Sticky, StickyContainer } from "react-sticky";
import ProjectPriceWidget1 from "../element/ProjectPriceWidget1";
import ProjectContactWidget1 from "../element/ProjectContactWidget1";
import useScreen from "@/hook/useScreen";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "@/assets";
import React, { useEffect, useState } from "react";
import Pagination1 from "./Pagination1";
import { getAllUsers } from "@/redux/api"; // Assuming this is where you fetch users data
import ProjectProposalCardNew from "../card/ProjectProposalCardNew";

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

export default function ProjectDetailNew() {
    const isMatchedScreen = useScreen(1216);
    const [installer, setInstaller] = useState({ users: [] });
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1); 
    const PAGE_LIMIT = 5;

    const user = useSelector((state) => state.user);

    const clickOnPage = (newPage) => {
        setPage(newPage);
        console.log(`Navigated to page: ${newPage}`);
    };

    useEffect(() => {
        setLoading(true);
        getAllUsers({
            page,
            limit: PAGE_LIMIT,
            type: "installer",
        })
            .then((response) => {
                setLoading(false);
                setInstaller(response.data.data); 
            })
            .catch((error_) => {
                setLoading(false);
                console.error("Error fetching installers:", error_);
            });
    }, [page]);

    return (
        <>
            <StickyContainer>
                <section className="pt30">
                    <div className="container">
                        <div className="row wrap">
                            <div className="col-lg-8">
                                <div className="column">
                                    <div className="scrollbalance-inner">
                                        <div className="row">
                                            <div className="col-sm-6 col-xl-4">
                                                <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                                                    <div className="icon flex-shrink-0">
                                                        <span className="flaticon-notification-1" />
                                                    </div>
                                                    <div className="details">
                                                        <h5 className="title">Seller Type</h5>
                                                        <p className="mb-0 text">{capitalizeFirstLetter(user.user.type)}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-xl-4">
                                                <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                                                    <div className="icon flex-shrink-0">
                                                        <span className="flaticon-mail" />
                                                    </div>
                                                    <div className="details">
                                                        <h5 className="title">Email</h5>
                                                        <p className="mb-0 text">{user.user.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xl-4">
                                                <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                                                    <div className="icon flex-shrink-0">
                                                        <span className="flaticon-call" />
                                                    </div>
                                                    <div className="details">
                                                        <h5 className="title">Phone Number</h5>
                                                        <p className="mb-0 text">{user.user.phone_no}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service-about">
                                            <h4>Description</h4>
                                            <p className="text mb30">
                                                It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal distribution of letters, as opposed to using
                                                'Content here, content here', making it look like readable English.
                                            </p>
                                            <p className="text mb30">
                                                Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                                their default model text, and a search for 'lorem ipsum' will uncover many web
                                                sites still in their infancy. Various versions have evolved over the years,
                                                sometimes by accident, sometimes on purpose (injected humour and the like).
                                            </p>

                                            <hr className="opacity-100 mb60 mt60" />
                                            {installer.users.length > 0 ? (
                                                <React.Fragment>
                                                    <h4 className="mb30">Installers Projects({installer.users.length})</h4>
                                                    <div className="row">
                                                        {installer.users.map((item, i) => (
                                                            <div key={i} className="col-md-6 col-lg-12">
                                                                <ProjectProposalCardNew data={item} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {installer.totalCount > PAGE_LIMIT && (
                                                        <div className="mt30 d-flex justify-content-center">
                                                            <Pagination1
                                                                clickOnPage={clickOnPage}
                                                                page={page}
                                                                totalItems={installer.totalCount}
                                                                itemsPerPage={PAGE_LIMIT}
                                                                currentPage={page}
                                                                setPage={setPage}
                                                            />
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            ) : (
                                                <p>No installers found.</p>
                                            )}
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
                                                        {/* <ProjectPriceWidget1 /> */}
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
