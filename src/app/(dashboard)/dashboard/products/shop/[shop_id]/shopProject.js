'use client'

import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MyProducts } from "../../products";




function ShopProducts() {
    const [isClient, setIsClient] = useState(false);
    const {shop_id} = useParams();
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
                <MyProducts shop_id={shop_id} />
            </DashboardLayout>
        </>
    );
}

export default withAuth(ShopProducts);


