import React from "react";
import { Link } from "react-router-dom";

const MoreCard = ({ img, description }) => {
	return (
		<div className="more_card_holder">
			<Link to="" className="card_link_wrapper">
				<figure>
					<img src={img} alt="products from M&S" />
				</figure>
				<p>{description}</p>
			</Link>
		</div>
	);
};

export default MoreCard;
