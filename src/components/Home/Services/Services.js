import React, { useEffect, useState } from "react";
import "./Services.css";
import webMobile from "../../../images/icons/service1.png";
import graphicsDesign from "../../../images/icons/service2.png";
import webDev from "../../../images/icons/service3.png";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <section className='container services-section mb-5'>
      <h3 className='text-center mb-5 service-awesome'>
        Provide Awesome <span>Services</span>
      </h3>
      <div className='row'>
        {services.map((service) => {
          return (
            <div className='col-md-4 mb-3'>
              <div className='text-center service-card'>
                <img
                  src={`data:image/png;base64,${service.image.img}`}
                  className=''
                  alt='...'
                />
                <Link to={`/dashboard/order/${service._id}`}>
                  <h5 className='service-title'>{service.title}</h5>
                </Link>
                <p className='service-text'>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
