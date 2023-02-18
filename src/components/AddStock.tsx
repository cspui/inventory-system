import { useRouter } from 'next/router';
import React from 'react';

import { StockRecord } from '@/utils/types';

import Input from './Input';

type Props = {};

const AddStock = (props: Props) => {
  const { push } = useRouter();

  const submitData = async (e) => {
    e.preventDefault();
    console.log('e', e);

    const data = {
      id: e.target[0].value,
      name: e.target[1].value,
      quantity: e.target[2].value,
      value: e.target[3].value,
      date: Date.now(),
    };

    await updateData(data);
    push('/');
  };

  const updateData = (data: StockRecord) =>
    fetch('/api/add-record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

  return (
    <div>
      <div>AddStock</div>

      <form onSubmit={submitData}>
        <div className='flex'>
          <p className='p-3 text-xs'>Id</p>
          <Input type='text' placeholder='Id' />
        </div>

        <div className='flex'>
          <p className='p-3 text-xs'>Name</p>
          <Input type='text' placeholder='Name' />
        </div>

        <div className='flex'>
          <p className='p-3 text-xs'>Quantity</p>
          <Input type='text' placeholder='Quantity' />
        </div>

        <div className='flex'>
          <p className='p-3 text-xs'>Value</p>
          <Input type='text' placeholder='Value' />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddStock;
