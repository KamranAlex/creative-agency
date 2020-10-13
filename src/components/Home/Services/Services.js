import React from "react";
import "./Services.css";
import webMobile from "../../../images/icons/service1.png";
import graphicsDesign from "../../../images/icons/service2.png";
import webDev from "../../../images/icons/service3.png";

const Services = () => {
  return (
    <section className='container services-section mb-5'>
      <h3 className='text-center mb-5 service-awesome'>
        Provide Awesome <span>Services</span>
      </h3>
      <div className='row'>
        <div className='col-md-4'>
          <div className='text-center service-card'>
            <img src={webMobile} className='' alt='...' />
            <h5 className='service-title'>Web & Mobile design</h5>
            <p className='service-text'>
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='text-center service-card'>
            <img src={graphicsDesign} className='' alt='...' />
            <h5 className='service-title'>Graphic design</h5>
            <p className='service-text'>
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='text-center service-card'>
            <img src={webDev} className='' alt='...' />
            <h5 className='service-title'>Web development</h5>
            <p className='service-text'>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
