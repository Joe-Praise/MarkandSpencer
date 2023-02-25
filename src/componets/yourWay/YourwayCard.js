import React from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";
const YourwayCard = ({ img, username }) => {
	return (
		<div className="yourway_card">
			<Link to="" className="yourway_link">
				<figure>
					<img src={img} alt="" />
					<figcaption>
						<Btn
							value="Shop Now"
							shade="white"
							bg="transparent"
							border="white"
						/>
						<p>@{username}</p>
					</figcaption>
				</figure>
			</Link>
		</div>
	);
};

export default YourwayCard;
