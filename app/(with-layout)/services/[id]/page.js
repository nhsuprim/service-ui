"use client";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state

    const getService = async () => {
        setLoading(true); // Set loading to true before fetching
        const res = await fetch(`http://localhost:8080/services/${params.id}`);
        const data = await res.json();
        setService(data.data);
        setLoading(false); // Set loading to false after fetching
    };

    useEffect(() => {
        getService();
    }, []);
    return (
        <div className="h-full w-[1000px] mx-auto">
            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <h2>{service.serviceName}</h2>
                </div>
            )}
        </div>
    );
};

export default page;
