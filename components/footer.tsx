import React from "react";
import footerPattern from "@/components/svg/footerPattern.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-[100%] overflow-hidden relative ">
      <div className="flex items-center  overflow-hidden  w-full h-[400px]" style={{
        backgroundImage:`url(${footerPattern.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "top",
      }}>
      

        <div className="flex absolute  left-0 right-0 top-0 justify-between w-[90%]  m-auto">
          <div className="logo flex justify-center items-center">
            <Image src="/assets/logo.gif" width={100} height={100} className="w-20"  alt="logo" />
            <h3 className="font-bold text-4xl font-outfit text-white flex gap-1">
              XRP<span className="text-[#CDD004]">Kuwait</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
