import React from "react";
import bg from "@/components/svg/headingBg.png";
interface IconProps {
  title: string;
  icon?: any;
  number?: any;
}
const IconHeading = ({ title, icon, number }: IconProps) => {
  return (
    <div className="text-center flex justify-center items-center flex-col py-4">
      {icon && (
        <div
          className="text-center h-[80px] w-[90px] flex items-start pt-3 justify-center bg-no-repeat"
          // style={{ backgroundImage: `url(${bg.src})` }}
        >
          {icon}
        </div>
      )}
      <h2 className="text-white  text-4xl font-semibold  font-outfit">
        {title} {number}
      </h2>
    </div>
  );
};

export default IconHeading;
