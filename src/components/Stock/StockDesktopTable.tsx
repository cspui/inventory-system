import React from 'react';
import { useTranslation } from 'react-i18next';

import { StockRecord } from '@/utils/types';

import { TABLE_HEADERS } from './constants';

interface IProps {
  data: any;
}

const StockDesktopTable = ({ data }: IProps) => {
  const { t } = useTranslation('common');

  const totalCost =
    data && data.length
      ? data.reduce((acc: number, item: StockRecord) => acc + item.value * item.quantity, 0)
      : 0;
  const totalQuantity =
    data && data.length ? data.reduce((acc: number, item: StockRecord) => acc + item.quantity, 0) : 0;
  const averageCost = data && data.length ? totalCost / totalQuantity : 0;

  return (
    <div>
      <table className='mt-16 w-full'>
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header} className='p-3 pb-5 text-left text-xs font-semibold'>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data && data.length ? (
            data.map((item: StockRecord) => {
              return (
                <tr key={item.id}>
                  <td className='p-3 text-xs'>{item.id}</td>
                  <td className='p-3 text-xs'>{item.name}</td>
                  <td className='p-3 text-xs'>{item.quantity}</td>
                  <td className='p-3 text-xs'>{item.value}</td>
                  <td className='p-3 text-xs'>{new Date(item.date).toString()}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} className='pt-10 text-center text-base'>
                {t('EMPTY_DATA')}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <p>Total cost: {totalCost}</p>
      <p>Average cost: {averageCost}</p>
    </div>
  );
};

export default StockDesktopTable;
