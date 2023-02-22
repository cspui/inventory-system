import React from 'react';
import { useTranslation } from 'react-i18next';

import { StockRecord } from '@/utils/types';

import StockRow from './StockRow';
import { TABLE_HEADERS } from './constants';

interface IProps {
  data: StockRecord[];
}

const StockTable = ({ data }: IProps) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <table className=' w-full'>
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th
                key={header}
                className='border-b-2 border-pink-500 p-3 pb-5 text-left text-sm font-semibold'
              >
                {header}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data && data.length ? (
            data.map((item) => {
              return <StockRow item={item} key={item.id} />;
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
    </div>
  );
};

export default StockTable;
