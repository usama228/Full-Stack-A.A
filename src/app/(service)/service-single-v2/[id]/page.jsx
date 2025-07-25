import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";
import PopulerService from "@/components/section/PopulerService";
import ServiceDetail2 from "@/components/section/ServiceDetails2";

import TabSection1 from "@/components/section/TabSection1";
import React from "react";

export default function page() {
    return (
        <>
             <Header21  />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <ServiceDetail2 />
            <PopulerService />
            <Footer />
        </>
    );
}
