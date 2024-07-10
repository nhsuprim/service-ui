"use client";
import Link from "next/link";
import React, { useState } from "react";
import uploadImageToImgBB from "../UploadImgToImgBB";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const UserProfile = ({ filterdData }) => {
    const [userName, setUserName] = useState(filterdData.username);
    const [image, setImage] = useState(filterdData.image);
    const [email, setEmail] = useState(filterdData.email);
    const [address, setAddress] = useState(filterdData.address);
    const [phone, setPhone] = useState(filterdData.phone);
    const [city, setCity] = useState(filterdData.division);
    const Router = useRouter();

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
            username: userName,
            email: email,
            address: address,
            phone: phone,
            division: city,
            image: image,
        };
        console.log(filterdData.id);
        try {
            const response = await axios.patch(
                `http://localhost:8080/userdetails/${filterdData.id}`,
                data
            );
            console.log(response);
        } catch (e) {
            console.error("Error:", e);
        }
        toast.success("Request submitted successfully!", {
            position: "top-right",
        });
        Router.push("/");
        // toast("Here is your toast.");
        // alert("OK");

        console.log(data);
    };

    return (
        <div className="flex flex-col justify-center items-center pb-8 space-y-5 w-2/3 mx-auto shadow-xl  ">
            <img className="profile-img " src={image} alt="" />
            <input
                required
                className="py-5 ml-8"
                type="file"
                onBlur={handleImageUpload}
            />
            <div className="overflow-x-auto ml-5">
                <table className="table text-lg ">
                    {/* head */}
                    <thead></thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Username </td>

                            <td>
                                <input
                                    placeholder={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>Email</td>
                            <td>
                                <input placeholder={email} disabled />
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Address</td>
                            <td>
                                <input
                                    placeholder={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <input
                                    placeholder={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>
                                <input
                                    placeholder="age"
                                    // onChange={(e) => setCity(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>
                                <input
                                    placeholder={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={handleSubmit} className="submit-btn">
                    Update Profile
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserProfile;
