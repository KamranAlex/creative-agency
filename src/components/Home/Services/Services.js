import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import loading from "../../../images/loading.gif";

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
        {services.length < 1 ? (
          <div className='col-md-12 text-center'>
            <img src={loading} alt='' />
            <div className='text-center'>
              <small className='text-info'>Loading, Please wait...</small>
            </div>
          </div>
        ) : (
          services.map((service) => {
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
          })
        )}
      </div>
    </section>
  );
};

export default Services;
