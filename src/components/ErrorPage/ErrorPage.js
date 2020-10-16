import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className='container text-center mt-5'>
      <div className='error-container text-center mt-5'>
        <div className='error-code text-center mt-5'>
          <p className='text-danger E-code p-2'>Error 404 !!! </p>
        </div>
        <div className='error-text'>
          <p className='text-warning E-text p-2'>
            Page Couldn't Found <FontAwesomeIcon icon={faExclamationTriangle} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
