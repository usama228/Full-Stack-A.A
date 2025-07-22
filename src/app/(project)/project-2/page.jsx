import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb from "@/components/breadcumb/Breadcumb";
import Header21 from "@/components/header/Header21";

import Listing17 from "@/components/section/Listing17";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Project 1",
};

export default function page() {
    return (
        <>
             <Header21  />
            <TabSection1 />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb />
            
            <Listing17 />
        </>
    );
}
