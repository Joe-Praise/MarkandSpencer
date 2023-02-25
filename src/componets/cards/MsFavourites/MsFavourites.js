import React from "react";
import MsFavouritesCard from "./MsFavouritesCard";
import img1 from "../../../images/homePage/m&s_favourites_1.webp";
import img2 from "../../../images/homePage/m&s_favourites_2.webp";
import img3 from "../../../images/homePage/m&s_favourites_3.webp";
import img4 from "../../../images/homePage/m&s_favourites_4.webp";
import img5 from "../../../images/homePage/DOUBLE_TRADE-1.webp";
import img6 from "../../../images/homePage/DOUBLE_TRADE-2.webp";
const MsFavourites = () => {
		const style = {
			backgroundColor: "white",
		};
	return (
		<div className="padding" style={style}>
			<h2>M&S FAVOURITES</h2>
			<div className="ms-favourites_container">
				<MsFavouritesCard
					img={img1}
					description="A lingerie love story"
					redirect="Shop Rosie"
				/>
				<MsFavouritesCard
					img={img2}
					description="Date night, done right"
					redirect="Shop the looks"
				/>
				<MsFavouritesCard
					img={img3}
					description="20% off fragrances"
					redirect="Shop now"
				/>
				<MsFavouritesCard
					img={img4}
					description="Sent with love"
					redirect="Food & drink gifts"
				/>
			</div>
			<div className="ms_double_offer">
				<div className="margin_top">
					<MsFavouritesCard
						redirect="Shop 3 for 2 kidswear"
						img={img5}
					/>
				</div>
				<div className="margin_top">
					<MsFavouritesCard redirect="Shop occasionwear" img={img6} />
				</div>
			</div>
		</div>
	);
};

export default MsFavourites;
