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
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
