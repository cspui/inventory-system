import { format } from 'date-fns';
import React, { useState } from 'react';
import { FaCheckCircle, FaRegEdit, FaTrashAlt } from 'react-icons/fa';

import { useGetRecord } from '@/hooks/useGetRecord';
import { deleteData, updateData } from '@/utils/helper';
import { StockRecord } from '@/utils/types';

import Input from '../Input';

interface IStockRowProps {
  item: StockRecord;
}

const StockRow = ({ item }: IStockRowProps) => {
  const { refetch } = useGetRecord();

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(item.name);
  const [remark, setRemark] = useState(item.remark);
  const [quantity, setQuantity] = useState(item.quantity);
  const [value, setValue] = useState(item.value);

  const onUpdate = () => {
    const updateItem = {
      ...item,
      name: name,
      remark: remark,
      quantity: quantity,
      value: value,
    };
    updateData(updateItem, refetch);
    setEdit(false);
  };

  return (
    <tr>
      <td className='p-3 text-xs'>{item.id}</td>
      {edit ? (
        <>
          <td className='p-3 text-xs'>
            <Input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              className='w-full'
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td className='p-3 text-xs'>
            <Input
              type='text'
              placeholder='Remark'
              name='remark'
              value={remark}
              className='w-full'
              onChange={(e) => setRemark(e.target.value)}
            />
          </td>
          <td className='p-3 text-xs'>
            <Input
              type='number'
              placeholder='Quantity'
              name='quantity'
              value={quantity}
              className='w-full'
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </td>
          <td className='p-3 text-xs'>
            <Input
              type='number'
              placeholder='Value'
              name='value'
              step='.01'
              value={value}
              className='w-full'
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
          </td>
        </>
      ) : (
        <>
          <td className='p-3 text-xs'>{item.name}</td>
          <td className='p-3 text-xs'>{item.remark}</td>
          <td className='p-3 text-xs'>{item.quantity}</td>
          <td className='p-3 text-xs'>{item.value}</td>
        </>
      )}

      <td className='p-3 text-xs'>{format(item.date, 'yyyy-MM-dd HH:mm:ss')}</td>
      <td className='p-3'>
        <div className='flex items-center justify-center gap-5 p-3'>
          {edit ? (
            <FaCheckCircle onClick={onUpdate} className='cursor-pointer' />
          ) : (
            <FaRegEdit onClick={() => setEdit(true)} className='cursor-pointer' />
          )}

          <FaTrashAlt onClick={() => deleteData(item, refetch)} className='cursor-pointer' />
        </div>
      </td>
    </tr>
  );
};

export default StockRow;
