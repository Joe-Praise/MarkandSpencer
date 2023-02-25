import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Mobilesublinks from "./Mobilesublinks";
import Return from "./Return";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";
const MobileList = () => {
	const [womenNewIn] = useState([
		{ item: "view All" },
		{ item: "Clothing" },
		{ item: "Footwear" },
		{ item: "Beauty" },
	]);
	const [womenClothing] = useState([
		{ item: "view All" },
		{ item: "Cashmere" },
		{ item: "Coats & Jackets" },
		{ item: "Dresses" },
		{ item: "Hoodies" },
		{ item: "Jeans" },
		{ item: "Joggers" },
		{ item: "Jumpers & Cardigans" },
		{ item: "Leggings" },
		{ item: "Loungewear" },
		{ item: "Modest Clothing" },
		{ item: "Shirts & Blouses" },
		{ item: "Skirts" },
		{ item: "Sportswear" },
		{ item: "Sweatshirts" },
		{ item: "Swimwear" },
		{ item: "Thermals" },
		{ item: "Tops & T-shirt" },
		{ item: "Trousers" },
	]);
	const [womenLingerie] = useState([
		{ item: "Bras" },
		{ item: "Knickers" },
		{ item: "Nightwear" },
	]);
	const [womenTrending] = useState([
		{ item: "Anything But Ordiary" },
		{ item: "Cargo Trousers" },
		{ item: "Date Night Outfits" },
		{ item: "New: Pink" },
		{ item: "The Edit" },
		{ item: "Holiday Shop" },
		{ item: "Valentine's Nightwear" },
	]);
	const [womenfootware] = useState([
		{ item: "All Footware" },
		{ item: "Boots" },
		{ item: "Shoes" },
		{ item: "Slippers" },
		{ item: "Trainers" },
	]);
	const [womenaccessories] = useState([
		{ item: "All Accessories" },
		{ item: "Hair Accessories" },
		{ item: "Handbags & Purses" },
		{ item: "Jewellery" },
		{ item: "Luggage" },
		{ item: "Watches" },
	]);
	const [womenfittype] = useState([
		{ item: "Curve" },
		{ item: "Maternity" },
		{ item: "Petite" },
		{ item: "Tall" },
	]);
	const [womenabrand] = useState([
		{ item: "Autograph" },
		{ item: "FatFace" },
		{ item: "Goodmove" },
		{ item: "Hobbs" },
		{ item: "Jaeger" },
		{ item: "Nobody's Child" },
		{ item: "Per Una" },
		{ item: "Phase Eight" },
		{ item: "Seasalt Cornwall" },
		{ item: "Sosander" },
		{ item: "Speedo" },
		{ item: "White Stuff" },
		{ item: "Brand A-Z" },
	]);
	const [womenoffer] = useState([
		{ item: "30% off Selected Lingerie" },
		{ item: "4  for 3 Knickers" },
		{ item: "Up to 50% off Brands sale" },
		{ item: "All beauty offers" },
	]);

	const { rotate } = useContext(AppContext);

	const [back] = useState(true);

	const openMenu = (e) => {
		e.stopPropagation();
		let links = e.currentTarget.lastElementChild;
		links.style.transform = "translateX(0px)";
	};
	const close = (e) => {
		e.stopPropagation();
		let target = e.currentTarget.parentElement;
		if (back) {
			target.style.transform = "translateX(-295px)";
		}
	};
	const innerLink = {
		position: "fixed",
		top: "43px",
		left: "0",
		minHeight: "900px",
		width: "280px",
		zIndex: "90",
		transform: "translateX(-290px)",
		transition: "all 0.3s ease-in-out",
		backgroundColor: "white",
		listStyleType: "none",
		overflowY: "auto",
	};

	return (
		<ul className="nav_links">
			{/* women */}
			<li onClick={openMenu} className="nav_links_li">
				Women
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="top_link">
						Women
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion" onClick={rotate}>
						New in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Clothing
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Lingerie & Nightwear
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenLingerie.map((lingerie) => (
							<Mobilesublinks
								value={lingerie.item}
								key={lingerie.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Trending
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Footwear
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfootware.map((foot) => (
							<Mobilesublinks value={foot.item} key={foot.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Accessories
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Fit Type
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Brands
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* Lingerie */}
			<li onClick={openMenu} className="nav_links_li">
				Lingerie
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Lingerie
						<i className="fa-solid fa-angle-down"></i>
					</li>

					<li className="links_container accordion " onClick={rotate}>
						New in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Bras
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Knickers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Nightwear
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Shapewear
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Socks And Tights
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfootware.map((foot) => (
							<Mobilesublinks value={foot.item} key={foot.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Vets & Thermals
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Lingerie Ranges
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Bra Fit
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Brands
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Trending
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* men */}
			<li onClick={openMenu} className="nav_links_li">
				Men
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Men
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						New in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Clothing
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfootware.map((foot) => (
							<Mobilesublinks value={foot.item} key={foot.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Suits & Formal Clothing
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfootware.map((foot) => (
							<Mobilesublinks value={foot.item} key={foot.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Footwear
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfootware.map((foot) => (
							<Mobilesublinks value={foot.item} key={foot.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Accessories
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Nightwear, Underwear & Socks
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Brands
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Trending
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* Kids */}
			<li onClick={openMenu} className="nav_links_li">
				Kids
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Kids
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						New in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						School Uniform
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Boys (omnths - 3yrs)
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Girls (2yrs - 16yrs)
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Boys (2yrs - 16yrs)
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Toys
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Trending
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Brands
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* Home */}
			<li onClick={openMenu} className="nav_links_li">
				Home
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Home
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						New in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Bedding
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Bathroom
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Cooking & Dining
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Home Furniture
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Home Accessories
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Lighting
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Brands
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Trending
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* furniture */}
			<li onClick={openMenu} className="nav_links_li">
				Furniture
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Furniture
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						New in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Sofas & Armchairs
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Bedroom
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Living Room
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Dinning Room
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Office
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Garde Furniture
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Loft
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Trending
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* beauty */}
			<li onClick={openMenu} className="nav_links_li">
				Beauty
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Beauty
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						New in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						shop by Category
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Shop by Brand A-L
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						Shop by Brand M-Z
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Trending
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* brands */}
			<li onClick={openMenu} className="nav_links_li">
				Brands
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Brands
						<i className="fa-solid fa-angle-right"></i>
					</li>

					<li className="links_container accordion " onClick={rotate}>
						New in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>

					<li className="links_container accordion " onClick={rotate}>
						All Brands
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Popular Brands J-Z
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Lingerie
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* flower & plants */}
			<li onClick={openMenu} className="nav_links_li">
				Flowers & Plants
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Flowers & Plants
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						Valentine's Day
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Flowers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Plants
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Gift Bundles
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Shop by Occassion
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						HOme Accessories
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* gifts */}
			<li onClick={openMenu} className="nav_links_li">
				Gifts
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Gifts
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						Valentine's Day
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Food & Drinks Gifts
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Gifts by Recipient
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Gift Inspiration
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Personalised gifts
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						By Occasion
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Gifts by Character
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Gifts by Delivery
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Greeting Cards
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Gift Cards
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* food */}
			<li onClick={openMenu} className="nav_links_li">
				Food & Wine
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Food & Wine
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						Cake & Sandwiches
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Food & Drink Gifts
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Beers, Wine & Spirits
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Our Favourite Wine
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						The Home of Dine in
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Eat well, Play Well
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Tom Kerridge
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						More in Store
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
				</ul>
			</li>

			{/* offers */}
			<li onClick={openMenu} className="nav_links_li">
				Offers
				<i className="fa-solid fa-angle-right"></i>
				<ul style={innerLink}>
					<Return back={close} />
					<li className="links_container accordion top">
						Offers
						<i className="fa-solid fa-angle-right"></i>
					</li>
					<li className="links_container accordion " onClick={rotate}>
						SALE
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenNewIn.map((newin) => (
							<Mobilesublinks
								key={newin.item}
								value={newin.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Top Furniture Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenfittype.map((fit) => (
							<Mobilesublinks value={fit.item} key={fit.item} />
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Top Home Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Top Women's Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenClothing.map((clothing) => (
							<Mobilesublinks
								value={clothing.item}
								key={clothing.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Top Beauty Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenaccessories.map((accessories) => (
							<Mobilesublinks
								value={accessories.item}
								key={accessories.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Top Men's offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenTrending.map((trend) => (
							<Mobilesublinks
								value={trend.item}
								key={trend.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Top Baby & Kids Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Top flower Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenoffer.map((offer) => (
							<Mobilesublinks
								value={offer.item}
								key={offer.item}
							/>
						))}
					</ul>
					<li className="links_container accordion " onClick={rotate}>
						Top Food 7 Drinks Offers
						<i className="fa-solid fa-angle-down"></i>
					</li>
					<ul className="panel">
						{womenabrand.map((brand) => (
							<Mobilesublinks
								value={brand.item}
								key={brand.item}
							/>
						))}
					</ul>
				</ul>
			</li>
			<li>
				<Link to="" className="links nav_links_li">
					Inspire Me
				</Link>
			</li>
		</ul>
	);
};

export default MobileList;
