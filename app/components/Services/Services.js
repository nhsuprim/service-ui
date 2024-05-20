import Link from "next/link";
import React from "react";
import Serviceslist from "../../components/Services/ServiceList";

const Services = ({ user }) => {
    return (
        <div>
            <button className="submit-btn text-left">
                <Link href="/dashboard/services/create">Create Service</Link>
            </button>

            {/* <Link href="/services/update">update Service</Link> */}
            <Serviceslist user={user} />
        </div>
    );
};

export default Services;
