import React from "react";
import img1 from "../../images/homePage/nav_inspire_pic_1.webp";
import img2 from "../../images/homePage/nav_inspire_pic_2.webp";
import img3 from "../../images/homePage/nav_lingerie_pic_1.webp";
import img4 from "../../images/homePage/nav_inspire_pic_4.webp";
import img5 from "../../images/homePage/nav_inspire_pic_5.webp";
import { Link } from "react-router-dom";
import InspireMeDropDownComponent from "./InspireMeDropDownComponent";

const InspireMeDropDown = () => {
	return (
		<li className="links_section">
			<Link to="/" className="links">
			Inspire Me
			</Link>
			<ul className="populate_links_container">
				<ul className="inspireMe_img_Container">
					<InspireMeDropDownComponent
						p1="M&S LIVE"
						img={img1}
						imgCaption="NEW LAUNCHES, HOT TRENDS, EXPERT TIPS"
						p2="Join our exclusive live shows"
						link="WATCH & SHOP"
					/>

					<InspireMeDropDownComponent
						p1="EXPERT ADVICE"
						img={img2}
						imgCaption="BRA FITTING TIPS "
						p2="Discover the perfect bra whatever your shape"
						link="FIND YOUR FIT"
					/>

					<InspireMeDropDownComponent
						p1="GIFT IDEAS"
						img={img3}
						imgCaption="TOP 10 VALENTINE’S DAY GIFTS "
						p2="Thoughtful ideas to treat your love"
						link="GET INSPIRED"
					/>

					<InspireMeDropDownComponent
						p1="HAIRCARE HEROES"
						img={img4}
						imgCaption="GOOD HAIR DAYS, GUARANTEED"
						p2="Banish frizz, define curls, and fight humidity"
						link="FIND YOUR FAVOURITE"
					/>

					<InspireMeDropDownComponent
						p1="STYLE REFRESH"
						img={img5}
						imgCaption="DENIM REMIX"
						p2="Get more mileage out of your jeans"
						link="SEE THE LOOKS"
					/>
				</ul>
			</ul>
		</li>
	);
};

export default InspireMeDropDown;
