"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../../../../../components/Dashboard/Dashboard";
import UpdateServices from "../../../../../components/Services/UpdateServices";

const Page = ({ params }) => {
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);

    const getService = async () => {
        try {
            const res = await fetch(
                `http://localhost:8080/services/${params.id}`
            );
            const data = await res.json();

            setService(data.data);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error("Error fetching service data:", error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    useEffect(() => {
        getService();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            <Dashboard />
            <UpdateServices service={service} />
        </div>
    );
};

export default Page;
