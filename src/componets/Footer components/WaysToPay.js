import React from "react";
import WaysToPayOptions from "./WaysToPayOptions";
import logo1 from "../../images/homePage/M&S_Card.svg";
import logo2 from "../../images/homePage/visa.svg";
import logo3 from "../../images/homePage/Mastercard.svg";
import logo4 from "../../images/homePage/amex.svg";
import logo5 from "../../images/homePage/ApplePay.svg";
import logo6 from "../../images/homePage/Paypal.svg";
import SpreadTheCost from "./SpreadTheCost";

const WaysToPay = () => {
	return (
		<div className="Waystopay_spreadcost_container">
			<div className="waystopay_container">
				<h3>ways to pay</h3>
				<div className="waystopay_collection">
					<WaysToPayOptions img={logo1} alt="M&S card" />
					<WaysToPayOptions img={logo2} alt="Visa" />
					<WaysToPayOptions img={logo3} alt="Master Card" />
					<WaysToPayOptions img={logo4} alt="Amex" />
					<WaysToPayOptions img={logo5} alt="Apple Pay" />
					<WaysToPayOptions img={logo6} alt="Paypal" />
				</div>
			</div>
			<div className="spreadthecost_container">
				<h3>Spread the cost</h3>
				<div className="spreadthecost_collection">
					<SpreadTheCost />
				</div>
			</div>
		</div>
	);
};

export default WaysToPay;
