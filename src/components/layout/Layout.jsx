import React from "react";
import { Navbar, Footer } from "../index";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
