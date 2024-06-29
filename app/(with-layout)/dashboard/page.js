import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";

const page = () => {
    return (
        <div className="flex">
            <Dashboard />
            <div className=" w-full mx-auto">
                <h1 className="font-bold text-[70px] text-teal-400">
                    Welcome to Dashboard
                </h1>
            </div>
        </div>
    );
};

export default page;
