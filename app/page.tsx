"use client";

import Image from "next/image";
import Lottie from "lottie-react"; // Import the Lottie component

import camelBg from "../public/assets/camelbg.jpg";
import { useEffect, useState } from "react";
import IconHeading from "@/components/IconHeading";
import TableComponent from "@/components/table";
import WifiGreen from "@/components/svg/wifiGreen.svg";
import WifiOflline from "@/components/svg/wifiOfline.svg";
import LatestValidatedLottie from "@/components/lottie/wired-lineal-1020-rules-book-guideline.json";
import LedgerCard from "@/components/ledgerCard";
import clusterTitleLottie from "@/components/lottie/wired-flat-1309-load-balancer_1.json";

import sirenLottie from "@/components/lottie/wired-lineal-2096-siren.json";

import ledgerIndexLottie from "@/components/svg/system-regular-76-newspaper.svg";
import ledgerIntervalLottie from "@/components/svg/system-regular-162-update.svg";
import closingTimeLottie from "@/components/svg/system-regular-67-clock.svg";
import TPSLottie from "@/components/svg/system-regular-33-speed.svg";
import TransactionLottie from "@/components/svg/system-regular-35-compare.svg";
import quorumLottie from "@/components/svg/system-regular-96-groups.svg";
import proposersLottie from "@/components/svg/system-regular-156-thumbs-up-down.svg";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "@/components/lottie/wired-flat-64-wifi-online.json";
import statisticsTitleLottie from "@/components/lottie/wired-flat-1307-hub-network.json";

