import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Brands from "../Brands/Brands";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";
import OurWorks from "../OurWorks/OurWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Brands></Brands>
      <Services></Services>
      <OurWorks></OurWorks>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
