"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import OrderCart from "../../components/Order-Cart/OrderCart";

const page = () => {
    const [user, setUser] = useState({});
    const { data: session } = useSession();
    const userEmail = session?.user?.email;
    // console.log(userEmail);
    const getUser = async () => {
        try {
            const res = await fetch("http://localhost:8080/users");
            const data = await res.json();
            const userData = await data?.data?.find(
                (user) => user?.email === userEmail
            );
            // console.log(userData);

            // Set user data to localStorage
            localStorage.setItem("user", JSON.stringify(userData));

            setUser(userData);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        getUser();
    }, [session]);

    return (
        <div>
            <OrderCart user={user} />
        </div>
    );
};

export default page;
