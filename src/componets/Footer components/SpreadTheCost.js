import React from "react";
import BrandsCard from "../brands/BrandsCard";
import img1 from "../../images/homePage/M&SCreditCard.svg";
import img2 from "../../images/homePage/NavSparksPay.webp";
import img3 from "../../images/homePage/clearpay-flout-logo-new.svg";
import img4 from "../../images/homePage/APR.svg";
import img5 from "../../images/homePage/pay-in-3-logo.svg";

const SpreadTheCost = () => {
	return (
		<div className="spreadthecost_collection">
			<div className="img_holder">
				<BrandsCard img={img1} alt="M&S credit card logo" />
			</div>
			<div className="img_holder">
				<BrandsCard img={img2} alt="Spark Pay logo" />
			</div>
			<div className="img_holder">
				<BrandsCard img={img3} alt="Clear Pay logo" />
			</div>
			<div className="img_holder">
				<BrandsCard img={img4} alt="APR furniture financing" />
			</div>
			<div className="img_holder">
				<BrandsCard img={img5} alt="Pay pal, pay in 3" />
			</div>
		</div>
	);
};

export default SpreadTheCost;
