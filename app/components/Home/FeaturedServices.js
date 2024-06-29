"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

const FeaturedServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8080/services");
            const data = await res.json();
            setServices(data.data);
            console.log(data.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1 className="lg:text-3xl text-2xl  italic uppercase  text-[#D99904]">
                ---feature service---
            </h1>
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {services.map((service) => (
                        <Link key={service.id} href={`/services/${service.id}`}>
                            <div
                                key={service.id}
                                className="w-96 bg-base-100 shadow-xl flex flex-col justify-between"
                            >
                                <img
                                    src={service.image}
                                    alt="Service"
                                    className="h-60 object-cover"
                                />
                                <div className="card-body flex flex-col justify-between">
                                    <div className="flex-grow"></div>{" "}
                                    {/* This makes sure the badge stays at the bottom */}
                                    <div className="card-actions items-center justify-center mt-4">
                                        <div className="badge uppercase font-semibold">
                                            {service.serviceName}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedServices;
