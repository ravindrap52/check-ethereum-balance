import { useQuery } from '@tanstack/react-query';
import { h } from 'preact';
import { useCallback, useState } from 'react';

import { EthereumForm } from './form';
import { Skeleton } from '@/components/ui/skeleton';
import { getBalanceByAddress } from '@/lib/getBalanceByAddress';
import { getBalanceByAsset } from '@/lib/getBalanceByAsset';
import { FormData } from '@/types/interface';

export function Home(): h.JSX.Element {
  const [ethereumAddress, setEthereumAddress] = useState('');

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['address', ethereumAddress],
    queryFn: async ({ queryKey }) => {
      const ethereumAddress = queryKey[1];
      const balance = await getBalanceByAddress(ethereumAddress);
      return balance;
    },
    refetchOnWindowFocus: false,
    enabled: !!ethereumAddress,
  });

  const handleChildData = useCallback((data: FormData): void => {
    setEthereumAddress(data.ethereumAddress);
  }, []);

  return (
    <div class="flex flex-col max-w-md w-full">
      <EthereumForm onSendData={handleChildData} />
      {(isLoading || isFetching) && <Skeleton className="h-4 w-full mt-4 bg-primary2" />}
      {error && <p class="mt-4 text-red-500">Error: {error.message || 'An error occurred'}</p>}
      {data && (
        <p class="mt-4 text-lg font-semibold text-green-600">{getBalanceByAsset(data, 'ETH')}</p>
      )}
    </div>
  );
}
