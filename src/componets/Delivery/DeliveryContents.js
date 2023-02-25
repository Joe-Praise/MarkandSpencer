import React from "react";
import { Link } from "react-router-dom";

const DeliveryContents = ({ img, text, alt }) => {
	return (
		<Link to="" className="links compcard">
			<div className="deliveryCompCard">
				<figure>
					<img src={img} alt={alt} />
				</figure>
				<p>{text}</p>
			</div>
		</Link>
	);
};

export default DeliveryContents;
