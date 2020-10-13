import React from "react";
import { Link } from "react-router-dom";
import googleICON from "../../images/logos/googleICON.png";
import logo from "../../images/logos/logo.png";
import "./Login.css";

const Login = () => {
  return (
    <div className='container text-center mt-3'>
      <img className='logoIMG' src={logo} alt='' />
      <div className='login-container'>
        <div className='login-text'>
          <h1>Log In</h1>
        </div>
        <button className='google-login d-flex justify-content-between '>
          <div className='social-icon '>
            <img src={googleICON} alt='' />
          </div>
          <div className='social-text '>
            <p> Continue With Google</p>
          </div>
        </button>
        <p>
          Dont have an Account?{" "}
          <span className='text-info'>
            <Link to='/login'>Create an account</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
