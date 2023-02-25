import React from 'react'
import { Link } from 'react-router-dom';

const RecentlyViewedCard = ({ img, title, description,price}) => {
	return (
		<div className="recentlyViewed_card">
			<p className="remove">Remove</p>
			<Link to="" className="recentlyViewed_card_link">
				<figure>
					<img src={img} alt="recently viewed item" />
				</figure>
				<p className="price">{price}</p>
				<p className="title">{title}</p>
				<p>{description}</p>
				<p className="rating">
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
				</p>
			</Link>
		</div>
	);
};

export default RecentlyViewedCard;