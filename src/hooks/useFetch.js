import { useState, useEffect } from "react";

export function useFetch(fetchUrl) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getVersions() {
    setIsLoading(true);
    try {
      const rawData = await fetch(fetchUrl);
      const versions = await rawData.json();
      setFetchedData(versions);
    } catch (err) {
      console.log(err);
      setFetchedData([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getVersions();
  }, [fetchUrl]);

  return [fetchedData, isLoading];
}
