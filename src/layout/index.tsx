import React, { FC } from "react";
import Header from '../components/header'


const Layout: FC = (props) => {
  return (
    <section className="container">
      <Header />
      {props.children}
      
    </section>
  );
};

export default Layout;
