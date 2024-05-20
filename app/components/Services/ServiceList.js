"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

const ServiceList = ({ user }) => {
    const userId = user?.id;

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const getServices = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `http://localhost:8080/services/user/${userId}`
            );
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            setServices(data.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getServices();
    }, [userId]);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/services/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            getServices();
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && (
                <div className="overflow-x-auto pt-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Category</th>
                                <th>Service Cost </th>
                                <th>Service Area </th>
                                <th>Delete/Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service.id}>
                                    <td>{service.serviceName}</td>
                                    <td>{service.category}</td>
                                    <td>{service.price}</td>
                                    <td>{service.userId.division}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(service.id)
                                            }
                                            className="text-2xl pr-4 text-red-400"
                                        >
                                            <MdDelete />
                                        </button>
                                        <Link
                                            href={`/dashboard/services/update/${service.id}`}
                                        >
                                            <button className="text-2xl text-blue-400">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ServiceList;
