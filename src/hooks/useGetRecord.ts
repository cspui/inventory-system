import useSWR from 'swr';

import { fetcher } from '@/utils/helper';

export const useGetRecord = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(`/api/record`, fetcher);

  return {
    data: data ? data.data : undefined,
    isLoading: isLoading || isValidating,
    isError: error,
    refetch: mutate,
  };
};
