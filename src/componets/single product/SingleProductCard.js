import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";

const SingleProductCard = () => {
	const { id } = useParams({});
	const [singleProduct, setSingleProduct] = useState({});
	const [review, setReview] = useState("");
	const [prodCode, setProdCode] = useState("");
	const {
		addToBag,
		isSize,
		setIsSize,
		quantity,
		isQty,
		setIsQty,
	} = useContext(AppContext);
	const size = [
		{
			size: "Select Size",
			value: "",
		},
		{
			size: "6",
			value: "6",
		},
		{
			size: "8",
			value: "8",
		},
		{
			size: "10",
			value: "10",
		},
		{
			size: "12",
			value: "12",
		},
		{
			size: "14",
			value: "14",
		},
		{
			size: "16",
			value: "16",
		},
		{
			size: "18",
			value: "18",
		},
		{
			size: "20",
			value: "20",
		},
		{
			size: "22",
			value: "22",
		},
		{
			size: "24",
			value: "24",
		},
	];
	const getProduct = () => {
		fetch(`http://159.65.21.42:9000/product/${id}`)
			.then((resp) => resp.json())
			.then((data) => {
				setSingleProduct(data);
			});
	};

	const getReview=()=>{
		let num = Math.floor(Math.random() * 100);
		setReview(num);
	}

	const getProductCode = () => {
		let prodCode = Math.random() * 0.9;
		setProdCode(prodCode);
	}

	useEffect(() => {
		getProduct();
		getReview();
		getProductCode();
	}, []);

	return (
		<div>
			{singleProduct._id ? (
				<div>
					<div className="singleProductSliderWrapper">
						<div className="singleProductSlider">
							<div className="singleProductImg">
								<img
									src={`http://159.65.21.42:9000${singleProduct.image}`}
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="info">
						<div className="review_price">
							<div className="review">
								<Link to="" className="link">
									{review} review
								</Link>
							</div>
							<div className="price">£{singleProduct.price.toFixed(2)}</div>
						</div>
						<div className="collection_section">
							<p className="new">New</p>
							<p className="collection">{singleProduct.name}</p>
							<p className="product_description">
								{singleProduct.description}
							</p>
							<p className="product_code">
								product code:TC{prodCode}PC
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="isLoading">🚀</div>
			)}

			<div className="emerald_freeStandard">
				<div className="emerald">
					<h2>Emerald</h2>
					<form className="push_to_cart">
						<div className="select_opt size">
							<label>SIZE</label>
							<select
								value={isSize}
								onChange={(e) => setIsSize(e.target.value)}
								id=""
							>
								{size.map((size) => (
									<option key={size.value} value={size.value}>
										{size.size}
									</option>
								))}
							</select>
						</div>
						<div className="select_opt qty">
							<select
								name=""
								id=""
								value={isQty}
								onChange={(e) => setIsQty(e.target.value)}
							>
								{quantity.map((qty) => (
									<option key={qty.value} value={qty.value}>
										{qty.qty}
									</option>
								))}
							</select>
						</div>
						<Link
							// if size is true go to cart page else remain on current page
							to={ isSize ? ("/cart") : ('')}
							type="button"
							className="add_to_bag links"
							onClick={()=> addToBag(singleProduct)}
						>
							Add to bag
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SingleProductCard;
