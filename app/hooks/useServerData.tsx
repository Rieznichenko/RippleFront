import React, { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react"; // Import the Lottie component

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import onlineAnimationData from "@/components/lottie/wired-flat-64-wifi-online.json";
import dotAnimationData from "@/components/lottie/system-solid-716-spinner-three-dots.json";
import { usePathname } from "next/navigation";
import socketIOClient from 'socket.io-client';

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
  
  let initArray = [];
  if(pathName === "/xrpkhub")
    initArray = [1, 2];
  else
    initArray = [1, 2, 3 ,4, 5]
  
  const fakeObject = initArray.map((item: any, index: number) => {
    let obj =
      pathName === "/xrpkhub"
        ? {
            node: `XRPK HUB 0${index + 1}`,
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
  console.log("?? ~ useServerData ~ servers:", servers);
  const [statistics, setStatistics] = useState({
    ledgerIndex: 0,
    closeTime: "",
    TPS: 0,
    txCount: 0,
    quorum: 0,
    proposers: 0,
    accounts: 0,
  });


  const handleData = (data:any) => {
    let modifyData: any = [];
    let totalPeers = 0;
    if (data.serverStatus) {
      modifyData =
        data?.serverStatus?.length > 0 &&
        data?.serverStatus?.map((item: any, index: number) => {
          totalPeers += item.peers - 0;
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
                  peers: item.peers ? item.peers : '-',
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
                  peers: item.peers ? item.peers : '-',
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
    } else {
      modifyData =
        data?.length > 0 &&
        data?.map((item: any, index: number) => {
          totalPeers += item.peers - 0;
          let icon = item.peers
            ? onlineAnimationData
            : offlineAnimationData;
          let obj = {
            node: item.node,
            pubkey: item.pubkey,
            ledger: item.ledger_Index,
            uptime: item.uptime,
            proposers: item.proposers,
            quorum: item.quorum,

            version: item.version,
            peers: item.peers ? item.peers : '-',
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
        console.log(modifyData);
        modifyData.push({
          node: ``,
          pubkey: '',
          ledger: '',
          uptime: '',
          proposers: '',
          quorum: '',

          version: 'Total peers',
          peers: totalPeers,
          status:  (
            <Lottie
              animationData={dotAnimationData}
              loop={true}
              autoplay={true}
              style={{ width: 30, height: 30, margin: "0 auto" }}
            />
          ),
        })
    }

    setServers(modifyData);
    if (data.statistics) setStatistics(data.statistics);
  }
  useEffect(() => {
    const socket = socketIOClient('https://xrpkuwait.com/api/v1');
    socket.on('/servers/hubstate', data => {
      handleData(data.serverState)
    });

    socket.on('/servers/allstates', data => {
      handleData(data.serverStates)
    });

    const intervalId = setInterval(() => {
      socket.emit(`${
        pathName === "/xrpkhub" ? "/hubstate" : "/allstates"
      }`)
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
