"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <form
            className="md:pr-12"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <input
                    type="text"
                    className="min-h-[48px] leading-[48px] bg-[#3A384D] dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Name"
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    className="min-h-[48px] leading-[48px] bg-[#3A384D] dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Email"
                />
            </div>
            <div className="mb-4">
                <textarea
                    name="message"
                    className="min-h-[48px] leading-[48px] bg-[#3A384D] dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                    placeholder="Enter Message"
                    rows="4"
                ></textarea>
            </div>
            <div className="text-end">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-opacity-90 px-10 py-3 rounded-md mb-4"
                >
                    Send
                </button>
            </div>
        </form>
    );
};
const ContactPage = () => {
    return (
        <section className="ezy__contact1 light py-10 md:py-14 bg-white dark:bg-[#0b1727] text-white overflow-hidden mx-auto w-[1100px]">
            <div className="container px-4 relative">
                <div className="grid grid-cols-12 py-12">
                    <div className="col-span-12 lg:col-span-6 mb-4 lg:mb-0">
                        <div className="h-full flex items-center">
                            <img
                                src="https://cdn.easyfrontend.com/pictures/contact/contact_1.png"
                                alt=""
                                className="max-w-full h-auto relative z-[2] rounded-tr-[100px] rounded-br rounded-bl-[100px] mx-auto"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xl:col-span-5 px-6 relative">
                        <div className="absolute top-0 left-0 lg:-left-[20%] right-0 bottom-0 bg-[#363449] dark:bg-[#162231] rounded-tl rounded-tr-[30px] rounded-br-[150px] rounded-bl-[50px]"></div>

                        <div className="relative rounded my-12 py-6">
                            <div className="mb-12">
                                <h2 className="text-2xl leading-none font-bold md:text-[45px] mb-4">
                                    Contact Us
                                </h2>
                                <p className="text-lg mb-0">
                                    We list your menu online, help you process
                                    orders.
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
