import React from "react";
import camelBg from "@/components/svg/camel_colored.svg";
import envelope from "@/components/svg/envelope-line-icon.svg";
import xSocial from "@/components/svg/x-social-media-white-icon.svg";

import LedgerCard from "@/components/ledgerCard";
const Page = () => {
  return (
    <div
      className=""
      //   style={{
      //     backgroundImage: `url(${camelBg.src})`,
      //     backgroundRepeat: "no-repeat",
      //     backgroundPositionX: "right",
      //     backgroundPositionY: "bottom",
      //   }}
    >
      <img src={camelBg.src} className="absolute right-0 top-80 -z-0" />
      <div className="text-center flex w-[90%] z-10 relative mx-auto  ">
        <div className="py-[20rem] ">
          <div className=" flex items-center flex-col gap-5">
            <h2 className="font-outfit text-6xl font-semibold text-white">
              Contact
            </h2>
            <p className="font-lato text-2xl w-[70%] text-white">
              We value your feedback and we are here to assist you. Please feel
              free to reach out about using any of the methods below. We look
              forward to hearing from you!
            </p>
          </div>
          <div className="my-12 w-[60%] mx-auto flex items-center gap-5">
            <div className="flex-1">
              <LedgerCard
                icon={envelope}
                title={<span className="text-[#68A5FF]">33baid@gmail.com</span>}
              />
            </div>
            <div className="flex-1">
              <LedgerCard
                icon={xSocial}
                title={<span className="text-[#68A5FF]">@33baid</span>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
