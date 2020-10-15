import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import webMobile from "../../../../images/icons/service1.png";
import graphicsDesign from "../../../../images/icons/service2.png";
import "./MyServices.css";

const MyServices = () => {
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>My Services</h4>
        </div>
        <div className='row px-5 py-3'>
          <div className='col-md-6 mt-3'>
            <div className='myService-card px-3 py-2'>
              <div className='card-intro d-flex justify-content-between'>
                <img src={webMobile} alt='' style={{ height: "60px" }} />
                <strong className='myService-status mr-2'>Status</strong>
              </div>
              <div className='card-details mt-2'>
                <h6>Graphics Design</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  debitis eos, nihil labore molestias quaerat.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-3'>
            <div className='myService-card px-3 py-2'>
              <div className='card-intro d-flex justify-content-between'>
                <img src={webMobile} alt='' style={{ height: "60px" }} />
                <strong className='myService-status mr-2'>Status</strong>
              </div>
              <div className='card-details mt-2'>
                <h6>Graphics Design</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  debitis eos, nihil labore molestias quaerat.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-3'>
            <div className='myService-card px-3 py-2'>
              <div className='card-intro d-flex justify-content-between'>
                <img src={graphicsDesign} alt='' style={{ height: "60px" }} />
                <strong className='myService-status mr-2'>Status</strong>
              </div>
              <div className='card-details mt-2'>
                <h6>Graphics Design</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  debitis eos, nihil labore molestias quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
