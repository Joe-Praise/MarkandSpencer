import React from 'react'
import { Link } from 'react-router-dom';

const BrandsCard = ({alt, img}) => {
  return (
	<Link to="" className="links_to_brands">
		<img src={img} alt={alt} />
	</Link>
  );
}

export default BrandsCard