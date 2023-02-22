import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex h-full w-full justify-center gap-5 bg-pink-600 p-8 text-slate-100'>
      <Link href='/'>Home</Link>
      <Link href='/add'>Add stock</Link>
    </nav>
  );
};

export default Navbar;
