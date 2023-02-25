import React from "react";
import { Link } from "react-router-dom";
const NavLinks = () => {
	return (
		<nav role="navigation">
			<ul className="desktop_nav_links line2 admin_nav_links">
				<li className="links_section">
					<Link to="/secureadmin/dashboard" className="links">
						Dash Board
					</Link>
				</li>
				<li className="links_section">
					<Link to="/secureadmin/products" className="links">
						Products
					</Link>
				</li>
				<li className="links_section">
					<Link to="/secureadmin/users" className="links">
						Users
					</Link>
				</li>
				<li className="links_section">
					<Link to="/secureadmin/createproduct" className="links">
						Create Product
					</Link>
				</li>
				<li className="links_section">
					<Link to="/secureadmin/createuser" className="links">
						Create User
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavLinks;
