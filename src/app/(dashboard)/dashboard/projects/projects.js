'use client'
import { Loader } from "@/assets";
import { useAuth } from "@/authentication/ProvideAuth";
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { GetAllProjects } from "@/redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_LIMIT } from "../../../../../config";
import Pagination1 from "@/components/section/Pagination1";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";



function Projects() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    return (
        <>

            <MobileNavigation2 />
            <DashboardLayout>
                <MyProjects />
            </DashboardLayout>
        </>
    );
}

export default withAuth(Projects);

export function MyProjects({ installer_id = null }) {
    const auth = useAuth();
    const [name, setName] = useState(null);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const router = useRouter()
    const project = useSelector((state) => state.project);
    useEffect(() => {
        dispatch(GetAllProjects({
            name: name,
            limit: PAGE_LIMIT,
            page: page,
            installer_id: installer_id ? installer_id : auth.type === "superAdmin" ? null : auth.installer.id
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const clickOnPage = (pageNumber) => {
        setPage(pageNumber)
        dispatch(GetAllProjects({
            name: name,
            page: pageNumber,
            limit: PAGE_LIMIT,
            installer_id: installer_id ? installer_id : auth.type === "superAdmin" ? null : auth.installer.id
        }))
    }

    return (
        <div className="dashboard__content hover-bgc-color">
            <div className="row pb40">
                <div className="col-lg-12">
                    <DashboardNavigation />
                </div>
                <div className="col-lg-9">
                    <div className="dashboard_title_area">
                        <h2>{'Projects'}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">

                        <div className="bdrb1 d-flex justify-content-between pb15 mb25">
                            <h5 className="list-title">Project Details</h5>


                        </div>

                        <div className="col-lg-12">
                            {
                                project.getAllProjectsLoading === true
                                &&
                                <Loader />
                            }
                            {project.getAllProjectsSuccess === true
                                &&
                                <div className="row">
                                    <table className="table-style3 table at-savesearch">
                                        <thead className="t-head">
                                            <tr>
                                                <th scope="col">Avatar</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Experience</th>
                                                <th scope="col">Duration</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                            {
                                                (project.getAllProjects.projects || []).map((item, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th scope="row">
                                                                <span className={`menu-icn `}>
                                                                    <Image
                                                                        height={45}
                                                                        width={45}
                                                                        className="rounded-circle wa-xs"
                                                                        src={item.images[0]}
                                                                        style={{
                                                                            height: "45px",
                                                                            width: "45px",
                                                                            objectFit: "cover",
                                                                        }}
                                                                        alt="profile"
                                                                    />
                                                                </span>
                                                            </th>
                                                            <td className="vam">
                                                                <span className="fz15 fw400">{item.name}</span>
                                                            </td>
                                                            <td className="vam">
                                                                <span className="fz14 fw400">{item.description}</span>
                                                            </td>
                                                            <td className="vam">
                                                                <span className="fz14 fw400">{item.Installer.experience}</span>
                                                            </td>
                                                            <td className="vam">
                                                                <span className="fz14 fw400">{`${item.start_date.split(['T'])[0]} - ${item.end_date.split(['T'])[0]}`}</span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex profile-content gap-1">

                                                                    <Link
                                                                        data-tooltip-id="edit-tooltip"
                                                                        className="tag-delt text-thm2 "
                                                                        href={`/dashboard/projects/installer/${item.Installer.id}/${item.id}`}>
                                                                        <span className="flaticon-pencil text-thm2" />
                                                                    </Link>
                                                                    <Link
                                                                        data-tooltip-id="add-tooltip"
                                                                        className="tag-delt text-thm2"
                                                                        href={`/dashboard/projects/installer/${item.Installer.id}/new`}>
                                                                        <span className="fas fa-plus text-thm2" />
                                                                    </Link>

                                                                    <ReactTooltip
                                                                        id="edit-tooltip"
                                                                        place="bottom"
                                                                        content="Edit Project"
                                                                    />
                                                                    <ReactTooltip
                                                                        id="add-tooltip"
                                                                        place="bottom"
                                                                        content="Add Project"
                                                                    />

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                        </tbody>
                                    </table>

                                    {
                                        (project.getAllProjects.projects || []).length > 0
                                        &&
                                        project.getAllProjects
                                        &&
                                        project.getAllProjects?.totalPages
                                        &&
                                        <div className="mt30">
                                            <Pagination1
                                                clickOnPage={clickOnPage}
                                                page={page}
                                                totalItems={project.getAllProjects?.totalCount}
                                                itemsPerPage={PAGE_LIMIT}
                                                currentPage={page}
                                                setPage={setPage} />
                                        </div>
                                    }
                                </div>
                            }

                        </div>
                    </div>

                </div>

            </div>



        </div>

    );
}
