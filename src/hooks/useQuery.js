import { useEffect, useState } from "react";

async function fetchData(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

export function useQuery(url, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(true);

  async function load() {
    try {
      let json = await fetchData(url);
      setData(json);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, [url]);

  return { data, isLoading };
}

export default useQuery;
