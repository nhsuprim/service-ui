"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();
    const userEmail = session?.user?.email;
    const [orders, setOrders] = useState([]);

    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:8080/users");
            const users = res.data?.data || [];
            const userData = users.find((user) => user?.email === userEmail);
            setUser(userData || {});
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    const getMyOrder = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8080/orders/client/${user?.id}`
            );
            const data = res.data?.data;
            console.log(data);
            setOrders(data);
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    useEffect(() => {
        if (session) {
            setLoading(true);
            getUser();
        }
    }, [session]);

    useEffect(() => {
        if (user?.id) {
            getMyOrder();
        }
    }, [user?.id]);

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log("order", orders);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/orders/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            getMyOrder();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="overflow-x-auto pt-8 w-3/4 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Service Name</th>
                            <th>Service Category</th>
                            <th>Service Cost </th>
                            <th>Appointment Date</th>
                            <th>Order Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order?.serviceId.serviceName}</td>
                                <td>{order?.serviceId.category}</td>
                                <td>{order?.serviceId.price}</td>
                                <td>{order?.appointedDate}</td>

                                {order?.status === "processing" ? (
                                    <td>
                                        <span className="bg-yellow-200 rounded-xl font-semibold px-2 py-1 capitalize">
                                            {order?.status}
                                        </span>
                                    </td>
                                ) : order?.status === "received" ? (
                                    <td>
                                        <span className="bg-green-200 rounded-xl font-semibold px-2 py-1 capitalize">
                                            {order?.status}
                                        </span>
                                    </td>
                                ) : order?.status === "confirmed" ? (
                                    <td>
                                        <span className="bg-blue-200 rounded-xl font-semibold px-2 py-1 capitalize">
                                            {order?.status}
                                        </span>
                                    </td>
                                ) : order?.status === "cancelled" ? (
                                    <td>
                                        <span className="bg-red-200 rounded-xl font-semibold px-2 py-1 capitalize">
                                            {order?.status}
                                        </span>
                                    </td>
                                ) : (
                                    <td>{order?.status}</td>
                                )}

                                {/* <td>{order?.status}</td> */}
                                <td>
                                    <button
                                        onClick={() => handleDelete(order.id)}
                                        className="text-2xl pr-4 text-red-400"
                                    >
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
