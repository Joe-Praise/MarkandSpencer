import React from "react";
import { Link } from "react-router-dom";
import EscapeForWinterCard from "./EscapeForWinterCard";
import card1 from "../../../images/womenPage/Escape_card_1.jfif";
import card2 from "../../../images/womenPage/Escape_card_2.jfif";
import card3 from "../../../images/womenPage/Escape_card_3.jfif";
import card4 from "../../../images/womenPage/Escape_card_4.jfif";
import card5 from "../../../images/womenPage/Escape_card_5.jfif";
import card6 from "../../../images/womenPage/Escape_card_6.jfif";
import gif from "../../../images/womenPage/outfit-gif-image.gif";

const EscapeForWinter = () => {
	return (
		<div className="escape_container">
			<div className="gif_img">
				<img src={gif} alt="product displayed as gif" />
			</div>
			<div className="escape_products_container">
				<div className="escape_heading">
					<h2>ESCAPE FOR WINTER SUN</h2>
					<p>
						Find everything you need for your gateway in the Holiday
						Shop
					</p>
				</div>
				<div className="shopNow">
					<Link to="/shop" className="links">
						Shop now <span className="p_arrow">→</span>
					</Link>
				</div>
			</div>
			<div className="escape_products horizontal_scroll_container snaps_inline">
				<EscapeForWinterCard img={card1} price={"£19.50"} />
				<EscapeForWinterCard img={card2} price={"£39.50"} />
				<EscapeForWinterCard img={card3} price={"£25.00"} />
				<EscapeForWinterCard img={card4} price={"£19.50"} />
				<EscapeForWinterCard img={card5} price={"£35.00"} />
				<EscapeForWinterCard img={card6} price={"£32.50 - £35.00"} />
			</div>
		</div>
	);
};

export default EscapeForWinter;
