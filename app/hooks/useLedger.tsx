import React, { useCallback, useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import { useParams } from "next/navigation";

const useLedgerData = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [ledger, setLedger] = useState({
    close_time: "-",
    burnedFees: "-",
    transactionCount: "-",
  });

  const column = useMemo(
    () => ["Index", "Tx hash", "From", "To", "Amount", "Fee", "Result"],
    []
  );
  const getData = useCallback(async () => {
    fetch(`https://xrpkuwait.com/ledger/${id}`)
      .then((response) => response.json())
      .then((data: any) => {
        var total_fee = 0;
        data.transactions.transactions.sort(
          (a: any, b: any) => a.index - b.index
        );
        data.transactions.transactions.forEach((tx: any) => {
          total_fee += Number(tx.fee);
        });

        let renderObj = data.transactions.transactions?.map(
          (item: any, index: any) => {
            let textColor =
              item?.result?.slice(3) === "SUCCESS"
                ? "text-white"
                : "text-[#e3e461]";
            return {
              key: (
                <div className={`text-center ${textColor}`}>{index + 1}</div>
              ),
              txHash: (
                <div
                  className={`text-center ${textColor} flex justify-center `}
                >
                  <div className="text-ellipsis truncate w-32">
                    {item?.hash}
                  </div>
                </div>
              ),
              from: (
                <div
                  className={`text-nowrap text-center ${textColor} flex gap-5 items-center justify-evenly`}
                >
                  <div className="text-ellipsis truncate w-72">
                    {item?.from}
                  </div>
                  <span className="px-5  mx-2 py-3 bg-[#004085] rounded-full text-white">
                    {item?.type}
                  </span>
                </div>
              ),
              to: (
                <div
                  className={`truncate ${textColor} text-center  text-ellipsis w-20`}
                >
                  {item?.to}
                </div>
              ),
              amount: (
                <div className={`${textColor} text-center`}>{item?.amount}</div>
              ),
              fee: (
                <div className={`${textColor} text-center`}>{item?.fee}</div>
              ),
              result:
                item?.result?.slice(3) === "SUCCESS" ? (
                  <div className="bg-[#32E685] inline-block font-semibold text-[#0D793F] border border-[#0D793F] rounded-full px-5 py-2">
                    {item?.result?.slice(3)}
                  </div>
                ) : (
                  <div
                    className={`bg-[#D9534F]  inline-block font-semibold text-[#771815] border border-[#771815] rounded-full px-5 py-2`}
                  >
                    {item?.result?.slice(3)}
                  </div>
                ),
            };
          }
        );
        setTransactions(renderObj);
        setLedger({
          close_time: data.transactions.close_time,
          burnedFees: total_fee.toFixed(6),
          transactionCount: data.transactions.transactions.length,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData, id]);

  return {
    ledger,
    transactions,
    ledgerNumber: id,
    ledgerColumn: column,
  };
};

export default useLedgerData;
