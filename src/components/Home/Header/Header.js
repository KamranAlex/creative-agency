import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import HeaderMain from "../HeaderMain/HeaderMain";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className='header-outer-container'></div>
      <div className='header-inner-container'>
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
      </div>
    </div>
  );
};

export default Header;
