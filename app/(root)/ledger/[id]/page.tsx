"use client";

import Lottie from "lottie-react";
import React from "react";
import gradientBg from "@/components/svg/linearGradient.svg";
import LatestValidatedLottie from "@/components/lottie/wired-lineal-1020-rules-book-guideline.json";
import burningIcon from "@/components/svg/fire-2-64.png";
import IconHeading from "@/components/IconHeading";
import TableComponent from "@/components/table";
import LedgerCard from "@/components/ledgerCard";
import closingTimeLottie from "@/components/svg/system-regular-67-clock.svg";
import TransactionLottie from "@/components/svg/system-regular-35-compare.svg";
import useLedgerData from "@/app/hooks/useLedger";
const Page = () => {
  const { ledgerColumn, ledger, transactions } = useLedgerData();

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
      <div className="text-center flex justify-center w-[80%] z-10 relative mx-auto ">
        <div className="py-[10rem] ">
          <div className=" flex flex-col gap-5">
            <IconHeading
              icon={
                <Lottie
                  animationData={LatestValidatedLottie}
                  loop={true}
                  autoplay={true}
                  style={{ width: 60, height: 60, margin: "0 auto" }}
                />
              }
              number={<span className="text-[#68A5FF]">85487047</span>}
              title={"Transactions in ledger "}
            />
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-5 w-[80%] mx-auto">
              <div className="flex-1">
                <LedgerCard
                  text={<span className="text-[#E8392F]">0.036635 XRP</span>}
                  icon={burningIcon}
                  title={"XRP Burned"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text="1/24/2024 10:39:22 AM"
                  icon={closingTimeLottie}
                  title={"Closed on"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text="139"
                  icon={TransactionLottie}
                  title={"Total transactions"}
                />
              </div>
            </div>
            <div className="my-5">
              <TableComponent data={ledger} column={ledgerColumn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
