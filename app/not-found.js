import Image from "next/image";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div>
      <div className="flex justify-center items-center lg:flex-col max-h-screen mx-auto overflow-hidden ">
        <Link
          href="/"
          className="bg-slate-500 rounded-md text-white font-bold  text-center px-10 py-2 mb-2"
        >
          Back to home
        </Link>
        <Image width={800} height={800} src="/notfound.jpg" alt="" />
      </div>
    </div>
  );
};

export default Notfound;
