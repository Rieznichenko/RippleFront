import React from "react";

import temperature from "@/components/svg/wired-flat-819-hot-temperature.gif";
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
      <div className="text-center flex justify-center w-[90%] z-10 relative mx-auto ">
        <div className="py-[20rem] ">
          <div className=" flex flex-col gap-5">
            <h2 className="font-outfit text-6xl font-semibold text-white">
              Location
            </h2>
            <p className="font-lato text-2xl flex gap-2 justify-center items-end text-white">
              XRP Kuwait servers are located in Kuwait City where the
              temperature is <span className="text-[#FF4040]">52°</span> degrees{" "}
              <span className="-my-2 -mx-2">
                <img src={temperature.src} width={50} />
              </span>
            </p>
          </div>
          <div className="my-12 flex items-center flex-col gap-5">
            <div className=" rounded-2xl overflow-hidden  border w-[100%] border-[#a1a2a5] ">
              <div>
                <iframe
                  width="100%"
                  height="600"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
