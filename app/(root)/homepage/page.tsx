"use client";

import Image from "next/image";
import Lottie from "lottie-react"; // Import the Lottie component
import Typed from "react-typed";
import ok from "@/components/svg/wired-flat-14-doc-ok.gif";
import camelBg from "@/public/assets/camelbg.jpg";
import { useEffect, useState, useMemo } from "react";
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
import accounts from "@/components/svg/accounts.svg";
import proposersLottie from "@/components/svg/system-regular-156-thumbs-up-down.svg";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "@/components/lottie/wired-flat-64-wifi-online.json";
import statisticsTitleLottie from "@/components/lottie/wired-flat-1307-hub-network.json";

import useServerData from "@/app/hooks/useServerData";
import { updateTimezone } from "@/lib/utils";
import { useLastDayData } from "@/app/hooks/useLastDayData";
import useExternalScript from "@/app/hooks/useExternalScript";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [changeText, setChangeText] = useState(false);
  const external = useExternalScript();
  const { servers, statistics, serverDataColumn } = useServerData();
  const { ledgers, ledgerColumn } = useLastDayData();

  /*
  const ledgerColumn2 = useMemo(
    () => [
      "Time",
      "Hash",
      "Amount in XRP",
      "Amount in USD"
    ],
    []
  );
  
  //@ts-ignore
  const lastdayData = [
    [
      "14:31",
      <span key={1} className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
    [
      "14:31",
      <span key={3} className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
    [
      "14:31",
      <span key={5} className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
    [
      "14:31",
      <span key={7} className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
    [
      "14:31",
      <span key={8} className="text-[#CDD004]">
        37d8ca3d1e8d90dde5180d121a000df05bde72889969088df90767b2bf7eef80
      </span>,
      "223.1M XRP",
      "US$114.5M",
    ],
  ];
*/
  return (
    <div>
      <div
        className="bg-[#000000bb] flex items-end justify-center h-screen bg-blend-soft-light  overflow-hidden relative bg-cover bg-no-repeat  md:bg-top bg-center bg-camel"
        style={{
          backgroundImage: `url(${camelBg.src})`,
        }}
      >
        <div className="flex-col w-[90%]">
          {/* <img
          src={camelBg.src}
          alt="camel"
          className="object-contain hidden md:block bg-blend-overlay absolute -top-40"
        /> */}

          {/* <div className="h-full absolute top-0  z-10 w-[100%]  bg-black  opacity-80"></div> */}
          <div className="flex w-[90%] items-center justify-center sm:flex-row flex-col pb-20">
            <div className=" flex-1 ">
              <h4 className="text-white font-thin text-[20px] md:mx-24 sm:my-0 mx-12 sm:text-[16px]  font-outfit md:text-[34px] leading-[50px] sm:leading-[35px]">
                All the way
              </h4>
              <h2 className="text-white sm:my-0 font-semibold text-4xl  md:text-[50px] font-outfit leading-[40px] sm:leading-[60px]">
                From a <span className="text-[#FF4040] ">52°</span> degree
                country
              </h2>

              <h3 className="text-white font-thin  my-3 sm:my-0 text-center font-outfit sm:text-[16px]   md:text-4xl text-[20px]">
                To the <span className="text-[#5076F2] font-bold">XRP</span>{" "}
                Ledger
              </h3>

              {/* <h2 className="text-white text-left sm:flex gap-2 items-center  sm:text-[16px]  h-16 md:text-4xl sm:text-center md:text-left font-outfit text-[18px]">
              XRPL is {changeText ? "FAST" : "a"}
              <span className="text-[#FEC637]  flex items-center capitalize ">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Decentralized, Public blockchain")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("community powered utility")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("scalable and sustainable blockchain")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("greener blockchain")
                      .pauseFor(2500)
                      .deleteAll()
                      .callFunction(() => {
                        setChangeText(true);
                      })

                      .typeString("5")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("4")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("3")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("2")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("1")
                      .pauseFor(1000)
                      .deleteAll()

                      .typeString(
                        `<div class="h-16 flex justify-center items-end sm:mt-7 -ml-1"><img class="h-16" src="${ok.src}" /></div>`
                      )
                      .pauseFor(4500)
                      .deleteAll()
                      .callFunction(() => {
                        setChangeText(false);
                      })

                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    deleteSpeed: 20,
                    delay: 50,
                  }}
                />
              </span>
            </h2> */}
            </div>

            <div className="sm:flex-[0.7] flex-1 mt-20 landscape:mt-0   text-white home-widget">
              {/* <div className="border rounded-2xl w-full md:w-[90%] float-end  bg-[#45484E]">
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
            </div> */}

              <div
                className="coinmarketcap-currency-widget"
                data-currencyid="52"
                data-base="USD"
                data-secondary=""
                data-ticker="true"
                data-rank="true"
                data-marketcap="true"
                data-volume="true"
                data-statsticker="true"
                data-stats="USD"
              ></div>
            </div>
          </div>
          <div className="flex justify-end" style={{width:"100%", height:"400px"}}>
            <a
              className="twitter-timeline"
              data-theme="dark"
              href="https://twitter.com/XRPKuwait?ref_src=twsrc%5Etfw"
            >
              Tweets by XRPKuwait
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
            ></script>
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
          <div className="">
            <TableComponent data={servers} column={serverDataColumn} />
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

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
              <div className="flex-1">
                <LedgerCard
                  text={statistics?.ledgerIndex || "-"}
                  icon={ledgerIndexLottie}
                  title={"Ledger index"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={
                    statistics.closeTime
                      ? updateTimezone(statistics.closeTime)
                      : "-"
                  }
                  icon={closingTimeLottie}
                  title={"Close time"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={statistics.TPS ? `${statistics.TPS}/s` : "-"}
                  icon={TPSLottie}
                  title={"TPS"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={statistics.txCount ? `${statistics.txCount}` : "-"}
                  icon={TransactionLottie}
                  title={"Transactions"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={statistics.proposers ? `${statistics.proposers}` : "-"}
                  icon={proposersLottie}
                  title={"Proposers"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={statistics.quorum ? `${statistics.quorum}` : "-"}
                  icon={quorumLottie}
                  title={"Quorum"}
                />
              </div>
              {/*
              <div className="flex-1">
                <LedgerCard text={statistics.accounts ? `${statistics.accounts}` : "-"} icon={accounts} title={"Accounts"} />
              </div>
*/}
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

            <TableComponent data={ledgers} column={ledgerColumn} />
          </div>
          {/* 
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
              title={"Top transactions"}
            />
            <div className="rounded-3xl overflow-hidden">
              <TableComponent
                data={lastdayData}
                column={ledgerColumn2}
              />
            </div>
          </div>
*/}
        </div>
      </div>
    </div>
  );
}
