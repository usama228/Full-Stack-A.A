import Image from "next/image";
import Link from "next/link";

export default function ProjectCard2({ data }) {
  return (
    <>
      <div  className="freelancer-style1 bdrs12 bdr1 hover-box-shadow">
        <div  className="d-flex align-items-center">
          <div  className="thumb w60 position-relative rounded-circle mr15">
            <Image
              height={60}
              width={60}
              className="rounded-circle mx-auto"
              src={data.img}
              alt="rounded-circle"
            />
            <span  className="online-badge2"></span>
          </div>
          <div>
            <span  className="mb-0 fz14 dark-color list-inline-item mb5-sm">
              <i  className="flaticon-place fz12 me-1"></i> {data.location}
            </span>
          </div>
        </div>
        <div  className="details mt-4">
          <h5  className="title mb-3">{data.title}</h5>
          <p  className="text mt10 line-clamp2">
            {data.brief
              ? data.brief
              : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."}
          </p>
          <div  className="d-grid mt15">
            <Link
              href={`/project-single/${data.id}`}
              className="ud-btn btn-thm-border bdrs12 default-box-shadow1"
            >
              Send Proposal
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
