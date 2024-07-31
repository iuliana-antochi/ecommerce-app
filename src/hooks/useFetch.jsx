import useSWR from "swr";

const useFetch = (url) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default useFetch;
