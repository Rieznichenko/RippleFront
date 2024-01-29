import React, { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react"; // Import the Lottie component

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "@/components/lottie/wired-flat-64-wifi-online.json";
import { usePathname } from "next/navigation";

const useServerData = () => {
  const pathName = usePathname();
  const column = useMemo(
    () => [
      "Node",
      "Pubkey",
      "Ledge Index",
      "Uptime",
      "Version",
      "Peers",
      "Status",
    ],
    []
  );

  const fakeObject = [1, 2, 3, 4].map((item: any, index: number) => {
    let obj =
      pathName === "/xrpkhub"
        ? {
            node: `Node ${index + 1}`,
            pubkey: "-",
            ledger: "-",
            uptime: "-",
            version: "-",
            peers: "-",
            proposers: "-",
            quorum: "-",

            status: (
              <Lottie
                animationData={offlineAnimationData}
                loop={true}
                autoplay={true}
                style={{ width: 30, height: 30, margin: "0 auto" }}
              />
            ),
          }
        : {
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

  const [servers, setServers] = useState(fakeObject);
  const [statistics, setStatistics] = useState({
    ledgerIndex: 0,
    closeTime: "",
    TPS: 0,
    txCount: 0,
    quorum: 0,
    proposers: 0,
  });

  const getData = async () =>
    fetch("https://xrpkuwait.com/serverstates")
      .then((response) => response.json())
      .then((data: any) => {
        console.log("SERVER", data);
        let modifyData: any = [];

        if (data.serverStatus) {
          modifyData =
            data?.serverStatus?.length > 0 &&
            data?.serverStatus?.map((item: any, index: number) => {
              let icon = item.peers
                ? onlineAnimationData
                : offlineAnimationData;
              let obj =
                pathName === "/xrpkhub"
                  ? {
                      node: `Node ${index + 1}`,
                      pubkey: item.pubkey,
                      ledger: item.ledger_Index,
                      uptime: item.uptime,
                      proposers: item.proposers,
                      quorum: item.quorum,

                      version: item.version,
                      peers: item.peers,
                      status: (
                        <Lottie
                          animationData={icon}
                          loop={true}
                          autoplay={true}
                          style={{ width: 30, height: 30, margin: "0 auto" }}
                        />
                      ),
                    }
                  : {
                      node: `Node ${index + 1}`,
                      pubkey: item.pubkey,
                      ledger: item.ledger_Index,
                      uptime: item.uptime,
                      version: item.version,
                      peers: item.peers,
                      status: (
                        <Lottie
                          animationData={icon}
                          loop={true}
                          autoplay={true}
                          style={{ width: 30, height: 30, margin: "0 auto" }}
                        />
                      ),
                    };
              return obj;
            });
        }

        if (data.serverStatus) setServers(modifyData);
        if (data.statistics) setStatistics(data.statistics);
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
    servers,
    statistics,
    serverDataColumn: column,
  };
};

export default useServerData;
