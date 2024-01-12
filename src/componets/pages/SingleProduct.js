import React from 'react';
import SingleProductCard from '../single product/SingleProductCard';
import SingleProductReview from '../single product/SingleProductReview';
import SingleProductTopLinks from '../single product/SingleProductTopLinks';
import WaysToWow from '../cards/womenCard/ways_to_wow/WaysToWow';

const SingleProduct = () => {
	return (
		<section>
			<div className='singleProduct'>
				<SingleProductTopLinks />
				<SingleProductCard />
				<WaysToWow />
				<SingleProductReview />
			</div>
		</section>
	);
};

export default SingleProduct;
