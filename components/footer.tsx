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
        className="  overflow-hidden  w-full h-[300px]"
        style={{
          backgroundImage: `url(${footerPattern.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "70%",
          backgroundPositionY: "10%",
        }}
      >
        <div className="flex items-center flex-col mt-24 left-0 right-0 top-0 justify-end w-[90%]  m-auto">
          <div className="flex justify-between w-full">
            <div className="logo flex justify-center items-center">
              <Image
                src="/assets/logo.gif"
                width={100}
                height={100}
                className="w-20"
                alt="logo"
              />
              <h3 className="font-bold text-4xl font-outfit text-white flex gap-1">
                XRP<span className="text-[#CDD004]">Kuwait</span>
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center text-white text-xl font-lato gap-5">
              <h4>Social media links </h4>
              <Link
                href="https://twitter.com/33baid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={xLogo} width={30} height={30} alt="social media" />
              </Link>
            </div>
          </div>

          <div className="w-full mt-16 my-3 h-[1px] border-t border-[#C6D5E9] "></div>
          <p className="flex items-center text-white gap-1">
            <Copyright className="text-white  text-sm" size={16} />{" "}
            {new Date().getFullYear()}
            <span className="text-[#FF4A00]">XRP</span> Kuwait. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
