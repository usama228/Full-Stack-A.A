import Breadcumb2 from "@/components/breadcumb/Breadcumb2";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";

import About5 from "@/components/section/About5";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner3 from "@/components/section/CtaBanner3";
import CtaBanner4 from "@/components/section/CtaBanner4";
import OurFaq1 from "@/components/section/OurFaq1";
import OurFunFact1 from "@/components/section/OurFunFact1";
import OurPartner1 from "@/components/section/OurPartner1";
import Testimonial2 from "@/components/section/Testimonial2";

export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | About 2",
};

export default function page() {
    return (
        <>
             <Header21  />
            <Breadcumb2
                title="About Us"
                brief="Connecting Communities To Green Energy."
            />

            <About5 />
            <CounterInfo1 />
            <CtaBanner3 />
            <OurFunFact1 />
            <Testimonial2 />
            <CtaBanner4 />
            <OurFaq1 />
            <OurPartner1 />
            <Footer />
        </>
    );
}
