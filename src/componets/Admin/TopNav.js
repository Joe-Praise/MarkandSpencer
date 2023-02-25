import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/homePage/M&S_LOGO.svg";
import testImg from "../../images/womenPage/slider_3.webp";
import DesktopInput from "../Destop_nav bar/DesktopInput";

const TopNav = () => {
	return (
		<div className="Line1">
			<figure className="desktop_logo">
				<Link to="/" className="desktop_nav_links">
					<img src={Logo} alt="M&S Logo" />
				</Link>
			</figure>

			<DesktopInput />

				<div className="admin_Login">
					<figure>
						<img src={testImg} alt="" />
					</figure>
					<div className="right" id="tooltip">
                            <div className="tooltip-arrow" />
                            {/* link the name  of the logged in acc */}
						<div className="tooltip-label">Name of logged in admin</div>
					</div>
				</div>
		</div>
	);
};

export default TopNav;
