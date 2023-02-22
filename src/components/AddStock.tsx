import { useRouter } from 'next/router';
import React from 'react';

import { useGetRecord } from '@/hooks/useGetRecord';
import { createData } from '@/utils/helper';

import Input from './Input';

const AddStock = () => {
  const { push } = useRouter();
  const { refetch } = useGetRecord();

  const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      remark: { value: string };
      quantity: { value: number };
      value: { value: number };
    };

    const data = {
      id: Date.now(),
      name: target.name.value,
      remark: target.remark.value,
      quantity: target.quantity.value,
      value: target.value.value,
      date: Date.now(),
    };

    await createData(data, refetch);
    push('/');
  };

  return (
    <div>
      <h2 className='text-3xl font-bold'>AddStock</h2>

      <form onSubmit={submitData} className='mt-12 flex flex-col gap-5'>
        <div className='flex flex-col'>
          <p className='p-3 text-xs'>Name</p>
          <Input type='text' placeholder='Name' name='name' />
        </div>

        <div className='flex flex-col'>
          <p className='p-3 text-xs'>Remark</p>
          <Input type='text' placeholder='Remark' name='remark' />
        </div>

        <div className='flex flex-col'>
          <p className='p-3 text-xs'>Quantity</p>
          <Input type='number' placeholder='Quantity' name='quantity' />
        </div>

        <div className='flex flex-col'>
          <p className='p-3 text-xs'>Value</p>
          <Input type='number' placeholder='Value' name='value' step='.01' />
        </div>

        <div className='flex w-full justify-center'>
          <button
            type='submit'
            className='w-52 rounded-lg border-2 py-2 px-4 hover:bg-black hover:text-white'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStock;
