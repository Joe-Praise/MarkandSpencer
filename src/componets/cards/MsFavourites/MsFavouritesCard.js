import React from 'react'
import { Link } from 'react-router-dom'
const MsFavouritesCard = ({img, description,description2, redirect,redirect2}) => {
  return (
		<div className="product_container">
			<figure>
				<Link to="/women">
					<img src={img} alt="product portrait" />
				</Link>
			</figure>
			<div className="product_details">
				<p>{description}</p>
				<p>{description2}</p>
				<Link to="/women" className="product_link">
					{redirect}
					<i className="fa-solid fa-arrow-right"></i>
				</Link>
				<Link to="/women" className="product_link redirect">
					{redirect2}
				</Link>
			</div>
		</div>
  );
}

export default MsFavouritesCard