import Image from "next/image";
import React from "react";
import WifiOflline from "./svg/proposers.svg";
import Lottie from "lottie-react";
interface ILedgerCardProps {
  icon?: any;
  title: string;
  text: string;
}
const LedgerCard = ({ icon, text, title }: ILedgerCardProps) => {
  return (
    <div className="rounded-2xl py-10 bg-[#303134]">
      <div className="flex justify-center flex-col items-center ">
        <div className="rounded-full bg-[#3f4043] p-8 my-5">
          <div className="rounded-full p-4 bg-[#f0b90b]">
            <Image
              className="mx-auto"
              src={icon}
              alt={title}
              style={{ width: 35, height: 35, margin: "0 auto" }}
            />
          </div>
        </div>
        <h3 className="text-white text-[20px]">{title}</h3>
        <p className="text-[#F0B90B] text-[16px]">{text}</p>
      </div>
    </div>
  );
};

export default LedgerCard;