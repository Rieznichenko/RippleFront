import React from "react";
import Navbar from "./ui/navbar";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-[100%]  absolute z-50 left-0 right-0 top-0 m-auto">
      <div className="w-full">
        {/* <div className="logo flex justify-center items-center">
          <Image
            src="/assets/logo.gif"
            className="w-20"
            width={100}
            height={100}
            alt="logo"
          />
          <Link href="/homepage">
            <h3 className="font-bold text-4xl font-outfit text-white flex gap-1">
              XRP<span className="text-[#CDD004]">Kuwait</span>
            </h3>
          </Link>
        </div> */}

        <div className="flex justify-center items-center">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
