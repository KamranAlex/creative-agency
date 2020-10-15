import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const handleBlur = (e) => {};
  const handleMakeAdmin = () => {};

  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Make Admin</h4>
        </div>
        <div className='admin-form col-md-7 pt-3'>
          <form action='' onSubmit={handleMakeAdmin}>
            <div className='form-group'>
              <label htmlFor='Name'>Name</label>
              <input
                onBlur={handleBlur}
                type='text'
                name='name'
                className='form-control'
                placeholder='Admin Name'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Email'>Email</label>
              <input
                onBlur={handleBlur}
                type='email'
                name='email'
                className='form-control'
                placeholder='example@email.com'
                required
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-success'>
                Add Admin <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
