import React from 'react'
import DeliveryContents from './DeliveryContents';
import img1 from "../../images/homePage/free_collection_icon.webp";
import img2 from "../../images/homePage/free_delivery_icon.webp";
import img3 from "../../images/homePage/free_return_icon.webp";


const Delivery = () => {
  return (
		<div className="delivery_container">
			<h2>HASSLE-FREE DELIVERY AND RETURNS</h2>
			<div className="delivery_content">
				<DeliveryContents
					img={img1}
					text="Free store collection"
					alt="image representation of M&S store "
				/>
				<DeliveryContents
					img={img2}
					text="Free delivery when you spend £60"
					alt="image representation of a delivery truck"
				/>
				<DeliveryContents
					img={img3}
					text="Free returns for online orders"
					alt="image representation of M&S store "
				/>
			</div>
		</div>
  );
}

export default Delivery