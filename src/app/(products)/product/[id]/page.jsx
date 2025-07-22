"use client"
import { Loader } from "@/assets";
import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Breadcumb8 from "@/components/breadcumb/Breadcumb8";
import Header21 from "@/components/header/Header21";
import ServiceDetail1 from "@/components/section/ServiceDetail1";
import Footer from "@/components/footer/Footer";
import { GetProduct } from "@/redux/action";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// // Metadata with dynamic title
// export async function generateMetadata({ params }) {
//     return {
//         title: `Project: ${params.projectId} | Freeio`, // Assuming `projectId` is the dynamic parameter
//     };
// }

export default function Page() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(GetProduct(id))
    }, [id, dispatch])
    return (
        <>
            <Header21 />
            {
                product.productLoading === true
                &&
                <Loader />
            }
            {
                product.productSuccess === true
                &&
                <>
                    <Breadcumb10 path={["Home", "Shop", `${product.product.title}`]} />

                    <Breadcumb8 />
                    <ServiceDetail1 />
                    <Footer />
                    {/* <Breadcumb11 /> */}
                    {/*<ProjectDetail1 projectId={id} />  */}
                </>
            }
        </>
    );
}

// import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
// import Breadcumb8 from "@/components/breadcumb/Breadcumb8";
// import Footer from "@/components/footer/Footer";
// import Header21 from "@/components/header/Header21";

// import ServiceDetail1 from "@/components/section/ServiceDetail1";
// import TabSection1 from "@/components/section/TabSection1";

// export const metadata = {
//     title: "Freeio - Freelance Marketplace React/Next Js Template | Service Single",
// };

// export default function page() {
//     return (
//         <>
//              <Header21  />
//             <TabSection1 />
//             <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
//             <Breadcumb8 />
//             <ServiceDetail1 />
//             <Footer />
//         </>
//     );
// }
