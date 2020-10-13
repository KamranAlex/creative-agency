import React from "react";
import Brands from "../Brands/Brands";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";
import OurWorks from "../OurWorks/OurWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className='mb-5'>
      <Header></Header>
      <Brands></Brands>
      <Services></Services>
      <OurWorks></OurWorks>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
