import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";
import TermsCondition1 from "@/components/section/TermsCondition1";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Terms & Conditions",
};

export default function page() {
    return (
        <>
             <Header21  />
            <TermsCondition1 />
            <Footer />
        </>
    );
}
