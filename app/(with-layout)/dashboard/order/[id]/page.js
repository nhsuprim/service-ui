"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../../../../components/Dashboard/Dashboard";
import { format } from "date-fns";
import Select from "react-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = ({ params }) => {
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState(null);

    const statusOptions = [
        { value: "received", label: "Received" },
        { value: "confirmed", label: "Confirmed" },
        { value: "completed", label: "Completed" },
        { value: "cancelled", label: "Cancelled" },
        { value: "processing", label: "Processing" },
    ];

    const getOrders = async () => {
        try {
            const res = await fetch(
                `http://localhost:8080/orders/${params.id}`
            );
            const data = await res.json();

            setOrder(data.data);
            setSelectedStatus({
                value: data.data.status,
                label: capitalize(data.data.status),
            });
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error("Error fetching service data:", error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    // const updateOrderStatus = async (status) => {
    //     try {
    //         await fetch(`http://localhost:8080/orders/${params.id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ status }),
    //         });
    //         setOrder((prevOrder) => ({ ...prevOrder, status }));
    //     } catch (error) {
    //         console.error("Error updating order status:", error);
    //     }
    // };

    const handleStatusChange = (selectedOption) => {
        setSelectedStatus(selectedOption);
        // updateOrderStatus(selectedOption.value);
    };

    const capitalize = (s) => {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    useEffect(() => {
        getOrders();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const formattedDate = order?.appointedDate
        ? format(new Date(order.appointedDate), "yyyy-MM-dd")
        : "";

    const handleSumbit = (e) => {
        e.preventDefault();
        // updateOrderStatus(selectedStatus.value);
        const data = {
            note: order.note,
            status: selectedStatus.value,
            clientId: order.clientId.id,
            serviceId: order.serviceId.id,
            appointedDate: formattedDate, // Sending date in ISO format
            // note: note,
            // status: "processing",
            cost: order.serviceId.price || 0,
        };
        console.log(data);
        try {
            const res = axios.patch(
                `http://localhost:8080/orders/${params.id}`,
                data
            );
            console.log(res);
            toast.success("Order submitted successfully!", {
                position: "top-right",
            });
        } catch (e) {
            console.error("Error:", e);
        }

        // router.push("/services");
    };

    console.log(order);
    return (
        <div className="flex">
            <Dashboard />
            <div className="mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
                <h1 className="text-2xl font-bold mb-4">
                    Update Order Details
                </h1>
                <div className="flex items-center gap-8 mb-4">
                    <img src={order.serviceId.image} alt="" width={200} />
                    <h1 className="text-lg font-bold">
                        {order.serviceId.serviceName}
                    </h1>
                </div>
                <div className="text-start font-semibold">
                    <h1>Client Name: {order?.serviceId.userId.username}</h1>
                    <hr className="my-2 border-gray-300" />
                    <h1>Address: {order?.serviceId.userId.address}</h1>
                    <hr className="my-2 border-gray-300" />
                    <h1>Division: {order?.serviceId.userId.division}</h1>
                    <hr className="my-2 border-gray-300" />
                    <h1>Appointed Date: {formattedDate}</h1>
                </div>
                <div className="mt-4 flex items-center gap-4">
                    <h2 className="text-lg font-semibold mb-2">
                        Order Status :{" "}
                    </h2>
                    <Select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        options={statusOptions}
                        className="w-64"
                    />
                </div>
                <button className="submit-btn" onClick={handleSumbit}>
                    Update
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default page;
