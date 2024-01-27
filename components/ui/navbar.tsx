"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathName = usePathname();
  console.log("🚀 ~ Navbar ~ pathName:", pathName);

  const isActive = (href: any) => {
    return pathName === href ? "text-[#FEC637]" : "";
  };
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4 text-white">
        <li className={isActive("/")}>
          <Link href="/">Servers</Link>
        </li>
        <li className={isActive("/location")}>
          <Link href="/location">Location</Link>
        </li>
        <li className={isActive("/about")}>
          <Link href="/about">About</Link>
        </li>
        <li className={isActive("/contact")}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={isActive("/xrpk-hub")}>
          <Link href="/xrpk-hub">XRPK Hub</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
