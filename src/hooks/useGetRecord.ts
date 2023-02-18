import useSWR from 'swr';

import { fetcher } from '@/utils/helper';

export const useGetRecord = () => {
  const { data, error, isLoading } = useSWR(`/api/record`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};
