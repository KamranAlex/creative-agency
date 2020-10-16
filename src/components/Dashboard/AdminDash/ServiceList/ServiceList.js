import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./ServiceList.css";

const ServiceList = () => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleStatusChange = (e) => {
    var x = document.getElementById("status").selectedIndex;
    var color = document.getElementsByTagName("option")[x].style.color;
    document.getElementById("status").style.color = color;
    setSelectedOption({ status: e.target.value });
  };
  //Update Status
  const handleStatusUpdate = (id) => {
    console.log(selectedOption);
    fetch("https://arcane-meadow-55145.herokuapp.com/updateStatus?id=" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedOption),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://arcane-meadow-55145.herokuapp.com/getAllService")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Services List</h4>
        </div>
        <div className='services-table px-2 py-4'>
          <table className='table table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Email ID</th>
                <th scope='col'>Project Name</th>
                <th scope='col'>Project Details</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order) => {
                return (
                  <tr>
                    <th scope='row'>{order.name}</th>
                    <td>{order.email}</td>
                    <td>{order.project}</td>
                    <td>{order.details}</td>
                    <td>
                      <form
                        onSubmit={() => {
                          handleStatusUpdate(order._id);
                        }}
                        action=''
                        className='d-flex'
                      >
                        <select
                          id='status'
                          onChange={handleStatusChange}
                          style={{ color: "#FF4545" }}
                          value={order.status}
                        >
                          <option value='pending' style={{ color: "#FF4545" }}>
                            Pending
                          </option>
                          <option value='ongoing' style={{ color: "#FFBD3E" }}>
                            Ongoing
                          </option>
                          <option value='complete' style={{ color: "#009444" }}>
                            Complete
                          </option>
                        </select>

                        <button
                          type='submit'
                          className='btn-success'
                          style={{
                            height: "50%",
                            borderRadius: "6px",
                            fontSize: "small",
                          }}
                        >
                          Update
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
