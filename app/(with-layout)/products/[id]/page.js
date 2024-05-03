"use client";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import ImageSider from "./ImageSider";
import Color from "./Color";
import CartAmountBtn from "./CartAmountBtn";
import Rating from "../../../components/rating/Rating";

const SingleProductPage = ({ params }) => {
  const [productData, setProductData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < productData.stock
      ? setAmount(amount + 1)
      : setAmount(productData.stock);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.pujakaitem.com/api/products/${params.id}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const productdata = await res.json();
        console.log(productData);
        setProductData(productdata);

        setLoading(false);
      } catch (error) {
        console.error("Fetch Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-[68px] max-w-[1260px] mb-10 container mx-auto">
      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div>
          <h1 className="text-start text-blue-600 font-semibold py-6 bg-slate-200 pl-5">
            <Link href="/">HOME</Link>/{productData.name}
          </h1>
          {/* product information */}
          <div className="lg:flex justify-center gap-[50px]  items-center mt-20">
            <div className="w-full px-5">
              <ImageSider productData={productData} />
            </div>

            <div className="w-3/4 text-start mx-auto ">
              <h1 className="text-3xl font-semibold pb-5">
                {productData.name}
              </h1>
              <div className="inline-flex">
                <Rating num={productData.stars} />
                <small>({productData.reviews} reviews)</small>
              </div>
              <p className="font-bold"> BDT {productData.price}</p>
              <p className=" text-justify">{productData.description}</p>
              <div className="flex justify-between py-5">
                <div clasName="">
                  <TbTruckDelivery className="w-full text-center text-4xl  " />
                  <p className="">Fast Delivered</p>
                </div>
                <div>
                  <TbReplace className="w-full text-center text-4xl" />
                  <p>30 Day's Replacement</p>
                </div>
                <div>
                  <TbTruckDelivery className="w-full text-center text-4xl" />
                  <p>Fast Delivered</p>
                </div>
                <div>
                  <MdOutlineSecurity className=" w-full text-center text-4xl" />
                  <p>2 Year Warrenty</p>
                </div>
              </div>
              <hr className=" min-w-max mt-[-20px] mx-auto" />
              <div className="flex">
                <p className="font-bold"> Available:</p>
                {productData.stock > 0 ? (
                  <p className="pl-2 text-green-400 font-semibold"> In Stock</p>
                ) : (
                  <p className="pl-2 text-red-300 font-semibold">
                    {" "}
                    Unavailable
                  </p>
                )}
              </div>
              <p className="font-bold">
                ID : <span className=" font-normal pl-2">{productData.id}</span>
              </p>
              <p className="font-bold">
                {" "}
                Brand :{" "}
                <span className=" font-normal pl-2">{productData.company}</span>
              </p>
              <hr className=" min-w-max  bg-black" />

              <Color productData={productData} />
              <CartAmountBtn
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
