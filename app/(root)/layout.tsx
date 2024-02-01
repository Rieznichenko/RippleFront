"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import gradientBg from "@/components/svg/linearGradient.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  return (
    <div
      className="h-full 2xl:h-screen  bg-[#1B1B1B] bg-scroll"
      style={{
        backgroundImage:
          pathName !== "/homepage" ? `url(${gradientBg.src})` : "none",
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
