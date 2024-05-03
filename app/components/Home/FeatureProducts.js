"use client";
import React from "react";
import FeatureSinglePro from "./FeatureSinglePro";

import { RotatingLines } from "react-loader-spinner";
import { useGetProductsQuery } from "../../redux/api";

const FeatureProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log(data);
  const featureData = data?.filter((item) => item.featured === true);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
  return (
    <>
      <div className="my-24">
        <h1 className="lg:text-3xl text-2xl  italic uppercase  text-[#D99904]">
          ---feature product---
        </h1>
        <hr className="mx-auto" />
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {featureData.map((item) => (
          <FeatureSinglePro key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default FeatureProducts;
