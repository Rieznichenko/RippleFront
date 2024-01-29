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
import { DataTable } from "@/components/dataTable";
const Page = () => {
  const { ledgerColumn, ledger, transactions } = useLedgerData();
  console.log("🚀 ~ Page ~ ledger:", ledger);
  console.log("🚀 ~ Page ~ transactions:", transactions);

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
              number={
                <span className="text-[#68A5FF]">
                  {ledger.transactionCount}
                </span>
              }
              title={"Transactions in ledger "}
            />
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 my-5 w-[80%] mx-auto">
              <div className="flex-1">
                <LedgerCard
                  text={
                    <span className="text-[#E8392F]">{ledger.burnedFees}</span>
                  }
                  icon={burningIcon}
                  title={"XRP Burned"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={ledger.close_time}
                  icon={closingTimeLottie}
                  title={"Closed on"}
                />
              </div>
              <div className="flex-1">
                <LedgerCard
                  text={ledger.transactionCount}
                  icon={TransactionLottie}
                  title={"Total transactions"}
                />
              </div>
            </div>
            <div className="my-5">
              <TableComponent data={transactions} column={ledgerColumn} />
              <DataTable
                columns={[
                  {
                    accessorKey: "index",
                    header: "Index",
                  },
                  {
                    accessorKey: "txhash",
                    header: "Tx Hash",
                  },
                  {
                    accessorKey: "from",
                    header: "From",
                  },
                  {
                    accessorKey: "to",
                    header: "to",
                  },
                  {
                    accessorKey: "amount",
                    header: "Amount",
                  },
                  {
                    accessorKey: "fee",
                    header: "Fee",
                  },
                  {
                    accessorKey: "result",
                    header: "Result",
                  },
                ]}
                data={transactions}
                key={"Data"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
