import useSWR from 'swr';

import { fetcher } from '@/utils/helper';
import { StockRecord } from '@/utils/types';

export const useGetRecord = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(`/api/record`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data: data ? (data.data as StockRecord[]) : undefined,
    isLoading: isLoading || isValidating,
    isError: error,
    refetch: mutate,
  };
};
