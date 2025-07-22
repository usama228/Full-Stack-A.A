import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";
import PriceTable1 from "@/components/section/PriceTable1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Pricing",
};

export default function page() {
    return (
        <>
             <Header21  />
            <PriceTable1 />
            <Footer />
        </>
    );
}
