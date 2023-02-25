import React from 'react'
import { Link } from 'react-router-dom';
const SingleProductTopLinks = () => {
  return (
		<div className="SingleProductTopLinks">
			<Link to="/" className="links">
				Home
			</Link>
			/
			<Link to="/women" className="links">
				Women
			</Link>
			/
			<Link to="/shop" className="links">
				Day to Night Outfits
			</Link>
		</div>
  );
}

export default SingleProductTopLinks