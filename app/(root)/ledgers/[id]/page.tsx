"use client";

import Lottie from "lottie-react";
import React from "react";
import gradientBg from "@/components/svg/linearGradient.svg";
import LatestValidatedLottie from "@/components/lottie/wired-lineal-1020-rules-book-guideline.json";
import ErrorLottie from "@/components/lottie/wired-leaneal-25-error.json";
import burningIcon from "@/components/svg/fire-2-64.png";
import IconHeading from "@/components/IconHeading";
import TableComponent from "@/components/table";
import LedgerCard from "@/components/ledgerCard";
import closingTimeLottie from "@/components/svg/system-regular-67-clock.svg";
import TransactionLottie from "@/components/svg/system-regular-35-compare.svg";
import useLedgerData from "@/app/hooks/useLedger";
import { DataTable } from "@/components/dataTable";
import { updateTimezone, updateTimezone2 } from "@/lib/utils";
const Page = () => {
  const { ledgerColumn, ledgerNumber, ledger, transactions } = useLedgerData();

  return (
    <div
      className="custom-height"
    >
      <div className="text-center flex-col flex justify-center w-[90%] z-10 relative mx-auto ">
        <div className="pt-[10rem] ">
          <div className=" flex flex-col">
            {ledger.transactionCount === "-" ? (
              <IconHeading
                icon={
                  <Lottie
                    animationData={ErrorLottie}
                    loop={true}
                    autoplay={true}
                    style={{ width: 60, height: 60, margin: "0 auto" }}
                  />
                }
                number={<span className="text-[#68A5FF]"></span>}
                title={"No transaction data found"}
              />
            ) : (
              <IconHeading
                icon={
                  <Lottie
                    animationData={LatestValidatedLottie}
                    loop={true}
                    autoplay={true}
                    style={{ width: 60, height: 60, margin: "0 auto" }}
                  />
                }
                number={<span className="text-[#68A5FF]">{ledgerNumber}</span>}
                title={"Transactions in ledger "}
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-[80%] mx-auto">
              <div className="flex-1">
                <LedgerCard
                  text={
                    <span className="text-[#E8392F]">
                      {ledger.burnedFees === "-"
                        ? "-"
                        : ledger.burnedFees + " XRP"}
                    </span>
                  }
                  icon={burningIcon}
                  title={"XRP Burned"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={
                    ledger.close_time === "-"
                      ? "-"
                      : updateTimezone2(ledger.close_time)
                  }
                  icon={closingTimeLottie}
                  title={"Closed on"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={
                    ledger.transactionCount === "-"
                      ? "-"
                      : ledger.transactionCount
                  }
                  icon={TransactionLottie}
                  title={"Total transactions"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 w-full h-52 relative overflow-auto flex-1">
          <TableComponent data={transactions} column={ledgerColumn} />
        </div>
      </div>
    </div>
  );
};

export default Page;
