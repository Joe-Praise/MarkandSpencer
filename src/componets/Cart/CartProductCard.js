import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/Context";

const CartProductCard = () => {
	const {
		quantity,
		cart,
		changeQty,
		deleteCartItem,
		setCartQty,
	} = useContext(AppContext);

	return (
		<div className="cart_product_container">
			<div className="product_header">
				<div className="your_bag">
					<p>Your secure bag</p>
				</div>
				<div className="qty_subtotal">
					<p>Qty</p>
					<p>Subtotal</p>
				</div>
			</div>

			<div className="product">
				{cart.map((item) => {
					return (
						<div key={item._id}>
							<div className="cart_Product">
								<div className="left_cart_card">
									<figure>
										<img
											src={`http://159.65.21.42:9000${item.image}`}
											alt="Product illustration"
										/>
									</figure>
									<div className="description_size">
										<p className="collection">
											{item.name}
										</p>
										<p className="cart_description">
											{item.description}
										</p>
										<p className="cart_size">{item.size}</p>
										<p onClick={() => deleteCartItem(item)} className="hidden_remove">
											<i className="fa-solid fa-xmark"></i>
											<span className="hide text_decoration">
												Remove
											</span>
										</p>
									</div>
								</div>
								<div className="card_qty_subtotal">
									<select
										name=""
										id=""
										value={item.quantity}
										onClick={() => changeQty(item)}
										onChange={(e) => {
											setCartQty(e.target.value);
										}}
									>
										{quantity.map((qty) => (
											<option
												key={qty.value}
												value={qty.value}
											>
												{qty.qty}
											</option>
										))}
									</select>
									<p className="price">£{item.totalPrice}</p>
								</div>
							</div>
							<div className="cancel">
								<p className="save_for_later">
									<i className="fa-regular fa-heart"></i>
									<span className="hide">Save for later</span>
								</p>
								<p onClick={() => deleteCartItem(item)}>
									<i className="fa-solid fa-xmark"></i>
									<span className="hide text_decoration">
										Remove
									</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CartProductCard;
