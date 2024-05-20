"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import uploadImageToImgBB from "../UploadImgToImgBB";
import { useRouter } from "next/navigation";

const UpdateServices = ({ service }) => {
    const router = useRouter();
    // console.log(service);
    const [serviceName, setServiceName] = useState(service?.serviceName);
    const [category, setCategory] = useState(service.category);
    const [discription, setDiscription] = useState(service.discription);
    const [image, setImage] = useState(service?.image);
    const [cost, setCost] = useState(service?.price);
    const [user, setUser] = useState({});
    const storedUser = () => {
        const storedUser = localStorage.getItem("user");
        setUser(JSON.parse(storedUser));
    };

    useEffect(() => {
        storedUser();
    }, []);
    console.log("user", user.id);

    //axios upadate services

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const apiKey = process.env.NEXT_PUBLIC_IMG_BB_API_KEY;
        if (file) {
            try {
                const imageUrl = await uploadImageToImgBB(file, apiKey);
                setImage(imageUrl);
                console.log("Image uploaded:", imageUrl);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            serviceName: serviceName,
            category: category,
            discription: discription,
            image: image,
            price: parseFloat(cost),
            userId: user.id,
        };
        console.log(data);
        try {
            const response = axios.patch(
                `http://localhost:8080/services/${service.id}`,
                data
            );
            console.log(response);
        } catch (e) {
            console.error("Error:", e);
        }

        router.push("/services");
    };
    console.log(serviceName);

    return (
        <div className="mx-auto py-16 bg-slate-100 w-1/2 px-8 mb-auto rounded-lg">
            <h2>Update Service</h2>
            <form onSubmit={handleSubmit} className="pt-16 space-y-4">
                <label className="input input-bordered flex items-center gap-2">
                    Service Name :
                    <input
                        placeholder={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    Service Category :
                    <input
                        required
                        type="text"
                        className="grow"
                        placeholder={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    Discriptions :
                    <input
                        required
                        type="text"
                        className="grow"
                        placeholder={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Service Cost :
                    <input
                        required
                        type="text"
                        className="grow"
                        placeholder={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                </label>
                <div className="flex items-center ">
                    <h1 className="font-medium pl-5">Select image</h1>
                    <input
                        required
                        className="py-5 ml-8"
                        type="file"
                        onBlur={handleImageUpload}
                    />
                </div>
                <img className="" src={image} alt="" height={200} width={200} />
                <button onClick={handleSubmit} className="submit-btn">
                    Update Service
                </button>
            </form>
        </div>
    );
};
export default UpdateServices;
