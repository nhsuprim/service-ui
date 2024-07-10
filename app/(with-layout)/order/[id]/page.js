"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [selected, setSelected] = useState(new Date());
    const { data: session } = useSession();
    const [note, setNote] = useState("");
    const userEmail = session?.user?.email;

    const router = useRouter();

    const getService = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                `http://localhost:8080/services/${params.id}`
            );
            setService(res.data?.data || {});
        } catch (error) {
            console.error("Error fetching service data:", error);
        } finally {
            setLoading(false);
        }
    };

    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:8080/users");
            const users = res.data?.data || [];
            const userData = users.find((user) => user?.email === userEmail);
            setUser(userData || {});
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        if (params.id && session) {
            getService();
            getUser();
        }
    }, [params.id, session]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedDate = format(selected, "yyyy-MM-dd");
        const data = {
            clientId: user.id,
            serviceId: service.id,
            appointedDate: formattedDate, // Sending date in ISO format
            note: note,
            status: "processing",
            cost: service.price || 0, // Fallback to 0 if price is not available
        };
        console.log(data);
        try {
            const res = await axios.post("http://localhost:8080/orders", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.status === 201) {
                toast.success("Order submitted successfully!", {
                    position: "top-right",
                });
                router.push("/payment");
            } else {
                toast.error("Failed to submit order. Please try again.", {
                    position: "top-right",
                });
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            toast.error("Failed to submit order. Please try again.", {
                position: "top-right",
            });
        }
    };

    return (
        <div className="flex gap-20 h-screen mx-auto w-[1100px]">
            <div>
                <h2 className="text-start font-semibold pt-5">
                    Select Appointment Date
                </h2>
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                />
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="bg-gray-100 w-full space-y-6 p-4">
                    <h1 className="font-bold text-3xl">Your Order</h1>
                    <div>
                        {selected && (
                            <p className="text-start font-bold">
                                Selected Date: {format(selected, "yyyy-MM-dd")}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-6 p-4">
                        <img className="w-[200px]" src={service.image} alt="" />
                        <h1 className="font-bold text-xl mb-2">
                            {service.serviceName}
                        </h1>
                    </div>
                    <h1 className="font-semibold text-start">
                        Service Cost Start From : BDT{" "}
                        <span className="text-red-400">{service.price}</span>
                    </h1>
                    <h1 className="font-semibold text-start">Note :</h1>
                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                    <button
                        onClick={handleSubmit}
                        className="btn btn-neutral font-bold"
                    >
                        Order Submit
                    </button>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Page;
