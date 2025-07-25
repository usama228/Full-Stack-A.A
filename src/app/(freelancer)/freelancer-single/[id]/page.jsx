import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Breadcumb17 from "@/components/breadcumb/Breadcumb17";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";
import FreelancerDetail1 from "@/components/section/FreelancerDetail1";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Freelancer Single",
};

export default function page() {
    return (
        <>
             <Header21  />
            <TabSection1 />
            <Breadcumb10 path={["Home", "Services", "Design & Creative"]} />
            <Breadcumb17 />
            <FreelancerDetail1 />
            <Footer />
        </>
    );
}
