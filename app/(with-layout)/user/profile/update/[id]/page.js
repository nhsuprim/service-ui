import React from "react";
import UpdateProfile from "../../../../../components/Profile/UpdateProfile";

const page = ({ params }) => {
    console.log(params);
    return (
        <div>
            <UpdateProfile />
        </div>
    );
};

export default page;
