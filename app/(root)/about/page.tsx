import React from "react";
import camelBg from "@/components/svg/camel.png";
import vetLogo from "@/components/svg/vet_logo.svg";
import rabitLogo from "@/components/svg/rabit_logo.svg";
import gradientBg from "@/components/svg/linearGradient.svg";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div
      className=""
      // style={{
      //   backgroundImage: `url(${gradientBg.src})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPositionX: "center",
      //   backgroundPositionY: "top",
      // }}
    >
      <img
        src={camelBg.src}
        className="absolute h-screen right-0 top-20 -z-0"
      />
      <div className="text-center flex w-[80%] sm:w-[90%] z-10 relative mx-auto  ">
        <div className="pt-[10rem] ">
          <div className=" flex flex-col gap-5">
            <h2 className="font-outfit text-6xl font-semibold text-white">
              About
            </h2>
            <p className="font-lato text-xl sm:text-2xl text-white">
              XRP Kuwait is currently running 4 cluster rippled servers, running
              on a validator / ledger history / public hub / submission node
              along side 150+ other validators / 700+ ledger history nodes. All
              validators come to an agreement on orders and the outcome of XRP
              transactions every 3 seconds.
            </p>
            {/* <p className="flex text-2xl text-center font-semibold justify-center text-white gap-2 items-center">
              Proudly inspired by
              <span className="text-[#68A5FF] gap-2 flex items-center  font-outfit">
                <Link
                  href="https://twitter.com/vet_x0?s=21&t=ILDaEwSewvUv0gqG-RqAtA"
                  target="_blank"
                >
                  Vet
                  <Image height={40} width={40} src={vetLogo.src} alt="Vet" />
                </Link>
              </span>
              <span className="text-[#68A5FF] gap-2 flex items-center  font-outfit ">
                <Link
                  href="https://twitter.com/xrpl_rabbit?s=21&t=ILDaEwSewvUv0gqG-RqAtA"
                  target="_blank"
                >
                  Rabbit{" "}
                  <Image src={rabitLogo.src} height={40} width={40} alt="Vet" />
                </Link>
              </span>
            </p> */}

            <p className="font-lato text-2xl text-white">
              Check .TOML File here -{" "}
              <span className="text-[#68A5FF]  font-outfit">
                <Link
                  href={
                    "https://xrptools.alloy.ee/checktoml?domain=xrpkuwait.com&display=html"
                  }
                  target="_blank"
                >
                  https://xrptools.alloy.ee/checktoml?domain=xrpkuwait.com&display=html
                </Link>
              </span>
            </p>
          </div>
          <div className="my-12 flex items-center flex-col gap-5">
            <h2 className="font-outfit text-6xl font-semibold text-white">
              Links / Resources:
            </h2>

            <div className="rounded-xl bg-[#45484E] border w-[80%] border-[#a1a2a5] py-5 px-5">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3 my-5">
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRPLedger -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://xrpl.org/index.html"}>
                      https://xrpl.org/index.html
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRP Cafe NFT Market Place -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://xrp.cafe"}>
                      {" "}
                      https://xrp.cafe
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRPLedger Explorer -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://livenet.xrpl.org"}>
                      {" "}
                      https://livenet.xrpl.org
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Zaphod pool status -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://zstats.alloy.ee"}>
                      {" "}
                      https://zstats.alloy.ee
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRPScan -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://xrpscan.com"}>
                      {" "}
                      https://xrpscan.com
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRP toolkit -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://www.xrptoolkit.com"}>
                      https://www.xrptoolkit.com
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Bithomp -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://bithomp.com"}>
                      https://bithomp.com
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRP ledger full history cluster -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://xrplcluster.com"}>
                      https://xrplcluster.com
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Xumm - XRP Wallet -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://xumm.app"}>
                      https://xumm.app
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Three XRP -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://threexrp.dev"}>
                      https://threexrp.dev
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Rabbit Guide -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://rabbitkick.club"}>
                      https://rabbitkick.club
                    </Link>
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  xSpectar -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    <Link target="_blank" href={"https://xspectar.com"}>
                      https://xspectar.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
