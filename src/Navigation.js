import React from "react";
import Navbar from "./componets/Destop_nav bar/Navbar";
import Hambuger from "./componets/Mobile_SubComponents/homePage/Hambuger";
import Search from "./componets/Mobile_SubComponents/homePage/Search";
import TextSlide from "./componets/Mobile_SubComponents/TextSlide";
const Navigation = () => {
	return (
		<div className="position-relative">
			{/* for mobile devices */}
			<header className="mobile_screen" role="banner">
				<TextSlide />
				<Hambuger />
				<Search />
			</header>


			{/* for tablet and desktop */}
			<header className="Tablet-desktop_screen" role="banner">
				<TextSlide />
				<Navbar/>
			</header>
		</div>
	);
};

export default Navigation;
