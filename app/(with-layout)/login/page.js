"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            // router.replace("/");
        }
    }, [sessionStatus, router]);

    const isLoginDisabled = email === "" || password === "";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError(
                "Password must be at least 8 characters long and include a special character."
            );
            return;
        }
        const res = await signIn("credentials", {
            redirect: false,
            email: email,
            password: password,
            // userID: userID,
        });

        if (res?.error) {
            setError("Invalid email or password");
            if (res?.url) router.replace("/");
        } else {
            setEmail("");
            setPassword("");
            setError("");
            router.push("/user/profile");
        }
    };

    // if (sessionStatus === "loading") {
    //     return <h1 className="pt-40">Loading...</h1>;
    // }

    // if (sessionStatus === "authenticated") {
    //     console.log("ok", session);
    // }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 mx-auto items-center justify-center h-screen mb-14"
        >
            <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    type="text"
                    id="username"
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
                Login
            </button>
            <p>OR</p>
            <Link href="/register" className="NavLink">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    Register
                </button>
            </Link>
            {/* <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => signIn("google")}
            >
                Google
            </button> */}
        </form>
    );
};

export default Page;
