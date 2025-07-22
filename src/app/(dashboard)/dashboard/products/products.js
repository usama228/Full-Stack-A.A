'use client'
import { Loader } from "@/assets";
import { useAuth } from "@/authentication/ProvideAuth";
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { GetAllProducts } from "@/redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination1 from "@/components/section/Pagination1";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PAGE_LIMIT } from "../../../../../config";
import Image from "next/image";



function Products() {
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
                <MyProducts />
            </DashboardLayout>
        </>
    );
}

export default withAuth(Products);

export function MyProducts({ shop_id = null }) {
    const auth = useAuth();


    const [name, setName] = useState(null);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const router = useRouter()
    const product = useSelector((state) => state.product);
    useEffect(() => {
        const shopId = shop_id ?? (auth?.type === "superAdmin" ? null : auth?.shop?.id);
        dispatch(GetAllProducts({
            name: name,
            limit: PAGE_LIMIT,
            page: page,
            shop_id: shopId
        }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, page, shop_id, auth]);

    const clickOnPage = (pageNumber) => {
        setPage(pageNumber)
        dispatch(GetAllProducts({
            name: name,
            page: pageNumber,
            limit: PAGE_LIMIT,
            shop_id: shop_id ? shop_id : auth.type === "superAdmin" ? null : auth.shop.id
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
                        <h2>{'Products'}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">

                        <div className="bdrb1 d-flex justify-content-between pb15 mb25">
                            <h5 className="list-title">Product Details</h5>
                        </div>

                        <div className="col-lg-12">
                            {
                                product.getAllProductsLoading === true
                                &&
                                <Loader />
                            }
                            {product.getAllProductsSuccess === true
                                &&
                                <div className="row">
                                    <table className="table-style3 table at-savesearch">
                                        <thead className="t-head">
                                            <tr>
                                                <th scope="col">Avatar</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Owner Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                            {
                                                (product.getAllProducts.products || []).map((item, i) => {
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
                                                                <span className="fz15 fw400">{item.title}</span>
                                                            </td>
                                                            <td className="vam">
                                                                <span className="fz14 fw400">{item.description}</span>
                                                            </td>
                                                            <td className="vam">
                                                                <span className="fz14 fw400">{item.Shop.owner_name}</span>
                                                            </td>
                                                            <td className="vam">
                                                                <span className="fz14 fw400">{item.price}</span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex profile-content gap-1">
                                                                    {/* <a
                                                                        className="tag-delt text-thm2"
                                                                        onClick={() => setSelectedImage(null)}
                                                                    >
                                                                        <span className="flaticon-delete text-thm2" />
                                                                    </a> */}
                                                                    
                                                                    <Link
                                                                        data-tooltip-id="edit-tooltip"
                                                                        className="tag-delt text-thm2 "
                                                                        href={`/dashboard/products/shop/${item.Shop.id}/${item.id}`}>
                                                                        <span className="flaticon-pencil text-thm2" />
                                                                    </Link>
                                                                    <Link
                                                                        data-tooltip-id="add-tooltip"
                                                                        className="tag-delt text-thm2"
                                                                        href={`/dashboard/products/shop/${item.Shop.id}/new`}>
                                                                        <span className="fas fa-plus text-thm2" />
                                                                    </Link>
                                                                    
                                                                    <ReactTooltip
                                                                        id="edit-tooltip"
                                                                        place="bottom"
                                                                        content="Edit Product"
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
                                        (product.getAllProducts.products || []).length > 0
                                        &&
                                        product.getAllProducts
                                        &&
                                        product.getAllProducts?.totalPages
                                        &&
                                        <div className="mt30">
                                            <Pagination1
                                                clickOnPage={clickOnPage}
                                                page={page}
                                                totalItems={product.getAllProducts?.totalCount}
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
