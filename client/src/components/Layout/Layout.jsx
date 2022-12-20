import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Router from "../../routers/Routers";

const Layout = () => {
  return( <>
    <Header/>
    <div>
        <Router/>
    </div>
    <Footer/>
  </>
  );
};

export default Layout;
