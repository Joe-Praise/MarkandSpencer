import React from 'react';
import { Link } from "react-router-dom";
import ms_logo from "../../../images/homePage/M&S_LOGO.svg";
import hambuger from "../../../images/homePage/hambuger_icon.png";
import { IoBagOutline } from "react-icons/io5";
import { useContext } from 'react';
import { AppContext } from '../../Context/Context';
const Mobile_nav = ({ openMenu }) => {
	const { cart } = useContext(AppContext);
  return (
		<div className="mobile_nav">
			<div className="hambuger_container" onClick={openMenu}>
				<img src={hambuger} alt="hambuger menu" className="hambuger" />
			</div>
		  <figure className="ms_logo">
			  <Link to='/'>
				<img src={ms_logo} alt="M&S Logo"/>
			  </Link>
			</figure>
			<div className="mobile_store">
				<p className="p1">
					<Link to="/signin" className="links">
						Sign in
					</Link>
				</p>
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
  );
}

export default Mobile_nav