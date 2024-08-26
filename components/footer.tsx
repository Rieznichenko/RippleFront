import React from "react";
import footerPattern from "@/components/svg/footerPattern.png";
import xLogo from "@/components/svg/x-social-media-white-icon.svg";
import Image from "next/image";
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
            {new Date().getFullYear()}
            <span className="text-[#FF4A00]">XRP</span> Kuwait. All rights
            reserved. - <span><Link href={"/disclaimer"}>Disclaimer</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
