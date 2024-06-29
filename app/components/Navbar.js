"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import React from "react";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <div>
            <div className=" navbar fixed  z-50 bg-opacity-80 bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className=" text-center menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link href="/" className="NavLink">
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="NavLink">
                                    services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="NavLink">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/order-cart" className="NavLink">
                                    Order Cart
                                </Link>
                            </li>
                            <li>
                                {session ? (
                                    <details className="dropdown">
                                        <h1 className="text-lg font-semibold">
                                            {session?.user?.name}
                                        </h1>
                                        <ul className="px-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                            <li>
                                                <Link
                                                    href="/profile"
                                                    className="NavLink"
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/dashboard"
                                                    className="NavLink"
                                                >
                                                    Business Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => signOut()}
                                                >
                                                    Log out
                                                </button>
                                            </li>
                                        </ul>
                                    </details>
                                ) : (
                                    <Link href="/login" className="NavLink">
                                        Login
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <Link
                        href="/"
                        className=" btn btn-ghost normal-case  text-xl"
                    >
                        Service Station
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1  ">
                        <li>
                            <Link href="/" className="NavLink">
                                home
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="NavLink">
                                services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="NavLink">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/order-cart" className="NavLink">
                                Order Cart
                            </Link>
                        </li>
                        <li>
                            {session ? (
                                <details className="dropdown">
                                    <summary className="text-base font-semibold text-white bg-blue-400">
                                        {session?.user?.name}
                                    </summary>
                                    <ul className=" shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-full">
                                        <li>
                                            <Link
                                                href="/user/profile"
                                                className="NavLink"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/dashboard"
                                                className="NavLink"
                                            >
                                                Business Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                className="font-semibold "
                                                onClick={() => signOut()}
                                            >
                                                Log out
                                            </button>
                                        </li>
                                    </ul>
                                </details>
                            ) : (
                                <Link href="/login" className="NavLink">
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
