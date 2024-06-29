import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaBehance,
} from "react-icons/fa";
import PropTypes from "prop-types";

const teamMembers = [
    {
        picture:
            "https://media.licdn.com/dms/image/D5603AQEpQNVN5OA7QQ/profile-displayphoto-shrink_800_800/0/1696318045596?e=2147483647&v=beta&t=HMU8MPgRJMTOurJqIYIaFK_rz_Efr1jvi4Jndw1_9aM",
        fullName: "Nazmul Huda",
        designation: "Founder / CEO",
        bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
        socialLinks: [
            { icon: <FaFacebookF />, href: "#" },
            { icon: <FaLinkedinIn />, href: "#" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaBehance />, href: "#" },
        ],
    },
    {
        picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
        fullName: "Raima Ray",
        designation: "Business Head",
        bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
        socialLinks: [
            { icon: <FaFacebookF />, href: "#" },
            { icon: <FaLinkedinIn />, href: "#" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaBehance />, href: "#" },
        ],
    },
    {
        picture: "https://cdn.easyfrontend.com/pictures/users/user25.jpg",
        fullName: "Abul Kalam",
        designation: "UI Design",
        bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
        socialLinks: [
            { icon: <FaFacebookF />, href: "#" },
            { icon: <FaLinkedinIn />, href: "#" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaBehance />, href: "#" },
        ],
    },
    {
        picture: "https://cdn.easyfrontend.com/pictures/users/user17.jpg",
        fullName: "Sojib Chowdhury",
        designation: "Marketing Head",
        bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
        socialLinks: [
            { icon: <FaFacebookF />, href: "#" },
            { icon: <FaLinkedinIn />, href: "#" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaBehance />, href: "#" },
        ],
    },
];

const TeamMemberItem = ({ member }) => (
    <>
        <img
            src={member.picture}
            alt={member.fullName}
            className="max-w-full h-auto rounded-full mx-auto"
            width="230"
        />
        <div className="px-4 py-6 xl:px-6">
            <h4 className="text-2xl font-medium mb-2">{member.fullName}</h4>
            <h6 className="font-medium">{member.designation}</h6>
            <p className="opacity-50 mb-0">{member.bio}</p>
            <div className="mt-6">
                {member.socialLinks.map((link, i) => (
                    <a
                        href={link.href}
                        className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                        key={i}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    </>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

const Testimonial = () => {
    return (
        <section className="ezy__team2 w-4/5 mx-auto light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="sm:max-w-md text-center">
                        <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
                            Our Experts Team
                        </h2>
                        <p>
                            Assumenda non repellendus distinctio nihil dicta
                            sapiente, quibusdam maiores, illum at qui.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6 text-center">
                    {teamMembers.map((member, i) => (
                        <div
                            className="col-span-4 md:col-span-2 lg:col-span-1"
                            key={i}
                        >
                            <TeamMemberItem member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
