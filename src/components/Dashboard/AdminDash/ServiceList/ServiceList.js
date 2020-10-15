import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./ServiceList.css";

const ServiceList = () => {
  const handleStatusChange = () => {
    var x = document.getElementById("status").selectedIndex;
    var color = document.getElementsByTagName("option")[x].style.color;
    document.getElementById("status").style.color = color;
  };
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Review</h4>
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
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>
                  <select
                    id='status'
                    onChange={handleStatusChange}
                    style={{ color: "#FF4545" }}
                  >
                    <option
                      value='pending'
                      style={{ color: "#FF4545" }}
                      selected='selected'
                    >
                      Pending
                    </option>
                    <option value='onGoing' style={{ color: "#FFBD3E" }}>
                      Ongoing
                    </option>
                    <option value='done' style={{ color: "#009444" }}>
                      Complete
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
