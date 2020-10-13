import React from "react";
import "./HeaderMain.css";
import banner from "../../../images/logos/Frame.png";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <main className='container '>
      <div className='row header-main d-flex align-items-center'>
        <div className='col-md-6'>
          <h1 className='header-slogan'>
            Let’s Grow Your <br /> Brand To The <br />
            Next Level
          </h1>
          <p className='header-text'>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Neque beatae,
            <br /> porro vel voluptate.
          </p>
          <Link to='/'>
            <button className='hire-btn'>Hire Us</button>
          </Link>
        </div>
        <div className='col-md-6'>
          <img src={banner} alt='' className='img-fluid' />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
