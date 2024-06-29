"use client";
import Link from "next/link";
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
        <div className="container mx-auto p-4">
            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-center">
                        <img
                            className="rounded-md"
                            src={service.image}
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-start space-y-4">
                        <h1 className="title pb-12">{service.serviceName}</h1>
                        <p className="text-justify">{service.discription}</p>
                        <p className="font-semibold">
                            Service Cost:{" "}
                            <span className="text-red-500 font-bold">
                                {service.price} TK
                            </span>
                        </p>
                        <p className="font-semibold">
                            Service Category: {service.category}
                        </p>
                        <p className="font-semibold">
                            Service Area: {service.userId.division}
                        </p>
                        <Link
                            href={`/order/${service.id}`}
                            className="btn btn-neutral font-bold w-1/2"
                        >
                            Purchase Service
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default page;
