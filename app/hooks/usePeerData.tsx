import React, { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";

import offlineAnimationData from "@/components/lottie/wired-flat-64-wifi-offline.json";
import ReactCountryFlag from "react-country-flag";

import inboundState from "@/components/lottie/wired-outline-33-arrow-down.json";
import outboundState from "@/components/lottie/wired-outline-34-arrow-up.json";
import socketIOClient from "socket.io-client";
import { version } from "os";

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

  let fakeObject: any[] = [];

  const [peers, setPeers] = useState(fakeObject);
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const socket = socketIOClient("https://xrpkuwait.com/api/v1");
    socket.on("/peers", (data) => {
      if (data.status == 500) return;
      const extract_statistics = function () {
        // Group by version and status
        const versionGroup = {};
        const statusGroup = {};
        const countryCount = {};

        data.peerInfo.forEach((item) => {
          // Count by version
          const version = item.version.substring(0, 13); // or item.version.slice(0, 13)
          if (!versionGroup[version]) {
            versionGroup[version] = 0;
          }
          versionGroup[version]++;

          // Count by status
          if (!statusGroup[item.serverState]) {
            statusGroup[item.serverState] = 0;
          }
          statusGroup[item.serverState]++;

          // Count by country
          if (!countryCount[item.country]) {
            countryCount[item.country] = 0;
          }
          countryCount[item.country]++;
        });

        // Extract top 5 countries
        const topCountries = Object.entries(countryCount)
          .sort((a, b) => b[1] - a[1]) // Sort by count desc
          .slice(0, 10);

        const sortedVersionGroup = Object.entries(versionGroup).sort(
          ([versionA], [versionB]) => versionA.localeCompare(versionB)
        );
        // Prepare the result format
        const result = [];

        // Add Ripple statistics data
        for (const [version, count] of sortedVersionGroup) {
          result.push({
            category_1: "",
            type_1: version,
            count_1: count,
            category_2: "",
            type_2: "",
            count_2: "",
          });
        }

        // Adding Ripple Type & Top Countries section
        if(result){
          result[0]["category_1"] = "Ripple Type";
          result[0]["category_2"] = "Top Countries";
        }

        // Adding Status statistics data
        let first_flag = true;
        for (const [status, count] of Object.entries(statusGroup)) {
          let colors = {
            bg: "bg-[#32E685]",
            text: "text-[#0D793F]",
            border: "border-[#0D793F]",
          };

          if (status === "insane") {
            colors = {
              bg: "bg-[#d9534f]",
              text: "text-black",
              border: "border-[#d9534f]",
            };
          } else if (status === "unknown") {
            colors = {
              bg: "bg-[#f0ad4e]",
              text: "text-black",
              border: "border-[#f0ad4e]",
            };
          }
          result.push({
            category_1: first_flag ? "Status" : "",
            type_1: (
              <div
                className={`${colors.bg} inline-block font-semibold ${colors.text} border ${colors.border} rounded-full px-5 py-2`}
              >
                {status}
              </div>
            ),
            count_1: count,
            category_2: "",
            type_2: "",
            count_2: "",
          });
          first_flag = false;
        }
        console.log(topCountries);
        // Adding top 5 countries section
        for (let i = 0; i < result.length; i++) {
          result[i]["type_2"] = (
            <ReactCountryFlag
              countryCode={topCountries[i][0]}
              svg
              title={topCountries[i][0]}
              style={{ width: 30, height: 30 }}
            />
          );
          result[i]["count_2"] = topCountries[i][1];
        }

        setStatistics(result); // Update state with the result
        // Output the result
        console.log(result);
      };
      extract_statistics();
      let modifyData = data.peerInfo?.map((item: any, index: any) => {
        let colors = {
          bg: "bg-[#32E685]",
          text: "text-[#0D793F]",
          border: "border-[#0D793F]",
        };

        if (item?.serverState === "insane") {
          colors = {
            bg: "bg-[#d9534f]",
            text: "text-black",
            border: "border-[#d9534f]",
          };
        } else if (item?.serverState === "unknown") {
          colors = {
            bg: "bg-[#f0ad4e]",
            text: "text-black",
            border: "border-[#f0ad4e]",
          };
        }

        return {
          pubkey: item?.pubkey,
          country: (
            <ReactCountryFlag
              key={item.pubkey}
              countryCode={item.country}
              svg
              title={item.country}
              style={{ width: 30, height: 30 }}
            />
          ),
          version:
            item?.version.length <= 20
              ? item?.version
              : item?.version.slice(0, 20) + "...",
          serverState: (
            <div
              className={`${colors.bg} inline-block font-semibold ${colors.text} border ${colors.border} rounded-full px-5 py-2`}
            >
              {item?.serverState}
            </div>
          ),
          direction:
            item.direction == "inbound" ? (
              <Lottie
                animationData={inboundState}
                loop={true}
                autoplay={true}
                style={{ width: 30, height: 30, margin: "0 auto" }}
              />
            ) : (
              <Lottie
                animationData={outboundState}
                loop={true}
                autoplay={true}
                style={{ width: 30, height: 30, margin: "0 auto" }}
              />
            ),
          latency: item?.latency,
          ledgers: item?.ledgers || "N/A",
        };
      });
      setPeers(modifyData);
    });
    const intervalId = setInterval(() => {
      socket.emit("/peers");
    }, 1000); // 1000ms = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return {
    peers,
    peersColumn: column,
    statistics,
  };
};

export default usePeerData;
