import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />  {/* This will render the page content */}
      <Footer />  {/* Footer is included only in Layout pages */}
    </div>
  );
};

export default Layout;
