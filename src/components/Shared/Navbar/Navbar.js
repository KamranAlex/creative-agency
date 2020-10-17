import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import mainLogo from "../../../images/logos/logo.png";
import { UserContext } from "../../../App";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
    const decodedToken = jwt_decode(token);
    // get current time
    const currentTime = new Date().getTime() / 1000;
    // compare the expiration time with the current time
    // will return false if expired and will return true if not expired
    return decodedToken.exp > currentTime;
  };
  return (
    <nav class='container navbar navbar-expand-lg navbar-light pt-2'>
      <Link class='navbar-brand' to='/'>
        <img src={mainLogo} alt='' />
      </Link>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarNav'>
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <Link class='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/'>
              Our Portfolio
            </Link>
          </li>

          <li class='nav-item'>
            <Link class='nav-link' to='/'>
              Contact Us
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/dashboard'>
              Dashboard
            </Link>
          </li>
          {loggedInUser.email || isLoggedIn() ? (
            <li class='nav-item'>
              <Link class='nav-link' to='/'>
                <span
                  onClick={() => {
                    setloggedInUser({});
                    sessionStorage.setItem("token", "");
                  }}
                  className='logout-btn'
                >
                  LogOut
                </span>
              </Link>
              <small className='text-center text-success'>
                {loggedInUser.name}
              </small>
            </li>
          ) : (
            <li class='nav-item'>
              <Link class='nav-link' to='/login'>
                <span className='login-btn'>Login</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
