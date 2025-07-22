'use client'

import withAuth from "@/authentication/withAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AddEditProductBody } from "../../../[id]/AddEditProduct";




function AddEditShopProducts() {
    const [isClient, setIsClient] = useState(false);
    const { shop_id, id } = useParams();
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
                <AddEditProductBody shop_id={shop_id} id={id} />
            </DashboardLayout>
        </>
    );
}

export default withAuth(AddEditShopProducts);


