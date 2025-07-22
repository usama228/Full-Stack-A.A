/* eslint-disable */

'use client'
import { useEffect } from "react";
import { useAuth } from "./ProvideAuth";
import { useRouter } from "next/navigation";
const withAuth = (WrappedComponent) => {

    return (props) => {
        const router = useRouter();
        const authUser = useAuth();
        const isAuthenticated = authUser && authUser.token;
        console.log("rrr", router)
        useEffect(() => {
            if (!isAuthenticated) {
                router.push("/login");
            }

        }, [isAuthenticated]);

        if (!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;

const withAuthLogin = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const authUser = useAuth()
        const isAuthenticated = authUser && authUser.token;

        useEffect(() => {
            if (!isAuthenticated) {
                router.push("/login");
            }

        }, [isAuthenticated]);

        if (!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};