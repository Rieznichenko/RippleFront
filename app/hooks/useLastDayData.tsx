import React, { useEffect, useMemo, useState } from "react";

import Link from "next/link";

const useLastDayData = () => {
  const [ledgers, setLedgers] = useState([]);
  const column = useMemo(
    () => ["Ledger", "Σ(Tx)", "XRP Burned", "Time", "Hash"],
    []
  );
  const getData = async () =>
    fetch("https://xrpkuwait.com/ledgerhistory")
      .then((response) => response.json())
      .then((data) => {
        let modifyData =
          data?.history?.length > 0 &&
          data?.history?.map((item: any, index: number) => {
            return {
              ledgerIndex: (
                <Link href={`/ledger/${item.ledgerIndex}`}>
                  <span className="text-[#CDD004]">{item.ledgerIndex}</span>
                </Link>
              ),
              transactionCount: item.transactionCount,
              burnedFees: (
                <span className="text-[#FF4A00]">
                  -{item.burnedFees.toFixed(6)} XRP
                </span>
              ),
              close_time: <span>{item.close_time} seconds ago</span>,
              hash: item.hash,
            };
          });

        setLedgers(modifyData.reverse());
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return {
    ledgers,
    ledgerColumn: column,
  };
};

export default useLastDayData;
