import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";
import ProductsListing from "@/components/section/ProductsListing";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Job List",
};

export default function page() {
    return (
        <>
            <Header21 />
            <Breadcumb3 path={["Home", "All Products"]} />         
            <ProductsListing/>
            <Footer />
        </>
    );
}