export default function Home() {
  const column = [
    "Node",
    "Pubkey",
    "Ledge",
    "Index Uptime",
    "Version",
    "Peers",
    "Status",
  ];

  const data = [
    [
      "Node 1",
      "n94Lo4MBCNHWzDnLY9XuLdFrJPtWoiXYf6eZy8V2xmXLBgJsivAk",
      "85447351",
      "47894",
      "2.0.0",
      "2.0.0",
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
      <Lottie
        animationData={onlineAnimationData}
        loop={true}
        autoplay={true}
        style={{ width: 30, height: 30, margin: "0 auto" }}
      />,
    ],
  ];

  const validatedLedger = ["Ledger", "Σ(Tx)", "XRP Burned", "Time", "Hash"];

  const ledgerData = [
    [
      <span className="text-[#CDD004]">85448464</span>,
      "142",
      <span className="text-[#FF4A00]">-0.010099 XRP</span>,
      "1 seconds ago",
      "90C595A79B2F9A0DEABE519852A4AFC30790107CD7F6D51149A6EA03CE69315D",
    ],
    [
      <span className="text-[#CDD004]">85448464</span>,
      "142",
      <span className="text-[#FF4A00]">-0.010099 XRP</span>,
      "1 seconds ago",
      "90C595A79B2F9A0DEABE519852A4AFC30790107CD7F6D51149A6EA03CE69315D",
    ],
    [
      <span className="text-[#CDD004]">85448464</span>,
      "142",
      <span className="text-[#FF4A00]">-0.010099 XRP</span>,
      "1 seconds ago",
      "90C595A79B2F9A0DEABE519852A4AFC30790107CD7F6D51149A6EA03CE69315D",
    ],
    [
      <span className="text-[#CDD004]">85448464</span>,
      "142",
      <span className="text-[#FF4A00]">-0.010099 XRP</span>,
      "1 seconds ago",
      "90C595A79B2F9A0DEABE519852A4AFC30790107CD7F6D51149A6EA03CE69315D",
    ],
  ];

  const lastdayData = [
    [
      "14:31",
      <span className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
    [
      "14:31",
      <span className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
    [
      "14:31",
      <span className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
    [
      "14:31",
      <span className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
    [
      "14:31",
      <span className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
  ];

  return (
    <div>
      <div className="bg-[#1b1b1b] bg-blend-overlay h-screen  overflow-hidden relative">
        <img
          src={camelBg.src}
          alt="camel"
          className="object-contain bg-blend-overlay absolute -top-40"
        />
        <div className="h-full absolute z-10 w-[100%]  bg-black bg-opacity-80"></div>

        <div className="flex flex-col md:flex-row  absolute left-0 right-0 top-0 z-40 w-[90%] h-full  items-center mx-auto">
          {/* <div className="">
            <h4 className="text-[#FEC637] capitalize font-outfit text-[16px]">
              All The Way
            </h4>
            <h2 className="text-white font-semibold text-[50px] font-outfit">
              From a <span className="text-[#FF4040] ">52°</span> degree country
            </h2>
            <h3 className="text-white text-center font-outfit text-[25px]">
              To the <span className="text-[#5076F2] ">XRP</span> Ledger
            </h3>
            <h2 className="text-white  font-outfit text-[22px]">
              XRPL is a{" "}
              <span className="text-[#FEC637] ">
                Decentralized, Public Blockchain
              </span>
            </h2>
          </div> */}

          <div className="mt-32 md:mt-0">
            <h4 className="text-[#FEC637] capitalize font-outfit md:text-[16px]">
              All The Way
            </h4>
            <h2 className="text-white font-semibold text-4xl md:text-[50px] font-outfit">
              From a <span className="text-[#FF4040] ">52°</span> degree country
            </h2>

            <h3 className="text-white text-left md:text-center font-outfit  text-2xl sm:text-[25px]">
              To the <span className="text-[#5076F2] ">XRP</span> Ledger
            </h3>
            <h2 className="text-white text-2xl  font-outfit md:text-[22px]">
              XRPL is a{" "}
              <span className="text-[#FEC637] ">
                Decentralized, Public Blockchain
              </span>
            </h2>
          </div>

          <div className="flex-1 ">
            <div className="border rounded-2xl w-full md:w-[60%] float-end  bg-[#45484E]">
              <div className="flex gap-4 p-5 items-center">
                <img src="./assets/xlogo.png" className="w-[60px] h-[60px]" />
                <div className="text-[23px]">
                  <h3 className="text-[#CDD004] font-outfit">XRP (XRP)</h3>
                  <h3 className="text-white font-outfit">
                    0.539491 USD
                    <span className="text-[#FF4A00]">(-2.06%)</span>
                  </h3>
                </div>
              </div>

              <div className="flex font-lato border-y border-[#999DA3]">
                <div className="flex-1 text-[18px]">
                  <div className="text-white flex-1 py-4 text-center justify-center items-center">
                    <h4 className="uppercase my-2 ">Rank</h4>
                    <p>6</p>
                  </div>
                </div>

                <div className="border-x flex-1  border-[#999DA3]">
                  <div className="text-white text-[18px] flex-1 py-4 text-center justify-center items-center">
                    <h4 className="uppercase my-2">MARKET CAP</h4>
                    <p>$29.32 B USD</p>
                  </div>
                </div>
                <div className=" flex-1">
                  <div className="text-white text-[18px] py-4 text-center justify-center items-center">
                    <h4 className="uppercase my-2">VOLUME</h4>
                    <p>$618.13 M USD</p>
                  </div>
                </div>
              </div>

              <div className="py-4 text-center">
                <p className="text-[#CDD004] text-[10px] underline">
                  Powered by CoinMarketCap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="w-[90%] mx-auto">
          <IconHeading
            icon={
              <Lottie
                animationData={clusterTitleLottie}
                loop={true}
                autoplay={true}
                style={{ width: 60, height: 60, margin: "0 auto" }}
              />
            }
            title={"XRPK cluster status"}
          />

          <div className="my-5">
            <TableComponent data={data} column={column} />
          </div>

          <div className="my-10">
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

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-5 my-5">
              <div className="flex-1">
                <LedgerCard
                  text="143"
                  icon={ledgerIndexLottie}
                  title={"Ledger index"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text="00:00:00"
                  icon={closingTimeLottie}
                  title={"Close time"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard text="123" icon={TPSLottie} title={"TPS"} />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text="200"
                  icon={TransactionLottie}
                  title={"Transaction"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text="124"
                  icon={proposersLottie}
                  title={"Proposers"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard text="135" icon={quorumLottie} title={"Quorum"} />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text="135"
                  icon={quorumLottie}
                  title={"Accoounts"}
                />
              </div>
            </div>
          </div>

          <div className="my-10">
            <IconHeading
              icon={
                <Lottie
                  animationData={LatestValidatedLottie}
                  loop={true}
                  autoplay={true}
                  style={{ width: 60, height: 60, margin: "0 auto" }}
                />
              }
              title={"Latest validated ledgers"}
            />

            <TableComponent data={ledgerData} column={validatedLedger} />
          </div>

          <div className="my-10">
            <IconHeading
              icon={
                <Lottie
                  animationData={sirenLottie}
                  loop={true}
                  autoplay={true}
                  style={{ width: 60, height: 60, margin: "0 auto" }}
                />
              }
              title={"The most significant transactions for the last 24 hours"}
            />

            <TableComponent
              data={lastdayData}
              hideHeader={true}
              column={ledgerData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
