"use client"
import { Loader } from "@/assets";
import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Breadcumb11 from "@/components/breadcumb/Breadcumb11";
import Header21 from "@/components/header/Header21";
import ProjectDetail1 from "@/components/section/ProjectDetail1";
import { GetAllProducts, GetUser } from "@/redux/action";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_LIMIT } from "../../../../../config";

// // Metadata with dynamic title
// export async function generateMetadata({ params }) {
//     return {
//         title: `Project: ${params.projectId} | Freeio`, // Assuming `projectId` is the dynamic parameter
//     };
// }

export default function Page() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(GetUser(id))
        dispatch(GetAllProducts({
            page: page,
            limit: PAGE_LIMIT,
            shop_id: id
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, dispatch])

    const clickOnPage = (pageNumber) => {
        setPage(pageNumber)
        dispatch(GetAllProducts({
            page: pageNumber,
            limit: PAGE_LIMIT,
            shop_id: id
        }))
    }
    return (
        <>
            <Header21 />
            {
                user.userLoading === true
                &&
                <Loader />
            }
            {
                user.userSuccess === true
                &&
                <>
                    <Breadcumb10 path={["Home", "Shop", `${user.user.name}`]} />
                    <Breadcumb11 />
                    <ProjectDetail1 projectId={id} clickOnPage={clickOnPage} /> 
                </>
            }
        </>
    );
}