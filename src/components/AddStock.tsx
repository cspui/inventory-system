import { useRouter } from 'next/router';
import React from 'react';

import { createData } from '@/utils/helper';

import Input from './Input';

const AddStock = () => {
  const { push } = useRouter();

  const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      quantity: { value: number };
      value: { value: number };
    };

    const data = {
      id: Date.now(),
      name: target.name.value,
      quantity: target.quantity.value,
      value: target.value.value,
      date: Date.now(),
    };

    await createData(data);
    push('/');
  };

  return (
    <div>
      <h2 className='text-3xl font-bold'>AddStock</h2>

      <form onSubmit={submitData} className='mt-16 flex flex-col gap-5'>
        <div className='flex'>
          <p className='p-3 text-xs'>Name</p>
          <Input type='text' placeholder='Name' name='name' />
        </div>

        <div className='flex'>
          <p className='p-3 text-xs'>Quantity</p>
          <Input type='number' placeholder='Quantity' name='quantity' />
        </div>

        <div className='flex'>
          <p className='p-3 text-xs'>Value</p>
          <Input type='number' placeholder='Value' name='value' step='.01' />
        </div>

        <div>
          <button
            type='submit'
            className='rounded-lg border-2 py-2 px-4 hover:bg-black hover:text-white'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStock;
