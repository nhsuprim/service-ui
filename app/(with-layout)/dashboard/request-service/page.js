"use client";
import React, { useState, useEffect } from "react";
import Dashboard from "../../../components/Dashboard/Dashboard";
import { IoCall } from "react-icons/io5";

const page = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const getRequest = async () => {
        try {
            const res = await fetch("http://localhost:8080/requestServices");
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await res.json();
            setData(result.data);
            console.log(result.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getRequest();
    }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    return (
        <div className="flex">
            <Dashboard />
            {loading ? (
                <div className="mx-auto">Loading...</div>
            ) : (
                <div className="mx-auto">
                    {data.map((request) => (
                        <div
                            key={request.id}
                            className="request-card m-10 border border-gray-400 w-[600px] bg-yellow-50 p-8 text-start "
                        >
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="text-start font-semibold">
                                        {request.name}
                                    </h2>
                                    <small className="font-semiboldpt-20">
                                        {request.address}
                                    </small>
                                </div>
                                <div className="flex items-center">
                                    <IoCall />
                                    <p className="pl-2">{request.phone}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-justify">
                                    <span className="font-semibold">
                                        Description:
                                    </span>{" "}
                                    {request.serviceDescription}
                                </p>

                                <div className="flex justify-between pt-4">
                                    <p>
                                        <span className="font-semibold">
                                            Service Name:
                                        </span>{" "}
                                        {request.serviceName}
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Category:
                                        </span>{" "}
                                        {request.serviceCategory}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default page;
