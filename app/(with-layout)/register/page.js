"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const isLoginDisabled = email === "" || password === "" || username === "";
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError(
                "Password must be at least 8 characters long and include a special character."
            );
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/users", {
                username: username,
                email: email,
                password: password,
            });

            setUsername("");
            setEmail("");
            setPassword("");
            setError("");
            router.push("/login");
        } catch (e) {
            console.error("Error:", e);
            setError(e.response.data.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 mx-auto items-center justify-center h-screen"
        >
            <h1 className="text-2xl font-bold text-center mb-4">
                Registration
            </h1>
            <div className="flex flex-col">
                <label htmlFor="username" className="text-sm font-medium">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    type="email" // Use email type for email input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
                type="submit"
                className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${
                    isLoginDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoginDisabled}
            >
                Register
            </button>
        </form>
    );
};

export default Page;
