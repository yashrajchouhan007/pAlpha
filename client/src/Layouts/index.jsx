import React from "react";
import "./layouts.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { useSelector} from 'react-redux';

const Layout = ({ children }) => {
  const account = useSelector((state) => state.account);
  let location = useLocation();
  // console.log("location", location.pathname);
  return (
    <>
      <Header />
      {account.isAuthenticated ? (
        <div
          className={`main_container ${
            location.pathname === "/" ? "homepage" : "innerpage"
          }`}
        >
          <Sidebar />
          <div className="child_container">{children}</div>
        </div>
      ) : (
        <main>{children}</main>
      )}

      <Footer />
    </>
  );
};

export default Layout;
