import OrderComplete1 from "@/components/element/OrderComplete1";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Shop Order",
};

export default function page() {
    return (
        <>
             <Header21  />
            <OrderComplete1 />
            <Footer />
        </>
    );
}
