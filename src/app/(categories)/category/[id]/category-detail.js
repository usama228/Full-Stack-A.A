'use client'
import { Loader } from "@/assets";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb4, { Breadcumb4Detail } from "@/components/breadcumb/Breadcumb4";
import Footer from "@/components/footer/Footer";
import Listing1, { CategoryList } from "@/components/section/Listing1";
import { GetCategory } from "@/redux/action";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function CategoryDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category)
    useEffect(() => {
        dispatch(GetCategory(id))
    }, [id])
    return (
        <>
            {
                category.categoryLoading === true
                &&
                <Loader />
            }
            {
                category.categorySuccess === true
                &&
                <>
                    <Breadcumb3 path={["Home", "Categories", category.category.name]} />
                    <Breadcumb4Detail />
                    <CategoryList />
                </>
            }
            <Footer />
        </>
    );
}
