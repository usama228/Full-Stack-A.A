'use client'
import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardInfo from "@/components/dashboard/section/DashboardInfo";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { useEffect, useState } from "react";

function Dashboard() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) {
        return null;
    }

    return (
        <div>
            <MobileNavigation2 />
            <DashboardLayout>
                <DashboardInfo />
            </DashboardLayout>
        </div>
    );
}

export default withAuth(Dashboard);
