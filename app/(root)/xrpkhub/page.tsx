"use client";

import Lottie from "lottie-react";
import React from "react";
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
    "Count",
    "Category",
    "Details",
    "Count",
  ];
  const hub_mockdata = [
    {
      ip: "37.34.188.207",
      type: "A",
      ttl: "600",
    },
    {
      ip: "37.34.241.36",
      type: "A",
      ttl: "600",
    },
    {
      ip: "70.69.204.25",
      type: "A",
      ttl: "600",
    },
    {
      ip: "78.89.203.220",
      type: "A",
      ttl: "600",
    },
  ];

  const statistics_mockdata = [
    {
      category_1: "Rippled Version",
      details_1: "Ripple",
      count_1: "30 Users",
      category_2: "Peers From",
      detail_2: "USA",
      count_2: 22,
    },
    {
      category: "",
      details: "Ripple",
      count: "30 Users",
      type: "Peers From",
      country: "USA",
      peer_count: 22,
    },
    {
      category: "",
      details: "Ripple",
      count: "30 Users",
      type: "Peers From",
      country: "USA",
      peer_count: 22,
    },
    {
      category: "",
      details: "Ripple",
      count: "30 Users",
      type: "Peers From",
      country: "USA",
      peer_count: 22,
    },
  ];
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
            <div className="flex pt-5 md:flex-row flex-col">
              <div className="md:w-1/2 sm:w-full flex flex-col">
                <IconHeading title={"XRPK Hubs"} />
                <div className="p-8 rounded-3xl flex-grow flex flex-col">
                  <div className="bg-black-300 text-white flex-grow flex flex-col">
                    <div className="text-left">
                      <b>XRPK HUBS</b>
                      <br />
                      <br />
                      The XRPK pool of servers is hosted at
                      &quot;hubs.xrpkuwat.com&quot;. These servers are
                      clustered, running the latest version of Rippled software,
                      and configured as Public Hubs.
                      <br />
                      <br />
                      <center>
                        <b>DNS REQUEST TIME:</b>&nbsp;&nbsp;
                        <span style={{ color: "white" }}>{timestamp}</span>
                      </center>
                    </div>
                    <div style={{ flex: 1, overflowY: "auto" }}>
                      <TableComponent data={hubData} column={hubs_column} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/12 sm:w-0"></div>
              <div className="md:w-1/2 sm:w-full flex flex-col">
                <IconHeading title={"XRPK Peer statistics"} />
                <div className="p-8 rounded-3xl flex-grow flex flex-col">
                  <div className="bg-black-300 text-white flex-grow flex flex-col">
                    <div className="text-left">
                      <b>XRPK Peer statistics</b>
                    </div>
                    <div style={{ flex: 1, overflowY: "auto" }}>
                      <TableComponent
                        data={statistics}
                        column={statistics_column}
                      />
                    </div>
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
