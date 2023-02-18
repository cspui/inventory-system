import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <main className='m-auto max-w-5xl p-2'>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
