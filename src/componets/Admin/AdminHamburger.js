import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/homePage/M&S_LOGO.svg";
import hambuger from "../../images/homePage/hambuger_icon.png";
import testImg from "../../images/womenPage/slider_3.webp";
import AdminMobileDropDown from "./AdminMobileDropDown";

const AdminHamburger = () => {
  const [showMenu, setShowMenu]= useState(false);
  const OpenMenu = () => {
    setShowMenu(true);
    document.body.style.overflowY= 'hidden'
  };
  
  const hideMenu = () =>{
    setShowMenu(false);
    document.body.style.overflowY= 'auto'
  }
  
  return (
    <div className="Amin_nav_with_sidebar">

        {showMenu && <AdminMobileDropDown closeMenu={hideMenu}/>}
      <div className="mobile-admin_nav_container">
        <div className="hambuger_container admin_hambuger_btn">
          <label htmlFor="burger">
          <img
            src={hambuger}
            alt="hambuger menu"
            className="hambuger"
            onClick={OpenMenu}
          />
          </label>
          <input type="checkbox" id="burger" />
        </div>
        <figure className="ms_logo">
          <Link to="/secureadmin/dashboard" className="">
            <img src={Logo} alt="M&S Logo" />
          </Link>
        </figure>

        <div className="admin_Login">
          <figure>
            <img src={testImg} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AdminHamburger;
