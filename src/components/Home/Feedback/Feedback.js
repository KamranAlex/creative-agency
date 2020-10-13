import React from "react";
import "./Feedback.css";
import customer1 from "../../../images/customer-1.png";
import customer2 from "../../../images/customer-2.png";
import customer3 from "../../../images/customer-3.png";

const Feedback = () => {
  return (
    <div className='container feedback-section'>
      <h4 className='text-center feedback-head'>
        {" "}
        Clients <span>Feedback</span>{" "}
      </h4>

      <div className='row card-row mt-5'>
        <div className='col-md-3 feedback-card'>
          <div className='client-info d-flex'>
            <img src={customer1} alt='' />
            <div className='client-text'>
              <h6>Nasha Patric</h6>
              <p>CEO, Manapol</p>
            </div>
          </div>
          <div className='feedback-text'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='col-md-3 feedback-card'>
          <div className='client-info d-flex '>
            <img src={customer2} alt='' />
            <div className='client-text'>
              <h6>De'Caprio</h6>
              <p>CEO, Manapol</p>
            </div>
          </div>
          <div className='feedback-text'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='col-md-3 feedback-card'>
          <div className='client-info d-flex'>
            <img src={customer3} alt='' />
            <div className='client-text'>
              <h6>Keanu Reveas</h6>
              <p>CEO, Manapol</p>
            </div>
          </div>
          <div className='feedback-text'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
