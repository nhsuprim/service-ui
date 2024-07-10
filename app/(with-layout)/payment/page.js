"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const Router = useRouter();

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handlePayClick = (e) => {
        e.preventDefault();
        toast.success("Request submitted successfully!", {
            position: "top-right",
        });
        Router.push("/order-cart");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Make a Payment</h1>
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => handlePaymentMethodChange("card")}
                    className={`px-4 py-2 rounded ${
                        paymentMethod === "card"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    Pay with Bank
                </button>
                <button
                    onClick={() => handlePaymentMethodChange("bkash")}
                    className={`px-4 py-2 rounded ${
                        paymentMethod === "bkash"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    Pay with bKash
                </button>
            </div>
            {paymentMethod === "card" && (
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Bank Payment</h2>
                    <form>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="bankName"
                            >
                                Bank Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="bankName"
                                type="text"
                                placeholder="Bank Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="accountNumber"
                            >
                                Account Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="accountNumber"
                                type="text"
                                placeholder="Account Number"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="accountHolderName"
                            >
                                Account Holder's Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="accountHolderName"
                                type="text"
                                placeholder="Account Holder's Name"
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handlePayClick}
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            )}
            {paymentMethod === "bkash" && (
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">bKash Payment</h2>
                    <form>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="bkashNumber"
                            >
                                bKash Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="bkashNumber"
                                type="text"
                                placeholder="01XXXXXXXXX"
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handlePayClick}
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Payment;
