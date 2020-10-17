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
    fetch(`https://arcane-meadow-55145.herokuapp.com/serviceOrder/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserOrder(data[0].title);
      });
  }, []);

  const [orderData, setOrderData] = useState({});
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleBlur = (e) => {
    const newData = { ...orderData };
    newData.name = loggedInUser.name;
    newData.email = loggedInUser.email;
    newData.status = "pending";
    newData.project = userOrder.toString();
    newData[e.target.name] = e.target.value;
    setOrderData(newData);
  };

  const handleOrderSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", orderData.name);
    formData.append("email", orderData.email);
    formData.append("project", orderData.project);
    formData.append("details", orderData.details);
    formData.append("price", orderData.price);
    formData.append("status", orderData.status);

    fetch("https://arcane-meadow-55145.herokuapp.com/postOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push("/dashboard/myServices");
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
  };
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 col-sm-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Order</h4>
        </div>
        <div className='order-form mx-5 col-md-6 p-5'>
          <form action='' onSubmit={handleOrderSubmit}>
            <div className='form-group'>
              <input
                onBlur={handleBlur}
                type='text'
                name='name'
                className='form-control'
                value={loggedInUser.name}
                required
              />
            </div>
            <div className='form-group'>
              <input
                onBlur={handleBlur}
                type='email'
                name='email'
                className='form-control'
                value={loggedInUser.email}
                required
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
                <input
                  onChange={handleFileChange}
                  type='file'
                  name='file'
                  required
                />
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
