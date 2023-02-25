import React from 'react'
import { Link } from 'react-router-dom';
const NavLastLine = () => {
  return (
		<div className="lastLineLinks">
			<Link to="" className="nav_unerline_links">
				Free store collection
			</Link>
			|
			<Link to="" className="nav_unerline_links">
				Free delivery when you spend £60
			</Link>
			|
			<Link to="" className="nav_unerline_links">
				Free returns for online orders
			</Link>
		</div>
  );
}

export default NavLastLine