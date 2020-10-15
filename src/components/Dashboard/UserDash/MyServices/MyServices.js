import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import webMobile from "../../../../images/icons/service1.png";
import graphicsDesign from "../../../../images/icons/service2.png";
import "./MyServices.css";
import { UserContext } from "../../../../App";
import OrderdServices from "./OrderdServices";

const MyServices = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getServiceByEmail?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data);
      });
  }, []);

  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>My Services</h4>
        </div>
        <div className='row px-5 py-3'>
          {orderData.map((order) => (
            <OrderdServices order={order}></OrderdServices>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
