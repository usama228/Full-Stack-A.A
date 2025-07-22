'use client'
import { Loader } from "@/assets";
import { useAuth } from "@/authentication/ProvideAuth";
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { GetAllUsers } from "@/redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_LIMIT } from "../../../../../config";
import Pagination1 from "@/components/section/Pagination1";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";



function Shops() {
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
                <MyShops />
            </DashboardLayout>
        </>
    );
}

export default withAuth(Shops);

function MyShops() {
    const auth = useAuth();
    const [name, setName] = useState(null);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const router = useRouter()
    const user = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(GetAllUsers({
            name: name,
            limit: PAGE_LIMIT,
            page: page,
            type: 'shop'
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const clickOnPage = (pageNumber) => {
        setPage(pageNumber)
        dispatch(GetAllUsers({
            name: name,
            page: pageNumber,
            limit: PAGE_LIMIT,
            type: 'shop'
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
                        <h2>{'Shops'}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">

                        <div className="bdrb1 d-flex justify-content-between pb15 mb25">
                            <h5 className="list-title">Shop Details</h5>

                            {auth.type !== "superAdmin" &&
                                <Link
                                    href={`/my-projects/new`}
                                    className="ud-btn btn-thm default-box-shadow2"
                                    type="button">
                                    Add Project{" "}
                                    <i className="fal fa-arrow-right-long" />
                                </Link>}
                        </div>

                        <div className="col-lg-12">
                            {
                                user.getAllUserLoading === true
                                &&
                                <Loader />
                            }
                            {user.getAllUserSuccess === true
                                &&
                                <div className="row">
                                    <table className="table-style3 table at-savesearch">
                                        <thead className="t-head">
                                            <tr>
                                                <th scope="col">Avatar</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Owner Name</th>
                                                <th scope="col">Phone Number</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                            {
                                                (user.getAllUsers.users || []).map((item, i) => {
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
                                                                <span className="fz14 fw400">{item.email}</span>
                                                            </td>
                                                            <td className="vam">
                                                                <span className="fz14 fw400">{item.Shop?.owner_name || 'N/A'}</span>
                                                            </td>
                                                            <td className="vam">
                                                                <span className="fz14 fw400">{item.phone_no}</span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex profile-content gap-1">

                                                                    <Link
                                                                        data-tooltip-id="products-tooltip"
                                                                        className="tag-delt text-thm2"
                                                                        href={`/dashboard/products/shop/${item.Shop?.id || ''}`}>
                                                                        <span className="fa-solid fa-list text-thm2" />
                                                                    </Link>
                                                                    <Link
                                                                        data-tooltip-id="edit-tooltip"
                                                                        className="tag-delt text-thm2 "
                                                                        href={`/dashboard/shops/${item.id}`}>
                                                                        <span className="flaticon-pencil text-thm2" />
                                                                    </Link>
                                                                    <Link
                                                                        data-tooltip-id="add-tooltip"
                                                                        className="tag-delt text-thm2"
                                                                        href={`/dashboard/shops/${item.Shop?.id || 'N/A'}/new`}>
                                                                        <span className="fas fa-plus text-thm2" />
                                                                    </Link>
                                                                    <ReactTooltip
                                                                        id="products-tooltip"
                                                                        place="bottom"
                                                                        content="List of All Products"
                                                                    />
                                                                    <ReactTooltip
                                                                        id="edit-tooltip"
                                                                        place="bottom"
                                                                        content="Edit Shop"
                                                                    />
                                                                    <ReactTooltip
                                                                        id="add-tooltip"
                                                                        place="bottom"
                                                                        content="Add Products"
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

