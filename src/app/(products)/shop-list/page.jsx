import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";

import HeaderInfo1 from "@/components/section/HeaderInfo1";
import ShopArea1 from "@/components/section/ProductsListing";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Job List",
};

export default function page() {
    return (
        <>
             <Header21  />
            <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
            <HeaderInfo1
                title="Shop Pages"
                brief="Give your visitor a smooth online experience
                                    with a solid UX design"
            />
            <ShopArea1 />
            <Footer />
        </>
    );
}
