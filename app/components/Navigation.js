"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { BiMenuAltRight, BiX } from "react-icons/bi";
// import SearchMobile from "./SearchMobile";

const Navigation = () => {
    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(true);
    const desktopMode = useMediaQuery({
        query: "(min-width:1200px)",
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <header
            className={`${
                header ? "bg-white shadow-md py-2" : "bg-white shadow-none py-4"
            } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
        >
            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center  xl:justify-between">
                <div className="flex justify-between items-center px-4">
                    <Link
                        to="home"
                        smooth={desktopMode}
                        spy={true}
                        className="cursor-pointer"
                    >
                        <Image
                            src={"/icons/logo.svg"}
                            width={194}
                            height={64}
                            alt=""
                        />
                    </Link>
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer xl:hidden"
                    >
                        {nav ? (
                            <BiX className="text-4xl" />
                        ) : (
                            <BiMenuAltRight className="text-4xl" />
                        )}
                    </div>
                </div>
                <nav
                    className={`${
                        nav
                            ? "max-h-max py-8 px-4 xl:py-0 xl:px-0"
                            : "max-h-0 xl:max-h-max"
                    } flex text-center flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:bg-transparent xl:pb-0 transition-all duration-300 xl:text-left xl:text-base xl:normal-case text-sm uppercase `}
                >
                    <Link
                        to="home"
                        className="cursor-pointer"
                        activeClass="'active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Home
                    </Link>
                    <Link
                        to="cars"
                        className="cursor-pointer"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Cars
                    </Link>
                    <Link
                        to="About"
                        className="cursor-pointer"
                        activeClass="'active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        About
                    </Link>
                    <Link
                        to="why"
                        className="cursor-pointer"
                        activeClass="'active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        why us
                    </Link>
                    <Link
                        to="Testimonials"
                        className="cursor-pointer"
                        activeClass="'active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Testimonials
                    </Link>

                    <Link
                        to="Contact"
                        className="cursor-pointer"
                        activeClass="'active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        Contact
                    </Link>
                    <Link
                        to="cars"
                        className="xl:hidden btn btn-primary btn-sm max-w-[150px] mx-auto"
                        activeClass="'active"
                        smooth={desktopMode}
                        spy={true}
                    >
                        See all cars
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
