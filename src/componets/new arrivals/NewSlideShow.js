import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/homePage/new_arrival_gif_1.webp";
import smallCard1 from "../../images/homePage/new_arrival_1.webp";
import smallCard2 from "../../images/homePage/new_arrival_2.webp";
import MsFavouritesCard from "../cards/MsFavourites/MsFavouritesCard";

const NewSlideShow = () => {
	return (
		<div className="NewArrival_container">
			<div className="NewArrival_card_container">
				<p>Don't miss...</p>
				<h2>New arrivals</h2>

				<Link to="">
				<div className="working">
					<img
						src={img1}
						alt="deep blue and white dress"
						className="newArrivalImage"
					/>
				</div>
				</Link>
				
				<div className="product_details">
					<Link to="" className="product_link">
						Shop women’s new in
						<i className="fa-solid fa-arrow-right"></i>
					</Link>
				</div>
			</div>
			<div className="newArrival_cards_container">
				<MsFavouritesCard img={ smallCard1} description="Women" description2="Luxurious Silk for now" redirect="Women's cashmere" />
				<MsFavouritesCard img={smallCard2} description="Women" description2="Next level comfort" redirect="Women's bra"/>
			</div>
		</div>
	);
};

export default NewSlideShow;
