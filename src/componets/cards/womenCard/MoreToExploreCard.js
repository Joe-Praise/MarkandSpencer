import React from 'react'
import { Link } from 'react-router-dom';
const MoreToExploreCard = ({img, description, redirect}) => {
  return (
		<div className="product_container">
			<figure>
				<Link to="/shop">
					<img src={img} alt="product portrait" />
				</Link>
			</figure>
			<div className="product_details">
				<p>{description}</p>
				<Link to="/shop" className="product_redirect">
					{redirect}
				</Link>
			</div>
		</div>
  );
}

export default MoreToExploreCard