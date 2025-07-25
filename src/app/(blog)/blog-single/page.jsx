import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";

import BlogArea4 from "@/components/section/BlogArea4";
import RecentPostArea1 from "@/components/section/RecentPostArea1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Blog Single",
};

export default function page() {
    return (
        <>
             <Header21  />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <BlogArea4 />
            <RecentPostArea1 />
            <Footer />
        </>
    );
}
