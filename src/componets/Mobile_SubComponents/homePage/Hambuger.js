import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import MobileList from './MobileList';
import ms_logo from "../../../images/homePage/M&S_LOGO.svg";
import mobile_bg from "../../../images/homePage/mobile_nav_img.webp";
import ms from "../../../images/homePage/M&S_Card.svg"
import location from "../../../images/homePage/location.icon.svg";
import sparks from "../../../images/homePage/nav-sparks_logo.svg"
import uk from "../../../images/homePage/union_jack_logo.webp"
import { useState } from 'react';
const Hambuger = () => {
	const style = {
		position: "fixed",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		opacity:"0.3",
		zIndex: "3" 
	}
	const [openNav, isNavOpen] = useState(false);
	const openMenu = (e) => {
		let target = e.target.parentElement.parentElement.nextSibling;
		target.style.transform = "translateX(0)";
		isNavOpen(true);
	}

	if (openNav) {
		document.body.classList.add("overflowY_hidden");
	} else {
		document.body.classList.remove("overflowY_hidden");
	}
	
	const btnClose = (e) => {
		let btn_close = e.target.nextSibling;
		btn_close.style.transform = "translateX(-280px)";
		isNavOpen(false);
	}
	const hideMenu = (e)=> {
		let target = e.target.parentElement.parentElement.parentElement;
		isNavOpen(false)
		target.style.transform = "translateX(-280px)";
	}
	// components form mobile nav bar
	return (
		<div className="mobile_nav_container">

			{/* nav bar main display contents */}
			<MobileNav openMenu={openMenu} />
			
			{openNav === true ? <div style={style} className="escape_burger" onClick={btnClose}></div> : null}
			
			{/* hamugerMenu navigation */}

			<div className="nav_container">
				<nav role="navigation">
					<div>
						<figure className="ms_logo">
							<img src={ms_logo} alt="M&S Logo" />
						</figure>
						<i className="fa-solid fa-x" onClick={hideMenu}></i>
					</div>
					<figure className="mobile_nav_bg">
						<img
							src={mobile_bg}
							alt="pink background with 'Love is all around. Explore our valantine's day Shop' on it."
						/>
					</figure>

					{/* nav links */}
					<MobileList/>

					<ul className="bottom_nav_links">
						<li>
							<img src={ms} alt="" />
							<Link to="" className="links">
								M&S Bank
							</Link>
						</li>
						<li>
							<img src={uk} alt="" />
							<Link to="" className="links">
								United Kingdom (£GBP)
							</Link>
						</li>
					</ul>
				</nav>
				<div className="btn_nav_links">
					<div>
						<Link to="" className="links">
							<img src={location} alt="find store link" />
							<span> Find Store</span>
						</Link>
					</div>
					<div>
						<Link to="" className="links">
							<img src={sparks} alt="sparks link" />
							<span>Sparks</span>
						</Link>
					</div>
				</div>

				<div className="help_links">
					<p>
						<Link to="" className="links">
							Help
						</Link>
					</p>
					<p>
						<Link to="" className="links">
							Contact Us
						</Link>
					</p>
					<p>
						<Link to="" className="links">
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hambuger