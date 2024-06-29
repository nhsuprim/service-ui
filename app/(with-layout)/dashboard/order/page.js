import React from "react";
import Dashboard from "../../../components/Dashboard/Dashboard";
import Order from "../../../components/Orders/Order";

const page = () => {
    return (
        <div className="flex">
            <Dashboard />
            <div className="mx-auto">
                <Order />
            </div>
        </div>
    );
};

export default page;
