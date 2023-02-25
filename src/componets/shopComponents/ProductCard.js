import React from "react";
import { useContext } from "react";
// import Product from "./ProductData";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/Context";
const ProductCard = () => {
	const { products } = useContext(AppContext); 
	return (
		<div>
			{products.length ? (
				<div className="Product_container">
					{products.map((card) => (
						<div className="product_card" key={card._id}>
							<Link to={`/product/${card._id}`}>
								<figure>
									<img
										src={`http://159.65.21.42:9000${card.image}`}
										alt={card.description}
									/>
								</figure>
							</Link>
							<Link to={`/product/${card._id}`} className="links">
								<p>£{card.price.toFixed(2)}</p>
							</Link>
							<p className="collection">
								<Link
									to={`/product/${card._id}`}
									className="links"
								>
									{card.name}
								</Link>
							</p>
							<p className="description">
								<Link
									to={`/product/${card._id}`}
									className="links"
								>
									{card.description}
								</Link>
							</p>
						</div>
					))}
				</div>
			) : (
				<div className="isLoading">🚀</div>
			)}
		</div>
	);
};

export default ProductCard;
