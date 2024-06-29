"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
    const pathname = usePathname();

    return (
        <div className="flex">
            <div className=" h-[90vh] text-left w-64 overflow-y-auto bg-gray-800 text-white py-4 px-6">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <ul className="space-y-2">
                    <li
                        className={`${
                            pathname === "/dashboard/services"
                                ? "bg-gray-600 px-4 py-2 rounded-md"
                                : "px-4 py-2"
                        }`}
                    >
                        <Link href="/dashboard/services">Service</Link>
                    </li>
                    <li
                        className={`${
                            pathname === "/dashboard/order"
                                ? "bg-gray-600 px-4 py-2 rounded-md"
                                : "px-4 py-2"
                        }`}
                    >
                        <Link href="/dashboard/order">Order</Link>
                    </li>
                    <li>
                        <Link
                            className={`${
                                pathname === "/about"
                                    ? "bg-gray-600 px-4 py-2 rounded-md"
                                    : "px-4 py-2"
                            }`}
                            href="/about"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
