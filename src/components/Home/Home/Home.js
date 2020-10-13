import React from "react";
import Brands from "../Brands/Brands";
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
    </div>
  );
};

export default Home;
