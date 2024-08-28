"use client";

import Lottie from "lottie-react";
import { useEffect, useMemo, useState } from "react";
import serverStateTitle from "@/components/lottie/wired-flat-952-business-network.json";

import temperature from "@/components/svg/wired-flat-819-hot-temperature.gif";
import IconHeading from "@/components/IconHeading";
import statisticsTitleLottie from "@/components/lottie/wired-flat-1307-hub-network.json";
import TableComponent from "@/components/table";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "@/components/lottie/wired-flat-64-wifi-online.json";
import useServerData from "@/app/hooks/useServerData";
import usePeerData from "@/app/hooks/usePeerData";
import useHubData from "@/app/hooks/useHubData"; // Import the custom hook
import "@/app/hubtable.css";

const Page = () => {
  const { servers } = useServerData();
  const { peers, peersColumn, statistics } = usePeerData();
  const { hubData, hubColumn, loading, error, timestamp } = useHubData(); // Use the custom hook
  // console.log("this is my hubData");
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
  const hubs_column = ["Domain", "IP Address(v4)", "Type", "TTL"];
  const statistics_column = [
    "Category",
    "Details",
    "Peers",
    "Category",
    "Details",
    "Peers",
  ];
  const convertHubData = (arr: any) => {
    const placeholder = { address: '-', domain: '-', ttl: '-', type: '-' };
    while (arr.length && arr.length < statistics.length) {
      arr.push(placeholder);
    }
    return arr;
  };

  return (
    <div className="pt-[10rem] custom-height">
      <div className="text-center flex justify-center w-[90%] z-10 relative mx-auto ">
        <div className="w-full">
          <div className=" flex flex-col">
            <IconHeading
              icon={
                <Lottie
                  animationData={serverStateTitle}
                  loop={true}
                  autoplay={true}
                  style={{ width: 60, height: 60, margin: "0 auto" }}
                />
              }
              title={"XRPK Node information"}
            />
            <div className="">
              <TableComponent data={servers} column={column} />
            </div>
            <div className="flex pt-5 pb-5 md:flex-row flex-col">
              <div className="md:w-1/2 sm:w-full flex flex-col">
                <IconHeading title={"XRPK Hubs"} />
                <center className="text-white">
                  <b>DNS REQUEST TIME:</b>&nbsp;&nbsp;
                  <span className="text-[#68A5FF]">{timestamp}</span>
                </center>
                <div className="rounded-3xl flex-grow flex flex-col">
                  <div className="flex-grow flex flex-col">
                    <TableComponent data={convertHubData(hubData)} column={hubs_column} />
                  </div>
                </div>
              </div>
              <div className="md:w-1/12 sm:w-0"></div>
              <div className="md:w-1/2 sm:w-full flex flex-col">
                <IconHeading title={"XRPK Peer statistics"} />
                <div className="mt-6 rounded-3xl flex-grow flex flex-col">
                  <div className="flex-grow flex flex-col">
                    <TableComponent
                      data={statistics}
                      column={statistics_column}
                    />
                  </div>
                </div>
              </div>
            </div>

            <IconHeading title={"XRPK Peer information"} />

            <div className="">
              <TableComponent data={peers} column={peersColumn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
