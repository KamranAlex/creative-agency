import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const MyServices = () => {
  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Services</h4>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
