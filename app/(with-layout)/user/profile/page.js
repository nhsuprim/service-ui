"use client";
import React from "react";
import Profile from "../../../components/Profile/Profile";
import { useSession } from "next-auth/react";

const page = () => {
    const { data: session } = useSession();

    return (
        <div className=" pt-20 ">
            <Profile session={session} />
        </div>
    );
};

export default page;
