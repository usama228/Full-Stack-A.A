"use client";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import MobileNavigation5 from "./MobileNavigation5";
import { useAuth } from "@/authentication/ProvideAuth";
import { useEffect, useState } from "react";
import Mega from "./Mega";
import { useRouter } from "next/navigation";

export default function Header10() {
    let auth = useAuth()
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const logOut = () => {
        localStorage.removeItem('user');
        router.push('/');
    }
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <>
            <header className="header-nav nav-innerpage-style stricky main-menu bdrb1 slideIn animated  ">
                <nav className="posr">
                    <div className="container-fluid posr menu_bdrt1">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto"
                                style={{ paddingRight: 0 }}>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="logos mr1">
                                        <Link
                                            className="header-logo logo2"
                                            href="/"
                                        >
                                            <Image
                                                height={40}
                                                width={133}
                                                src="/images/header-logo3.svg"
                                                alt="Header Logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="home1_style bdrl1">
                                        <Mega />
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="d-flex align-items-center">
                                    <Navigation />
                                    {
                                        !auth
                                            ?
                                            <>
                                                <Link
                                                    className="login-info mx15-lg mx30"
                                                    href="/seller/registration"
                                                >
                                                    <span className="d-none d-xl-inline-block">
                                                        Become a
                                                    </span>{" "}
                                                    Seller
                                                </Link>


                                                <Link
                                                    className="login-info mr15-lg mr30"
                                                    href="/installer/registration"
                                                >
                                                    <span className="d-none d-xl-inline-block">
                                                        Become a
                                                    </span>{" "}
                                                    Installer
                                                </Link>
                                                <Link
                                                    className="ud-btn btn-dark add-joining"
                                                    href="/login"
                                                >
                                                    Log In
                                                </Link>
                                            </>
                                            :
                                            <span className="cursor login-info ml20 "
                                                onClick={() => { logOut() }}>
                                                <span
                                                    className="ud-btn btn-dark add-joining">
                                                    Log Out
                                                </span>
                                            </span>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <MobileNavigation5 />
        </>
    );
}
