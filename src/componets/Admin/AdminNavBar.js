import React from 'react'
import NavLinks from './NavLinks';
import TopNav from './TopNav'

const AdminNavBar = () => {
  return (
		<div className="desktop_nav_bar admin">
          <TopNav />
          <NavLinks/>
		</div>
  );
}

export default AdminNavBar