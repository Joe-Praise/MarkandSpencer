import React from "react";
import { Link } from "react-router-dom";
const GridLayout = ({ img, text1, text2 }) => {
    return (
		<div className="grid_comp">
			<Link to="/shop" className="links">
				<figure>
					<img src={img} alt="link to women shop" />
					<figcaption>
						<h2>{text1}</h2>
						<p>
							{text2} <span className="p_arrow">→</span>
						</p>
					</figcaption>
				</figure>
			</Link>
		</div>
	);
};

export default GridLayout;
