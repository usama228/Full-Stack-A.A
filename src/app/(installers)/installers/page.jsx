import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Header21 from "@/components/header/Header21";
import Listing8 from "@/components/section/Listing8";


export const metadata = {
    title: "Freeio - Freelance Marketplace React/Next Js Template | Project 1",
};

export default function page() {
    return (
        <>
            <Header21 />
            <Breadcumb3 path={["Home", "Installers",]} />
            <Listing8
                type={'installer'} />
        </>
    );
}
