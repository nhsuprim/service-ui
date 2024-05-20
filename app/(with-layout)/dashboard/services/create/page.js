import React from "react";
import Dashboard from "../../../../components/Dashboard/Dashboard";
import CreateService from "../../../../components/Services/CreateService";

const page = () => {
    return (
        <div className="flex">
            <Dashboard />
            <CreateService />
        </div>
    );
};

export default page;
