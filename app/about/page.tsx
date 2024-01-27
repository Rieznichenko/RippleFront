import React from "react";
import camelBg from "@/components/svg/camel.png";
import vetLogo from "@/components/svg/vet_logo.svg";
import rabitLogo from "@/components/svg/rabit_logo.svg";
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
      <img src={camelBg.src} className="absolute right-0 top-20 -z-0" />
      <div className="text-center flex w-[90%] z-10 relative mx-auto  ">
        <div className="py-[20rem] ">
          <div className=" flex flex-col gap-5">
            <h2 className="font-outfit text-6xl font-semibold text-white">
              About
            </h2>
            <p className="font-lato text-2xl text-white">
              XRP Kuwait is currently running 4 cluster rippled servers, running
              on a validator / ledger history / public hub / submission node
              along side 150+ other validators / 700+ ledger history nodes. All
              validators come to an agreement on orders and the outcome of XRP
              transactions every 3 seconds.
            </p>
            <p className="flex text-2xl text-center font-semibold justify-center text-white gap-2 items-center">
              Proudly inspired by
              <span className="text-[#68A5FF] gap-2 flex items-center  font-outfit">
                Vet <img src={vetLogo.src} />
              </span>
              <span className="text-[#68A5FF] gap-2 flex items-center  font-outfit ">
                Rabbit <img src={rabitLogo.src} />
              </span>
            </p>

            <p className="font-lato text-2xl text-white">
              Check .TOML File here -{" "}
              <span className="text-[#68A5FF]  font-outfit">
                https://xrptools.alloy.ee/checktoml?domain=xrpkuwait.com&display=html
              </span>
            </p>
          </div>
          <div className="my-12 flex items-center flex-col gap-5">
            <h2 className="font-outfit text-6xl font-semibold text-white">
              Links / Resources:
            </h2>

            <div className="rounded-xl bg-[#45484E] border w-[60%] border-[#a1a2a5] py-5 px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 my-5">
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRPLedger -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://xrpl.org/index.html
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRP Cafe NFT Market Place -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://xrp.cafe
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRPLedger Explorer -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://livenet.xrpl.org
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Zaphod pool status -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://zstats.alloy.ee
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRPScan -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://xrpscan.com
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRP toolkit -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://www.xrptoolkit.com
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Bithomp -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://bithomp.com
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  XRP ledger full history cluster -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://xrplcluster.com
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Xumm - XRP Wallet -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://xumm.app
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Three XRP -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://threexrp.dev
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  Rabbit Guide -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://rabbitkick.club
                  </span>
                </div>
                <div className="flex-1 font-lato text-xl text-left gap-2 text-white">
                  xSpectar -
                  <span className="text-[#68A5FF]  ml-2 underline gap-2">
                    https://xspectar.com
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
