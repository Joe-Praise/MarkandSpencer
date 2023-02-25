import React from "react";
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import CartProductStructure from "../Cart/CartProductStructure";

const Cart = () => {
	return (
		<div>
			<Navigation />
				<div className="cart_container">
					<CartProductStructure />
				</div>
			<Footer />
		</div>
	);
};

export default Cart;
