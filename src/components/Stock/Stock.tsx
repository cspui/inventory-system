import React from 'react';

import { useGetRecord } from '@/hooks/useGetRecord';

import StockDesktopTable from './StockDesktopTable';
import StockMobileTable from './StockMobileTable';

const Stock = () => {
  const { data, isError, isLoading } = useGetRecord();

  const renderContent = () => {
    if (isError) return <div>Error {isError}</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
      <div>
        {data && (
          <>
            {/* <div className='hidden md:block'> */}
            <StockDesktopTable data={data} />
            {/* </div> */}

            {/* <div className='block md:hidden'>
              <StockMobileTable data={data} />
            </div> */}
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      <h2 className='text-3xl font-bold'>Stock</h2>

      {renderContent()}
    </div>
  );
};

export default Stock;
