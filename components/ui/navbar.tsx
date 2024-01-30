"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();

  const isActive = (href: any) => {
    return pathName === href ? "text-[#FEC637]" : "";
  };

  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Servers", path: "/servers" },
    { title: "location", path: "/location" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Xrpkhub", path: "/xrpkhub" },
  ];
  return (
    // <nav className="flex justify-center">
    //   <ul className="flex space-x-4 text-white">
    //     <li className={isActive("/servers")}>
    //       <Link href="/servers">Servers</Link>
    //     </li>
    //     <li className={isActive("/location")}>
    //       <Link href="/location">Location</Link>
    //     </li>
    //     <li className={isActive("/about")}>
    //       <Link href="/about">About</Link>
    //     </li>
    //     <li className={isActive("/contact")}>
    //       <Link href="/contact">Contact</Link>
    //     </li>
    //     <li className={isActive("/xrpkhub")}>
    //       <Link href="/xrpkhub">XRPK Hub</Link>
    //     </li>
    //   </ul>
    // </nav>

    <nav className=" w-full  md:border-0">
      <div className="sm:items-center flex-1 flex-col flex md:flex-row  md:flex">
        <div className=" flex-1 flex  items-center py-3 md:py-5 md:block">
          <Link href="/homepage">
            <div className="logo flex items-center">
              <Image
                src="/assets/logo.gif"
                className="w-20"
                width={100}
                height={100}
                alt="logo"
              />
              <h3 className="font-bold text-4xl font-outfit text-white flex gap-1">
                XRP<span className="text-[#CDD004]">Kuwait</span>
              </h3>
            </div>
          </Link>
          <div className="md:hidden flex-1 text-right justify-end">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`md:flex-1 bg-[#061929] p-5 rounded-3xl sm:bg-transparent justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-white hover:text-[#FEC637]">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
