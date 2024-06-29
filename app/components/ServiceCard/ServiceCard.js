import React from "react";

const shortenToTenWords = (text = "") => {
    const words = text.split(" ");
    const shortWords = words.slice(0, 10);
    return shortWords.join(" ") + (words.length > 10 ? "..." : "");
};

const ServiceCard = ({ service }) => {
    return (
        <div className="card w-auto bg-base-100 shadow-xl flex flex-col justify-between h-100">
            {" "}
            {/* Fixed height */}
            <figure className="flex-grow-0">
                <img
                    src={service.image}
                    alt="Service"
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="card-title">{service.serviceName}</h2>
                    <p className="text-justify text-gray-500">
                        {shortenToTenWords(service.discription)}
                    </p>
                </div>
                <div className="mt-4 flex justify-between">
                    <div className="badge badge-outline">
                        Advance: {service.price}
                    </div>
                    <div className="badge badge-outline">
                        {service.userId.division}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
