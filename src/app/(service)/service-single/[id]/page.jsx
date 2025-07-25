import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb8 from "@/components/breadcumb/Breadcumb8";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";

import ServiceDetail1 from "@/components/section/ServiceDetail1";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Service Single",
};

export default function page() {
    return (
        <>
             <Header21  />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb8 />
            <ServiceDetail1 />
            <Footer />
        </>
    );
}
