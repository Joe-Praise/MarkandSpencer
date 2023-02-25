import React from 'react'
import { Link } from "react-router-dom";
import DeliveryContents from "../Delivery/DeliveryContents";
import img from "../../images/homePage/free_delivery_icon.webp";
import paypal from "../../images/homePage/Paypal.svg";

const SingleProductFindInStore = () => {
  return (
		<div className="find_in_store_container">
			<Link to="" className="links find_in_store">
				<i className="fa-solid fa-location-dot"></i>
				<p>FIND IN STORE</p>
			</Link>

			<DeliveryContents
				img={img}
				text="Free standard delivery on orders over £60"
				alt="image representation of a delivery truck"
			/>

			<p className="pay_pal">
				Interest-free payments available on orders between £30.00 -
				£2000.00 with <img src={paypal} alt="" />
			</p>
		</div>
  );
}

export default SingleProductFindInStore