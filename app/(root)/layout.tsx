"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import gradientBg from "@/components/svg/linearGradient.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import serverBg from "@/components/svg/servers_bg.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;

  const renderBG = () => {
    console.log(pathName);
    if (pathName === "/homepage" || pathName === "/xrpkhub" || pathName.startsWith("/ledgers") || pathName === "/disclaimer") {
      return `none`;
    } else {
      return `url(${gradientBg.src})`;
      // Handle other paths or provide a default background
    }
  };
  return (
    <div
      className="h-full 1xl:h-screen  bg-[#1B1B1B] bg-scroll"
      style={{
        backgroundImage: renderBG(),
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "top",
        backgroundSize: "cover",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
