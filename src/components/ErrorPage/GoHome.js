import React from "react";
import { Link } from "react-router-dom";

const GoHome = () => {
  return (
    <div className='container text-center mt-5'>
      <div className='error-container text-center mt-5'>
        <div className='error-code text-center mt-5'>
          <p className='text-warning warn-text p-2'>No Service Selected</p>
        </div>
        <div className='error-text'>
          <p className='text-info home-text p-2'>
            Please Select a Service From{" "}
            <Link to='/'>
              <span className='text-danger'>...HOME</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoHome;
