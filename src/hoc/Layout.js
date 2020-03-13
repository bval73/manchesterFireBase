import React from 'react';
import Header from '../components/headr-ftr/header';
import Footer from '../components/headr-ftr/footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  );
};

export default Layout;