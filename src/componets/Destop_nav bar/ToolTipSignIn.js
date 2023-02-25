import React from "react";
import { Link } from "react-router-dom";
import {
  IoPersonOutline,
	IoPersonAddOutline,
} from "react-icons/io5";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { GiLaserSparks } from "react-icons/gi";
import sparkPay from "../../images/homePage/NavSparksPay.webp";
const ToolTipSignIn = () => {
	return (
		<div className="sign_inPopup">
			<h3>Sign in or create an account:</h3>
			<ul className="unordered">
				<li>for faster checkout</li>
				<li>to unlock personalised Sparks offers</li>
				<li>to access order history and track deliveries</li>
			</ul>

			<div className="plistContainer">
				<p className="plist">
          <Link to="/signin" className="links">
            <IoPersonOutline className="icons" />
            Sign in
					</Link>
				</p>
				<p className="plist">
					<Link to="/signup" className="links">
						<IoPersonAddOutline className="icons" />
						Create an account
					</Link>
				</p>
				<p className="plist">
					<Link to="/" className="links">
						<TbTruckDelivery className="icons" />
						Guest oreder tracking
					</Link>
				</p>
				<p className="plist">
					<Link to="/" className="links"><TbTruckReturn className="icons"/>Guest order return</Link>
				</p>
				<p className="plist">
					<Link to="/" className="links"><GiLaserSparks className="icons"/>Sparks</Link>
				</p>
				<p className="plist">
					<Link to="" className="links"><img src={sparkPay} alt="sparkPay" className="icons"/> Spark Pay</Link>
				</p>
			</div>
		</div>
	);
};

export default ToolTipSignIn;
