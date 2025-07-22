'use client'

import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MyProjects } from "../../projects";




function InstallerProjects() {
    const [isClient, setIsClient] = useState(false);
    const {installer_id} = useParams();
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }
    return (
        <>
            <MobileNavigation2 />
            <DashboardLayout>
                <MyProjects installer_id={installer_id} />
            </DashboardLayout>
        </>
    );
}

export default withAuth(InstallerProjects);


