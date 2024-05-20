import React from "react";
import Dashboard from "../../../components/Dashboard/Dashboard";
import ServiceList from "../../../components/Services/ServiceList";

const page = () => {
    return (
        <div className="flex">
            <Dashboard />
            <ServiceList />
        </div>
    );
};

export default page;
