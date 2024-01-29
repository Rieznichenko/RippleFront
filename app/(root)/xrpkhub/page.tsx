"use client";

import Lottie from "lottie-react";
import React from "react";
import gradientBg from "@/components/svg/linearGradient.svg";

import temperature from "@/components/svg/wired-flat-819-hot-temperature.gif";
import IconHeading from "@/components/IconHeading";
import statisticsTitleLottie from "@/components/lottie/wired-flat-1307-hub-network.json";
import TableComponent from "@/components/table";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "@/components/lottie/wired-flat-64-wifi-online.json";
import useServerData from "@/app/hooks/useServerData";
import usePeerData from "@/app/hooks/usePeerData";
const Page = () => {
  const { servers } = useServerData();
  const { peers, peersColumn } = usePeerData();
  const column = [
    "Node",
    "Pubkey",
    "Ledger Index",
    "Uptime",
    "Proposers",
    "Quorum",
    "Version",
    "Peers",
    "Status",
  ];
  const column2 = [
    "Public Key",
    "Country",
    "version",
    "Server State",
    "Direction",
    "Latency",
    "Ledgers",
  ];

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
      <div className="text-center flex justify-center w-[90%] z-10 relative mx-auto ">
        <div className="py-[10rem] ">
          <div className=" flex flex-col gap-5">
            <IconHeading
              icon={
                <Lottie
                  animationData={statisticsTitleLottie}
                  loop={true}
                  autoplay={true}
                  style={{ width: 60, height: 60, margin: "0 auto" }}
                />
              }
              title={"XRPK Node information"}
            />
            <div className="my-5">
              <TableComponent data={servers} column={column} />
            </div>
            <IconHeading title={"XRPK Peer information"} />

            <div className="my-5">
              <TableComponent data={peers} column={peersColumn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
