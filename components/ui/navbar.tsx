"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();

  const isActive = (href: any) => {
    let color = href === "/xrpkhub" ? "text-[#FEC637]" : "text-[#FEC637]";
    return pathName === href ? color : "";
  };

  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Servers", path: "/servers" },
    { title: "Location", path: "/location" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "XRPK Hubs", path: "/xrpkhub" },
  ];
  return (
    <nav className=" w-full  md:border-0">
      <div className="md:items-center flex-1 flex-col flex md:flex-row  md:flex">
        <div className=" flex-1 flex justify-center items-center py-3 md:py-5 md:block">
        <div className="flex">
          <Link href="/homepage">
            <div className="logo flex items-center">
              <Image
                src="/assets/logo.gif"
                className="w-14 sm:w-20 -mt-2"
                width={100}
                height={100}
                alt="logo"
              />
              <h3 className="font-bold text-3xl sm:text-5xl font-outfit text-white flex gap-1">
                XRP<span className="text-[#CDD004]">Kuwait</span>
              </h3>
            </div>
          </Link>
        </div>
          <div className="md:hidden flex-1 text-right justify-end pr-2">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 bg-[#061929] pt-0 p-5 rounded-3xl md:bg-transparent justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-3 pt-3 md:pt-6 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className={`text-white hover:text-[#FEC637]`} onClick={()=>setState(!state  )}>
                <Link className={`${isActive(item.path)}`} href={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
