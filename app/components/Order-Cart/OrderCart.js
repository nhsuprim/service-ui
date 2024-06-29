"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const OrderCart = ({ user }) => {
    const id = user?.id;
    console.log(id);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    const getData = async () => {
        await fetch(`http://localhost:8080/orders/client/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data.data);
                console.log(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const handleDelete = async (id, status) => {
        if (status === "processing" || status === "cancelled") {
            try {
                const res = await fetch(`http://localhost:8080/orders/${id}`, {
                    method: "DELETE",
                });
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                getData();
            } catch (error) {
                console.error(error);
            }
        } else {
            setMessage("Cannot delete order after confirmation");
            setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
        }
    };

    useEffect(() => {
        if (id) {
            getData();
        } else {
            setLoading(false);
        }
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>loading ...</p>
            ) : (
                <div className="min-h-screen overflow-x-auto pt-8 w-[1100px] mx-auto">
                    {message && (
                        <p className="text-red-500 font-semibold">{message}</p>
                    )}
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Service Provider Name</th>
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
                                    <td>{order?.serviceId.userId.username}</td>
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
                                            <span className="bg-green-200 rounded-xl font-semibold px-2 py-1 capitalize">
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

                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    order.id,
                                                    order.status
                                                )
                                            }
                                            className="text-2xl pr-4 text-red-400"
                                        >
                                            <MdDelete />
                                        </button>
                                        {/* <Link href={`/dashboard/order/${order.id}`}>
                                        <button className="text-2xl text-blue-400">
                                            <FaEdit />
                                        </button>
                                    </Link> */}
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

export default OrderCart;
