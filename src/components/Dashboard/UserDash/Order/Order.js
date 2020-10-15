import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import "./Order.css";

const Order = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();
  const [userOrder, setUserOrder] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/serviceOrder/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserOrder(data[0].title);
      });
  }, []);

  const [orderData, setOrderData] = useState({});

  const handleBlur = (e) => {
    const newData = { ...orderData };
    newData.name = loggedInUser.name;
    newData.email = loggedInUser.email;
    newData.project = userOrder.toString();
    newData[e.target.name] = e.target.value;
    setOrderData(newData);
    console.log(newData);
  };

  const handleOrderSubmit = (e) => {
    fetch("http://localhost:5000/postOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/dashboard/myServices");
      });
    e.preventDefault();
  };
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Order</h4>
        </div>
        <div className='order-form col-md-6 p-5'>
          <form action='' onSubmit={handleOrderSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                className='form-control'
                value={loggedInUser.name}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-control'
                value={loggedInUser.email}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                name='project'
                className='form-control'
                value={userOrder}
              />
            </div>

            <div className='form-group'>
              <textarea
                onBlur={handleBlur}
                name='details'
                className='form-control'
                id=''
                cols='10'
                rows='4'
                placeholder='Project Details'
                required
              ></textarea>
            </div>

            <div className='form-group d-flex'>
              <input
                onBlur={handleBlur}
                type='text'
                name='price'
                className='form-control'
                placeholder='Price'
                required
              />
              <div className='upload-btn-wrapper ml-2'>
                <button class='upload-btn'>
                  Upload a file{" "}
                  <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon>
                </button>
                <input type='file' name='file' />
              </div>
            </div>
            <div className='form-group'>
              <button type='submit' className='footer-btn'>
                {" "}
                Place Order{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
