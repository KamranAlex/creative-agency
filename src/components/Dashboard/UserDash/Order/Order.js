import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Order.css";

const Order = () => {
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Order</h4>
        </div>
        <div className='order-form col-md-6 p-5'>
          <form action=''>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Your name'
              />
            </div>
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
                placeholder='Project Name'
              />
            </div>
            <div className='form-group'>
              <textarea
                name=''
                className='form-control'
                id=''
                cols='10'
                rows='4'
                placeholder='Project Details'
              ></textarea>
            </div>

            <div className='form-group d-flex'>
              <input type='text' className='form-control' placeholder='Price' />
              <div className='upload-btn-wrapper ml-2'>
                <button class='upload-btn'>
                  Upload a file{" "}
                  <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon>
                </button>
                <input type='file' name='file' />
              </div>
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
  );
};

export default Order;
