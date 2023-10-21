import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 150px)' }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
