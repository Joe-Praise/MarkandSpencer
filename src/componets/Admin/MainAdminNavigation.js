import React from "react";
import { Outlet } from "react-router-dom";
import TextSlide from "../Mobile_SubComponents/TextSlide";
import AdminHamburger from "./AdminHamburger";
import Search from "../Mobile_SubComponents/homePage/Search";
import AdminNavBar from "./AdminNavBar";
import Breadcrumbs from "../../Helper/Breadcrumbs";

const MainAdminNavigation = () => {
  return (
    <>
      <header className="mobile_screen" role="banner">
        <TextSlide />
        <AdminHamburger />
        <Search />
      </header>
      <AdminNavBar />
      <Breadcrumbs/>
      <Outlet />
    </>
  );
};

export default MainAdminNavigation;
