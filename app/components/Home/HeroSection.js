import Link from "next/link";
import React from "react";

const HeroSection = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://houseofit.ph/assets/uploads/The%20Ideal%20Help%20Desk%20SERVICE%20Your%20Managed%20Service%20Provider%20Should%20Have.jpg"
                    className="w-[50%] rounded-lg shadow-2xl"
                />
                <div className="w-2/3 ">
                    <h1 className="text-5xl font-bold ">
                        Need Any
                        <span className="text-teal-400"> Service!!</span>!!
                    </h1>
                    <p className="py-6 text-center ">
                        Our one-stop station brings everything to your doorstep,
                        offering expert solutions for plumbing, internet setup,
                        and car rentals—all tailored to your needs!
                    </p>
                    <Link href={"/services"}>
                        <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
