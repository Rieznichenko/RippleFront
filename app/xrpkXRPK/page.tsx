"use client";

import Lottie from "lottie-react";
import React from "react";

import temperature from "@/components/svg/wired-flat-819-hot-temperature.gif";
import IconHeading from "@/components/IconHeading";
import statisticsTitleLottie from "@/components/lottie/wired-flat-1307-hub-network.json";
import TableComponent from "@/components/table";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "@/components/lottie/wired-flat-64-wifi-online.json";
const Page = () => {
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

  const data = [
    [
      "Node 1",
      "n94Lo4MBCNHWzDnLY9XuLdFrJPtWoiXYf6eZy8V2xmXLBgJsivAk",
      "85447351",
      "47894",
      "2.0.0",
      "2.0.0",
      "-",
      "-",
      <Lottie
        animationData={offlineAnimationData}
        loop={true}
        autoplay={true}
        style={{ width: 30, height: 30, margin: "0 auto" }}
      />,
    ],
    [
      "Node 1",
      "n94Lo4MBCNHWzDnLY9XuLdFrJPtWoiXYf6eZy8V2xmXLBgJsivAk",
      "85447351",
      "47894222222222",
      "2.0.0",
      "2.0.0",
      "-",
      "-",
      <Lottie
        animationData={onlineAnimationData}
        loop={true}
        autoplay={true}
        style={{ width: 30, height: 30, margin: "0 auto" }}
      />,
    ],
    [
      "Node 1",
      "n94Lo4MBCNHWzDnLY9XuLdFrJPtWoiXYf6eZy8V2xmXLBgJsivAk",
      "85447351",
      "47894",
      "2.0.0",
      "2.0.0",
      "-",
      "-",
      <Lottie
        animationData={offlineAnimationData}
        loop={true}
        autoplay={true}
        style={{ width: 30, height: 30, margin: "0 auto" }}
      />,
    ],
    [
      "Node 1",
      "n94Lo4MBCNHWzDnLY9XuLdFrJPtWoiXYf6eZy8V2xmXLBgJsivAk",
      "85447351",
      "47894",
      "2.0.0",
      "2.0.0",
      "-",
      "-",
      <Lottie
        animationData={onlineAnimationData}
        loop={true}
        autoplay={true}
        style={{ width: 30, height: 30, margin: "0 auto" }}
      />,
    ],
  ];
  return (
    <div className="">
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
              title={"XRPL live statistics"}
            />
            <div className="my-5">
              <TableComponent data={data} column={column} />
            </div>
            <IconHeading title={"XRPK Peer information"} />

            <div className="my-5">
              <TableComponent data={[]} column={column2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
