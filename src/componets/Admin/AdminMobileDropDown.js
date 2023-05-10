import React from "react";
import { Link } from "react-router-dom";

const AdminMobileDropDown = (props) => {
  return (
    <nav role="navigation" className='admin_mobile_dropdown'>
      <div className="backdrop" onClick={props.closeMenu}></div>
      <div className="admin_mobile_links">
      <ul>
        <li><i className="fa-solid fa-x" onClick={props.closeMenu}></i></li>
        <li onClick={props.closeMenu}>
          <Link to="/secureadmin/dashboard">
            Dash Board
          </Link>
        </li>
        <li onClick={props.closeMenu}>
          <Link to="/secureadmin/products">
            Products
          </Link>
        </li>
        <li onClick={props.closeMenu}>
          <Link to="/secureadmin/users">
            Users
          </Link>
        </li>
        <li onClick={props.closeMenu}>
          <Link to="/secureadmin/createproduct">
            Create Product
          </Link>
        </li>
        <li onClick={props.closeMenu}>
          <Link to="/secureadmin/createuser">
            Create User
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default AdminMobileDropDown;
