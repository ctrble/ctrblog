import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

const useApiRoute = (route) => {
  const { data, error } = useSWR(route, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useApiRoute;
