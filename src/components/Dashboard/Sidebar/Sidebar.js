import React from "react";
import { Link } from "react-router-dom";
import {
  faCartPlus,
  faCommentAlt,
  faPlusSquare,
  faSignOutAlt,
  faTasks,
  faTruck,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import dashLogo from "../../../images/logos/logo.png";

const Sidebar = () => {
  return (
    <div
      className='sidebar d-flex flex-column justify-content-between col-md-2  px-4 py-3 '
      style={{ height: "100vh" }}
    >
      <ul className='list-unstyled'>
        <div className='sidebar-logo '>
          <img src={dashLogo} alt='' />
        </div>
        <li>
          <Link to='/dashboard/order' className='dash-menu'>
            <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/myServices' className='dash-menu'>
            <FontAwesomeIcon icon={faTruck} /> <span>Services</span>
          </Link>
        </li>

        <li>
          <Link to='/' className='dash-menu'>
            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
          </Link>
        </li>
        <li>
          <Link to='/' className='dash-menu'>
            <FontAwesomeIcon icon={faTasks} /> <span>Service List</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/addService' className='dash-menu'>
            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
          </Link>
        </li>
        <li>
          <Link to='/' className='dash-menu'>
            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to='/' className='dash-logout'>
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
