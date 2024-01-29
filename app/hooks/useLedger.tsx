import React, { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import { useParams } from "next/navigation";

const useLedgerData = () => {
  const params = useParams();
  console.log("🚀 ~ useLedgerData ~ params:", params);
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

  const getData = async () =>
    fetch("https://xrpkuwait.com/ledger/")
      .then((response) => response.json())
      .then((data: any) => {
        var total_fee = 0;
        data.transactions.transactions.sort(
          (a: any, b: any) => a.index - b.index
        );
        data.transactions.transactions.forEach((tx: any) => {
          total_fee += Number(tx.fee);
        });
        setTransactions(data.transactions.transactions);
        setLedger({
          close_time: data.transactions.close_time,
          burnedFees: total_fee.toFixed(6),
          transactionCount: data.transactions.transactions.length,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 1000); // 1000ms = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return {
    ledger,
    transactions,
    ledgerColumn: column,
  };
};

export default useLedgerData;
