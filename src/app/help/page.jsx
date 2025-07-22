import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";
import OurFaqSection1 from "@/components/section/OurFaqSection1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Help",
};

export default function page() {
    return (
        <>
             <Header21  />
            <OurFaqSection1 />
            <Footer />
        </>
    );
}
