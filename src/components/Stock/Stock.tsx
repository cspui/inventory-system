import { format } from 'date-fns';
import React from 'react';

import { useGetRecord } from '@/hooks/useGetRecord';

import StockTable from './StockTable';

const Stock = () => {
  const { data, isError, isLoading } = useGetRecord();

  const totalCost =
    data && data.length ? data.reduce((acc, item) => acc + item.value * item.quantity, 0) : 0;
  const totalQuantity =
    data && data.length ? data.reduce((acc, item) => acc + item.quantity, 0) : 0;
  const averageCost = data && data.length ? totalCost / totalQuantity : 0;

  const renderContent = () => {
    if (isError) return <div>Error {isError}</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
      <div className='mt-12 max-h-[70vh] overflow-y-scroll sm:mt-4'>
        {data && <StockTable data={data} />}
      </div>
    );
  };

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = `backup_${format(new Date(), 'dd-MM-yyyy')}.json`;

    link.click();
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold'>Stock</h2>
        <button
          className='w-52 rounded-lg border-2 py-2 px-4 hover:bg-black hover:text-white'
          onClick={exportData}
        >
          Export
        </button>
      </div>

      {renderContent()}

      <div className='m-2 mt-8 flex flex-col gap-5 border-t-2 border-pink-500 p-2'>
        <p className='font-semibold'>Average cost: {averageCost.toFixed(2)}</p>
        <p className='font-semibold'>Total cost: {totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Stock;
