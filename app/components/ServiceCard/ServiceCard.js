import React from "react";

const ServiceCard = ({ service }) => {
    console.log(service);
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure>
                <img src={service.image} alt="Shoes" width={300} height={300} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service.serviceName}</h2>
                <p>{service.discription}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">
                        Service Cost:{service.price}
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
