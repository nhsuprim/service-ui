"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Link from "next/link";

const Page = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [divisionFilter, setDivisionFilter] = useState("");

    const getServices = async () => {
        setLoading(true);
        const res = await fetch("http://localhost:8080/services");
        const data = await res.json();
        setServices(data.data);
        setLoading(false);
    };

    useEffect(() => {
        getServices();
    }, []);

    const filteredServices = services.filter(
        (service) =>
            service.serviceName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) &&
            (categoryFilter === "" || service.category === categoryFilter) &&
            (divisionFilter === "" ||
                service.userId.division === divisionFilter)
    );

    return (
        <div className="container mx-auto p-4">
            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="my-4 w-full md:w-1/4">
                        <h1 className="text-start font-medium">
                            Search Services
                        </h1>
                        <input
                            type="text"
                            placeholder="Search services"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <h1 className="text-start font-medium">
                            Filtered Services
                        </h1>
                        <input
                            type="text"
                            placeholder="Filter by category"
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                        <input
                            type="text"
                            placeholder="Filter by division"
                            value={divisionFilter}
                            onChange={(e) => setDivisionFilter(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-10"
                        />
                        <Link
                            href={"/request-service"}
                            className="block border border-black p-2 rounded-xl text-teal-400 font-bold hover:bg-teal-400 hover:text-black transition mt-10 text-center"
                        >
                            Request For Services
                        </Link>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service) => (
                            <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                            >
                                <ServiceCard service={service} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
