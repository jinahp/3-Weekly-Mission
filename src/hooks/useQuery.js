import { useEffect, useState } from 'react';

async function fetchData(url) {
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

export function useQuery(url, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  async function load(url) {
    try {
      const json = await fetchData(url);
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(url);
  }, [url]);

  return { data, error, isLoading };
}

export default useQuery;
