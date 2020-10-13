import React from "react";
import "./OurWorks.css";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OurWorks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "20%",
  };
  return (
    <section className='ourWorks-section pt-5'>
      <h3 className='text-center our-works mb-5'>
        Here are some of <span>Our Works</span>
      </h3>
      <div className='container text-center slider-container'>
        <Slider {...settings} id='slider'>
          <div>
            <img style={{ height: "410px" }} src={carousel1} alt='' />
          </div>
          <div>
            <img style={{ height: "410px" }} src={carousel2} alt='' />
          </div>
          <div>
            <img style={{ height: "410px" }} src={carousel3} alt='' />
          </div>
          <div>
            <img style={{ height: "410px" }} src={carousel4} alt='' />
          </div>
          <div>
            <img style={{ height: "410px" }} src={carousel5} alt='' />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurWorks;
