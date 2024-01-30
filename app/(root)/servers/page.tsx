import React from "react";
import serverBg from "@/components/svg/servers_bg.svg";
import server from "@/components/svg/wired-lineal-58-servers.gif";
const Page = () => {
  return (
    <div
      className="bg-local"
      style={{
        backgroundImage: `url(${serverBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center flex justify-center w-[90%] z-10 relative mx-auto ">
        <div className="pt-[10rem] ">
          <div className=" flex flex-col gap-5">
            <h2 className="font-outfit text-6xl font-semibold text-white">
              Servers
            </h2>
          </div>
          <div className="my-12 flex items-start gap-5">
            <div className="rounded-3xl bg-opacity-60 my-10 p-10 text-left font-lato text-2xl text-white bg-gradient-to-r from-opacity-30 to-opacity-5 bg-[#45484E] backdrop-blur-40">
              <div className="flex items-center gap-10">
                <div className="bg-[#45484E]  p-1 rounded-full">
                  <img src={server.src} width={40} />
                </div>
                <h2 className="font-lato text-[24px] font-semibold">
                  We are running:
                </h2>
              </div>
              <p className="py-2 text-xl flex gap-5 flex-col">
                <span> - Validator node / Stock server / Public hub</span>

                <span>- One-year ledger history node</span>
              </p>
            </div>
            <div className="rounded-3xl bg-opacity-60 my-10 p-10 text-left font-lato text-2xl text-white bg-gradient-to-r from-opacity-30 to-opacity-5 bg-[#45484E] backdrop-blur-40">
              <div className="flex items-center gap-10">
                <div className="bg-[#45484E]  p-1 rounded-full">
                  <img src={server.src} width={40} />
                </div>
                <h2 className="font-lato text-[24px] font-semibold">
                  Our servers are running on:
                </h2>
              </div>
              <p className="py-2 text-xl flex gap-3 flex-col">
                <span className="text-[#43B2F0]">
                  {" "}
                  - * Validator node / Stock server / Public hub:
                </span>

                <span className="leading-10">
                  CPU = AMD Ryzen™ 9 (16-Cores, 32-Threads)
                  <br />
                  RAM = 128GB - DDR5 - 4800MHz
                  <br />
                  Storage = Samsung 990 PRO Series 2TB PCIe Gen4. X4 NVM
                </span>

                <span className="text-[#43B2F0]">
                  * One-year ledger history node:
                </span>

                <span className="leading-10">
                  CPU = AMD Ryzen™ 9 (16-Cores, 32-Threads)
                  <br />
                  RAM = 128GB - DDR5 - 4800MHz
                  <br />
                  Storage = Samsung 990 PRO Series 8TB PCIeGen4. X4 NVMe
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
