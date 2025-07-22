import Image from "next/image";

export default function ProjectProposalCardNew({ data }) {
    return (
        <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0 align-items-start">
            <div className="col-xl-10 px-0">
                <div className="d-lg-flex">
                    <div className="thumb w90 position-relative rounded-circle mb15-md">
                        <Image
                            height={80}
                            width={80}
                            className="rounded-circle mx-auto"
                            src={data?.avatar || '/path/to/placeholder-image.jpg'}
                            alt="Avatar"
                        />
                        <span className="online" />
                    </div>

                    <div className="details ml20 ml0-md mb15-md">
                        <h5 className="title mb-1">{data?.name || "John Doe"}</h5>
                        <div className="review mb20">
                            <p className="mb-0 fz14 list-inline-item mb5-sm pe-1">
                                <i className="fas fa-star fz10 review-color pr10" />{" "}
                                <span className="dark-color">{data?.rating || 0}</span>
                                ({data?.reviews || 0} reviews)
                            </p>
                        </div>

                        <div className="meta-info d-flex justify-content-start  gap-4 pt-1">
                            <div>
                                <span className="meta-title">Location</span>
                                <p className="meta-value">
                                    {[data?.address?.city, data?.address?.country].filter(Boolean).join(", ") || "New York, USA"}
                                </p>
                            </div>

                            <div>
                                <span className="meta-title">Experience</span>
                                <p className="meta-value">{data?.Installer?.experience || "0"} Years</p>
                            </div>

                            <div>
                                <span className="meta-title">Phone</span>
                                <p className="meta-value">
                                    {data?.phone_no || "+1 234 567 890"}
                                </p>
                            </div>
                        </div>

                        <div className="description mt-1">
                            <p className="description-text">
                                {data?.description ||
                                    "Dedicated professional committed to delivering exceptional service and ensuring customer satisfaction. Specializes in all aspects of solar installation, from consultation to completion. Focused on providing reliable, high-quality solutions for solar energy needs."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
