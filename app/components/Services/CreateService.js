"use client";

import React, { useEffect, useState } from "react";
import uploadImageToImgBB from "../../components/UploadImgToImgBB";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CreateService = () => {
    const router = useRouter();
    const [user, setUser] = useState({});

    const [serviceName, setServiceName] = useState();
    const [category, setCategory] = useState();
    const [discription, setDiscription] = useState();
    const [image, setImage] = useState();
    const [cost, setCost] = useState();

    const storedUser = () => {
        const storedUser = localStorage.getItem("user");
        setUser(JSON.parse(storedUser));
    };

    useEffect(() => {
        storedUser();
    }, []);

    // console.log(user.id);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            serviceName: serviceName,
            category: category,
            discription: discription,
            image: image,
            price: parseFloat(cost),
            userId: user.id,
        };
        try {
            const response = await axios.post(
                "http://localhost:8080/services",
                data
            );
            console.log(response);
        } catch (e) {
            console.error("Error:", e);
        }

        router.push("/services");
    };

    return (
        <div className="mx-auto py-16 bg-slate-100 w-1/2 px-8 mb-auto rounded-lg">
            <h2>Create Service</h2>
            <form onSubmit={handleSubmit} className="pt-16 space-y-4">
                <label className="input input-bordered flex items-center gap-2">
                    Service Name :
                    <input
                        required
                        type="text"
                        className="grow"
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
                        placeholder=""
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    Discriptions :
                    <input
                        required
                        type="text"
                        className="grow"
                        placeholder=""
                        onChange={(e) => setDiscription(e.target.value)}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Service Cost :
                    <input
                        required
                        type="text"
                        className="grow"
                        placeholder=""
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
                <button className="submit-btn">Create Service</button>
            </form>
        </div>
    );
};

export default CreateService;
