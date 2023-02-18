import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

import { useGetRecord } from '@/hooks/useGetRecord';
import { deleteData, updateData } from '@/utils/helper';
import { StockRecord } from '@/utils/types';

import { TABLE_HEADERS } from './constants';

interface IProps {
  data: StockRecord[];
}

const StockDesktopTable = ({ data }: IProps) => {
  const { t } = useTranslation('common');
  const { refetch } = useGetRecord();

  const totalCost =
    data && data.length ? data.reduce((acc, item) => acc + item.value * item.quantity, 0) : 0;
  const totalQuantity =
    data && data.length ? data.reduce((acc, item) => acc + item.quantity, 0) : 0;
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
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data && data.length ? (
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <td className='p-3 text-xs'>{item.id}</td>
                  <td className='p-3 text-xs'>{item.name}</td>
                  <td className='p-3 text-xs'>{item.quantity}</td>
                  <td className='p-3 text-xs'>{item.value}</td>
                  <td className='p-3 text-xs'>{new Date(item.date).toString()}</td>
                  <td className='flex items-center justify-center gap-5 p-3'>
                    <FaRegEdit
                      onClick={() => updateData(item, refetch)}
                      className='cursor-pointer'
                    />
                    <FaTrashAlt
                      onClick={() => deleteData(item, refetch)}
                      className='cursor-pointer'
                    />
                  </td>
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

      <div className='m-2 mt-8 flex flex-col gap-5 border-t-2 p-2'>
        <p className='font-semibold'>Average cost: {averageCost.toFixed(2)}</p>
        <p className='font-semibold'>Total cost: {totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default StockDesktopTable;
