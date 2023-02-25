import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/homePage/M&S_LOGO.svg";
import { IoBagOutline } from "react-icons/io5";
import Dropdown from "./Dropdown";
import NavLastLine from "./NavLastLine";
import DesktopInput from "./DesktopInput";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import ToolTipSignUp from "./ToolTipSignIn";
const NavComponets = () => {
	const { cart } = useContext(AppContext);
	return (
		<div className="desktop_nav_bar">
			<div className="Line1">
				<figure className="desktop_logo">
					<Link to="/" className="desktop_nav_links">
						<img src={Logo} alt="M&S Logo" />
					</Link>
				</figure>

				<DesktopInput />

				<div className="signin">
					<div className="signin_pop_toggle">
						<Link
							to="/signin"
							className="desktop_nav_links links"
						>
							Sign in
						</Link>
						<ToolTipSignUp />
					</div>
					<div className="cart_icon_container">
						<Link
							to="/cart"
							className="desktop_nav_links cartCount"
							data-count={cart.length}
						>
							<IoBagOutline className="cartIcon"/>
						</Link>
					</div>
				</div>
			</div>
			<Dropdown />
			<NavLastLine />
		</div>
	);
};

export default NavComponets;
