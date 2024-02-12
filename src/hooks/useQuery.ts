import { useEffect, useState } from 'react';

async function fetchData(url: string) {
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

export function useQuery<T>(url: string, initialData: T) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState<any | null>(null);
  const [isLoading, setLoading] = useState(true);

  async function load(url: string) {
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
