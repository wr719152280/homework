import React, { FC } from "react";
import Header from '../components/header'
import Side from '../components/side'

const Layout: FC = (props) => {
  return (
    <section className="container">
      <Header />
      <section className="main content">
        <Side />
        <main>{props.children}</main>
      </section>
    </section>
  );
};

export default Layout;
