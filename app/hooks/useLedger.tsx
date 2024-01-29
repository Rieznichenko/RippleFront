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
            console.log("🚀 ~ renderObj ~ item:", item);
            return {
              key: <div className=" text-left">{index + 1}</div>,
              txHash: (
                <div className="truncate text-ellipsis w-20">{item?.hash}</div>
              ),
              from: (
                <div className="truncate text-ellipsis w-20">{item?.from}</div>
              ),
              to: <div className="truncate text-ellipsis w-20">{item?.to}</div>,
              amount: <div className=" text-left">{item?.amount}</div>,
              fee: <div className=" text-left">{item?.fee}</div>,
              result:
                item?.result?.slice(3) === "SUCCESS" ? (
                  <div className="bg-[#32E685] font-semibold text-[#0D793F] border border-[#0D793F] rounded-full px-5 py-2">
                    {item?.result?.slice(3)}
                  </div>
                ) : (
                  <div className="bg-[#D9534F] font-semibold text-[#771815] border border-[#771815] rounded-full px-5 py-2">
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
    ledgerColumn: column,
  };
};

export default useLedgerData;
