import React from "react";
import gradientBg from "@/components/svg/linearGradient.svg";

import temperature from "@/components/svg/wired-flat-819-hot-temperature.gif";
const Page = () => {
  return (
    <div
      className=""
      //  style={{
      //   backgroundImage: `url(${gradientBg.src})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPositionX: "center",
      //   backgroundPositionY: "top",
      // }}
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
                  height="450"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560823.5751655257!2d47.795471715108356!3d29.403074395666597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1687761439665!5m2!1sen!2sin"
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
