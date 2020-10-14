import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='container footer-main'>
        <div className='row'>
          <div className='col-md-6 p-5 footer-text'>
            <h1>
              Let us handle your <br /> project, professionally.
            </h1>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
          <div className='col-md-6 footer-form p-5'>
            <form action=''>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Your Email address'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Your name'
                />
              </div>

              <div className='form-group'>
                <textarea
                  name=''
                  className='form-control'
                  id=''
                  cols='30'
                  rows='10'
                  placeholder='Message *'
                ></textarea>
              </div>
              <div className='form-group'>
                <button type='button' className='footer-btn'>
                  {" "}
                  Send{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='copyright-text text-center pb-2'>
        <p>Copyright @ 2020. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
