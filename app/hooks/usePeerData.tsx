import React, { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";

const usePeerData = () => {
  const column = useMemo(
    () => [
      "Public Key",
      "Country",
      "Version",
      "Server State",
      "Direction",
      "Latency",
      "Ledgers",
    ],
    []
  );

  const fakeObject = [1, 2, 3, 4].map((item: any, index: number) => {
    let obj = {
      node: `Node ${index + 1}`,
      pubkey: "-",
      ledger: "-",
      uptime: "-",
      version: "-",
      peers: "-",

      status: (
        <Lottie
          animationData={offlineAnimationData}
          loop={true}
          autoplay={true}
          style={{ width: 30, height: 30, margin: "0 auto" }}
        />
      ),
    };

    return obj;
  });

  const [peers, setPeers] = useState(fakeObject);

  const getData = async () =>
    fetch("https://xrpkuwait.com/peerinfo")
      .then((response) => response.json())
      .then((data: any) => {
        console.log("SERVER", data);
        let modifyData: any = [];
        setPeers(data);
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
    peers,
    peersColumn: column,
  };
};

export default usePeerData;
