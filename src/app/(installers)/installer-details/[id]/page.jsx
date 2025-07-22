"use client";
import { Loader } from "@/assets";
import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Breadcumb11 from "@/components/breadcumb/Breadcumb11";
import Header21 from "@/components/header/Header21";
import ProjectDetailNew from "@/components/section/ProjectDetailNew";
import { GetAllProjects, GetUser } from "@/redux/action";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_LIMIT } from "../../../../../config";
import { getAllUsers } from "@/redux/api";

export default function Page() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [page, setPage] = useState(1);
    const [installer, setInstaller] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        dispatch(GetUser(id));
        dispatch(
            GetAllProjects({
                page: page,
                limit: PAGE_LIMIT,
                User_id: id,
            })
        );
    }, [id, page, dispatch]);

    useEffect(() => {
        setLoading(true);
        getAllUsers({
            page: 1,
            limit: 10,
            type: "installer",
        })
            .then((response) => {
                setLoading(false);
                setSuccess(true);
                setError(false);
                setInstaller(response.data.data);
            })
            .catch((error_) => {
                setLoading(false);
                setSuccess(false);
                setError(true);
            });
    }, []); 

    const clickOnPage = (pageNumber) => {
        setPage(pageNumber);
        dispatch(
            GetAllProjects({
                page: pageNumber,
                limit: PAGE_LIMIT,
                User_id: id,
            })
        );
    };

    return (
        <>
            <Header21 />
            {user.userLoading && <Loader />}
            {user.userSuccess && (
                <>
                    <Breadcumb10 path={["Home", "Shop", `${user.user.name}`]} />
                    <Breadcumb11 />
                    <ProjectDetailNew projectId={id} clickOnPage={clickOnPage} /> 
                </>
            )}
            {loading && <p>Loading installers...</p>}
            {success && !error && (
                <div>
                    {/* <h4>Installers:</h4>
                    <ul>
                        {(Array.isArray(installer) ? installer : []).map((ins, index) => (
                            <li key={index}>{ins.name}</li>
                        ))}
                    </ul> */}

                </div>
            )}
            {error && <p>Failed to load installers.</p>}
        </>
    );
}
