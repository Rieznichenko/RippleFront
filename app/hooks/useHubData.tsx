import { time } from "console";
import { useEffect, useMemo, useState } from "react";

const useHubData = () => {
  const [hubData, setHubData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);

  const column = useMemo(() => ["name", "address", "type", "ttl"], []);

  const getData = async () => {
    try {
      const response = await fetch("https://xrpkuwait.com/api/v1/hubs");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
    //   console.log(data);

      const { data: digData, when } = data;
      console.log(data);
    //   console.log(when);

      const transformedData = data.ret.data.map((item: any) => ({
        domain: item.name,
        address: item.address,
        type: item.type,
        ttl: item.ttl,
      }));

      // Sort the transformed data by address
      const sortedData = transformedData.sort((a: any, b: any) => a.address.localeCompare(b.address));

      setHubData(sortedData);
      setTimestamp(convertTime(data.ret.when));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hub data:", error);
      setError("Failed to fetch hub data");
      setLoading(false);
    }
  };
const convertTime = function (time: any) {
  if (time) {
    // Parse the server time string into a Date object
    const date = new Date(time);

    // Convert the date to the user's local time zone
    const localDate = new Date(date.toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));

    // Extract components of the date
    const dayName = localDate.toLocaleString('en-US', { weekday: 'short' });
    const monthName = localDate.toLocaleString('en-US', { month: 'short' });
    const day = localDate.getDate();
    const year = localDate.getFullYear();
    const hours = localDate.getHours().toString().padStart(2, '0');
    const minutes = localDate.getMinutes().toString().padStart(2, '0');
    const seconds = localDate.getSeconds().toString().padStart(2, '0');
    const timeZoneOffset = -localDate.getTimezoneOffset();
    const sign = timeZoneOffset >= 0 ? '+' : '-';
    const offsetHours = Math.abs(Math.floor(timeZoneOffset / 60)).toString().padStart(2, '0');
    const offsetMinutes = (Math.abs(timeZoneOffset) % 60).toString().padStart(2, '0');

    // Construct the formatted date string
    const formattedDate = `${dayName} ${monthName} ${day} ${hours}:${minutes}:${seconds} ${sign}${offsetHours} ${year}`;

    return formattedDate;
  }
  return null;
}

  useEffect(() => {
    getData();
  }, []);

  return {
    hubData,
    hubColumn: column,
    loading,
    error,
    timestamp,
  };
};

export default useHubData;
