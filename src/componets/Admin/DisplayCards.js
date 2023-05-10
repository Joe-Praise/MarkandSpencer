import React from "react";
import noOfProductsInCart from "../../images/adminPage/no._of_products_in_cart.webp";
import noOfUsers from "../../images/adminPage/no._of_users.webp";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { Link } from "react-router-dom";
const DisplayCards = () => {
	const { users , products, cart} = useContext(AppContext);
	return (
		<section className="display">
			<div className="display_card">
				<Link to='/secureadmin/products'>
				<figure className="card_img product">
					<img src={noOfUsers} alt="" />
				</figure>
				<div className="text">
					<h4>Total No. of Products</h4>
					<p className="no_of_products">{products.length}</p>
				</div>
				</Link>
			</div>
			<div className="display_card">
				<Link to="/secureadmin/users">
				<figure className="card_img users">
					<img
						src={noOfUsers}
						alt="illustration of a group of individuals"
					/>
				</figure>
				<div className="text">
					<h4>Total No. of Users</h4>
					<p className="no_of_users">{users.length}</p>
				</div>
				</Link>
			</div>
			<div className="display_card">
				<Link>
				<figure className="card_img">
					<img
						src={noOfProductsInCart}
						alt="illustration of items in a cart"
					/>
				</figure>
				<div className="text">
					<h4>List of Products in Cart</h4>
					<p className="products_in_cart">{cart.length}</p>
				</div>
				</Link>
			</div>
		</section>
	);
};

export default DisplayCards;
