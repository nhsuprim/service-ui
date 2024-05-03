import Link from "next/link";
import React from "react";

const FeatureSinglePro = ({ item }) => {
  return (
    <Link href={`/products/${item.id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-between">
            <div className="badge badge-outline uppercase font-semibold">
              {item.name}
            </div>
            <div className="badge badge-outline font-semibold">
              {item.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureSinglePro;
