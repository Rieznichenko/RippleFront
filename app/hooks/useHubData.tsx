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
      setTimestamp(data.ret.when);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hub data:", error);
      setError("Failed to fetch hub data");
      setLoading(false);
    }
  };

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
