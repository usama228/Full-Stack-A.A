'use client'
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MyProfileInfo from "@/components/dashboard/section/MyProfileInfo";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import Script from "next/script";
import { useEffect, useState } from "react";

function Profile() {
    const [isClient, setIsClient] = useState(false);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && window.google && window.google.maps) {
            setLoaded(true);
        }
    }, [isClient]);

    if (!isClient) {
        return null; 
    }

    return (
        <>
            <Script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPFqhrGkKKbDsTPS2nbqBX5i23FHFd1YM&libraries=places"
                strategy="beforeInteractive" 
            />
            <MobileNavigation2 />
            <DashboardLayout>
                {loaded && <MyProfileInfo />}
            </DashboardLayout>
        </>
    );
}

export default withAuth(Profile);
