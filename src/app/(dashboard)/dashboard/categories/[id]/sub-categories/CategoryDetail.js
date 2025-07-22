'use client'
import { Loader } from "@/assets";
import { useAuth } from "@/authentication/ProvideAuth";
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { GetAllChildCategories } from "@/redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Pagination1 from "@/components/section/Pagination1";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { PAGE_LIMIT } from "../../../../../../../config";



function CategoryDetail() {
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
                <MyCategoryDetail />
            </DashboardLayout>
        </>
    );
}

export default withAuth(CategoryDetail);

function MyCategoryDetail() {
    const { id } = useParams()
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const category = useSelector((state) => state.category);
    useEffect(() => {
        dispatch(GetAllChildCategories(id, {
            limit: PAGE_LIMIT,
            page: page,
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const clickOnPage = (pageNumber) => {
        setPage(pageNumber)
        dispatch(GetAllChildCategories(id, {
            page: pageNumber,
            limit: PAGE_LIMIT,
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
                        <h2>{'Categories'}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">

                        <div className="bdrb1 d-flex justify-content-between pb15 mb25">
                            <h5 className="list-title">Categories Details</h5>
                        </div>

                        <div className="col-lg-12">
                            {
                                category.getAllChildCategoriesLoading === true
                                &&
                                <Loader />
                            }
                            {category.getAllChildCategoriesSuccess === true
                                &&
                                <div className="row">
                                    <table className="table-style3 table at-savesearch">
                                        <thead className="t-head">
                                            <tr>
                                                <th scope="col">Avatar</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                            {
                                                (category.getAllChildCategories.category || []).map((item, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th scope="row">
                                                                <span className={`menu-icn `}>
                                                                    <Image
                                                                        height={45}
                                                                        width={45}
                                                                        className="rounded-circle wa-xs"
                                                                        src={item.avatar}
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

                                                            <td>
                                                                <div className="d-flex profile-content gap-1">

                                                                   
                                                                    <Link
                                                                        data-tooltip-id="edit-tooltip"
                                                                        className="tag-delt text-thm2 "
                                                                        href={`/dashboard/categories/${id}/sub-categories/${item.id}`}>
                                                                        <span className="flaticon-pencil text-thm2" />
                                                                    </Link>
                                                                    <Link
                                                                        data-tooltip-id="add-tooltip"
                                                                        className="tag-delt text-thm2"
                                                                        href={`/dashboard/categories/${id}/sub-categories/${item.id}`}>
                                                                        <span className="fas fa-plus text-thm2" />
                                                                    </Link>
                                                                    <ReactTooltip
                                                                        id="products-tooltip"
                                                                        place="bottom"
                                                                        content="Category Detail"
                                                                    />
                                                                    <ReactTooltip
                                                                        id="edit-tooltip"
                                                                        place="bottom"
                                                                        content="Edit Category"
                                                                    />
                                                                    <ReactTooltip
                                                                        id="add-tooltip"
                                                                        place="bottom"
                                                                        content="Add Category"
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                        </tbody>
                                    </table>

                                    {
                                        (user.getAllUsers.users || []).length > 0
                                        &&
                                        user.getAllUsers
                                        &&
                                        user.getAllUsers?.totalPages
                                        &&
                                        <div className="mt30">
                                            <Pagination1
                                                clickOnPage={clickOnPage}
                                                page={page}
                                                totalItems={user.getAllUsers?.totalCount}
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

