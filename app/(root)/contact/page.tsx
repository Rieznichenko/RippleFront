import React from "react";
import camelBg from "@/components/svg/camel_colored.svg";
import envelope from "@/components/svg/envelope-line-icon.svg";
import xSocial from "@/components/svg/x-social-media-white-icon.svg";
import gradientBg from "@/components/svg/linearGradient.svg";

import LedgerCard from "@/components/ledgerCard";
import Link from "next/link";
const Page = () => {

  return (
    <div
      className="flex justify-center bg-center sm:bg-right bg-[length:80%_100%] sm:bg-[length:40%_100%] custom-height"
      style={{
        // backgroundImage: `url(${camelBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center"
      }}
    >
      {/* <img src={camelBg.src} className="absolute right-0 top-80 -z-0" /> */}
      <div className="text-center mx-auto w-[90%] sm:w-[80%]  ">
        <div className="pt-[10rem] ">
          <div className=" flex items-start sm:items-center flex-col gap-5">
            <h2 className="font-outfit text-3xl sm:text-6xl font-semibold text-white">
              Contact
            </h2>
            <p className="font-lato  text-left sm:text-center text-sm sm:text-2xl w-[100%] sm:w-[70%] text-white">
              We value your feedback and we are here to assist you. Please feel
              free to reach out about using any of the methods below. We look
              forward to hearing from you!
            </p>
          </div>
          <div className="my-12  w-[100%] sm:w-[60%] mx-auto flex items-center gap-5">
            <div className="flex-1">
              <LedgerCard
                icon={envelope}
                title={
                  <span className="text-[#68A5FF]">
                    <Link
                      href={"mailto:support@xrpkuwait.com"}
                      className="text-sm sm:text-xl"
                    >
                      support@xrpkuwait.com
                    </Link>
                  </span>
                }
              />
            </div>
            <div className="flex-1">
              <LedgerCard
                icon={xSocial}
                title={
                  <span className="text-[#68A5FF]">
                    <Link
                      href={"https://twitter.com/xrpkuwait"}
                      className="text-sm sm:text-xl"
                      target="_blank"
                    >
                      @xrpkuwait
                    </Link>
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
