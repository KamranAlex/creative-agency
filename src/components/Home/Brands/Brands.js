import React from "react";
import "./Brands.css";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";

const Brands = () => {
  return (
    <div className='container brands-container'>
      <div className='row brands-logo d-flex justify-content-center'>
        <img className='img-fluid' src={slack} alt='' />
        <img className='img-fluid' src={google} alt='' />
        <img className='img-fluid' src={uber} alt='' />
        <img className='img-fluid' src={netflix} alt='' />
        <img className='img-fluid' src={airbnb} alt='' />
      </div>
    </div>
  );
};

export default Brands;
