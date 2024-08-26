import React, { useEffect, useMemo, useRef, useState } from "react";

import Link from "next/link";
import { formatNumber } from "@/lib/utils";
import socketIOClient from 'socket.io-client';

const useLastDayData = () => {
  const [ledgers, setLedgers] = useState([]);
  const column = useMemo(
    () => ["Ledger", "Σ(Tx)", "XRP Burned", "Time", "Hash"],
    []
  );
  useEffect(() => {
    const socket = socketIOClient("https://xrpkuwait.com/api/v1");
    socket.on("/ledger/latest", data => {
      let modifyData =
        data?.history?.length > 0 &&
        data?.history?.map((item: any, index: number) => {
          return {
            ledgerIndex: (
              <Link href={`/ledgers/${item.ledgerIndex}`}>
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

      if (modifyData) setLedgers(modifyData.reverse());
    });

    const intervalId = setInterval(() => {
      socket.emit('/ledger/latest')
    }, 1000);

    return () =>{
       clearInterval(intervalId);
       socket.disconnect();
      };
  }, []);

  return {
    ledgers,
    ledgerColumn: column,
  };
};



export { useLastDayData };
