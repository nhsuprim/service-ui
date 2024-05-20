import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";

const page = () => {
    return (
        <div className="flex">
            <Dashboard />
            <div className="mx-auto">orders</div>
        </div>
    );
};

export default page;
