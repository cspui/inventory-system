import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex h-full w-full justify-center gap-5 bg-pink-600 p-8 text-slate-100 '>
      <Link href='/' className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
        Home
      </Link>
      <Link href='/add' className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
        Add stock
      </Link>
    </nav>
  );
};

export default Navbar;
