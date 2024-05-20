"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import uploadImageToImgBB from "../UploadImgToImgBB";
import UserProfile from "./UserProfile";

const Profile = ({ session }) => {
    const genderOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
    ];
    const divisionOpstions = [
        { value: "Dhaka", label: "Dhaka" },
        { value: "Chattogram", label: "Chattogram" },
        { value: "Khulna", label: "Khulna" },
        { value: "Mymensingh", label: "Mymensingh" },
        { value: "Barisal", label: "Barisal" },
        { value: "Rangpur", label: "Rangpur" },
        { value: "Rajshahi", label: "Rajshahi" },
        { value: "Sylhet", label: "Sylhet" },
    ];
    const [selectedGenderOption, setSelectedGenderOption] = useState(null);
    const [selectedDivisionOption, setSelectedDivisionOption] = useState(null);

    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [image, setImage] = useState(null);
    const [registered, setRegistered] = useState(false);

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
            username: session?.user.name,
            email: session?.user.email,
            phone: phone,
            address: address,
            // gender: selectedGenderOption.value,
            division: selectedDivisionOption.value,
            image: image,
        };
        try {
            const response = await axios.post(
                "http://localhost:8080/userdetails",
                data
            );
            console.log(response);
        } catch (e) {
            console.error("Error:", e);
        }
        toast("Here is your toast.");

        console.log(data);
    };

    const [userDetailsData, setUserDetailsData] = useState([]);
    const [filterdData, setfilterdDataData] = useState();

    const getData = async () => {
        try {
            const res = await fetch("http://localhost:8080/userdetails");
            const data = await res.json();

            setUserDetailsData(data.data);

            const sessionEmail = await session?.user.email;

            const userFilteredData = data.data.find(
                (item) => item.email === sessionEmail
            );
            setfilterdDataData(userFilteredData);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        if (session) {
            getData();
        }
    }, [session]);

    if (filterdData) {
        return <UserProfile filterdData={filterdData} />;
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <div className="flex justify-evenly  space-y-5 w-2/3 mx-auto shadow-xl ">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-medium py-4">
                            {session?.user.name}
                        </h1>
                        {image ? (
                            <img className="profile-img " alt="" src={image} />
                        ) : (
                            <img
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                className="rounded-full "
                                alt=""
                                width={300}
                                height={300}
                            />
                        )}
                        <input
                            required
                            className="py-5 ml-8"
                            type="file"serviceName
                            onBlur={handleImageUpload}
                        />
                    </div>
                    <div>
                        <h1 className="title">Update Profile </h1>
                        <div className="space-y-2">
                            <label className="input input-bordered flex items-center gap-2">
                                Name
                                <input
                                    type="text"
                                    className="grow font-semibold"
                                    placeholder={session?.user.name}
                                    disabled
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Email
                                <input
                                    type="text"
                                    className="grow font-semibold"
                                    placeholder={session?.user.email}
                                    disabled
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Phone
                                <input
                                    type="text"
                                    className="grow"
                                    required
                                    placeholder="+880"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Address
                                <input
                                    type="text"
                                    className="grow"
                                    required
                                    placeholder="House No: , Road No: , City:"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </label>
                            <div className="flex justify-around">
                                <Select
                                    className=""
                                    required
                                    defaultValue={selectedGenderOption}
                                    onChange={setSelectedGenderOption}
                                    options={genderOptions}
                                    placeholder="Select Gender"
                                    // autoFocus={true}
                                />
                                <Select
                                    className=""
                                    required
                                    defaultValue={selectedDivisionOption}
                                    onChange={setSelectedDivisionOption}
                                    options={divisionOpstions}
                                    placeholder="Select Division"
                                />
                            </div>
                        </div>
                        <button className="submit-btn">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
};

export default Profile;
