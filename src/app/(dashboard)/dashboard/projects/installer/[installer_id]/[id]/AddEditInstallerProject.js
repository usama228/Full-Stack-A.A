'use client'

import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AddEditProjectBody } from "../../../[id]/AddEditProject";




function AddEditInstallerProject() {
    const [isClient, setIsClient] = useState(false);
    const { installer_id, id } = useParams();
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
                <AddEditProjectBody installer_id={installer_id} id={id} />
            </DashboardLayout>
        </>
    );
}

export default withAuth(AddEditInstallerProject);


