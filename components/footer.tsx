import React from "react";
import footerPattern from "@/components/svg/footerPattern.png";
import { Copyright } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-[100%] overflow-hidden relative ">
      <div
        className="  overflow-hidden  w-full h-[100px] sm:h-[150px]"
        style={{
          backgroundImage: `url(${footerPattern.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "70%",
          backgroundPositionY: "10%",
        }}
      >
        <div className="flex items-center flex-col my-5 left-0 right-0 top-0 justify-end w-[90%]  m-auto">
          <div className="w-full mt-5z sm:mt-16 my-3 h-[1px] border-t border-[#C6D5E9] "></div>
          <p className="flex items-center text-white text-sm sm:text-lg gap-1">
            <Copyright className="text-white  text-sm" size={16} />{" "}
            <span>{new Date().getFullYear()}</span>
            XRP <span className="text-[#CDD004]">Kuwait<span className="text-white">.</span></span> All rights
            reserved. - <span><Link href={"/disclaimer"}>Disclaimer</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
