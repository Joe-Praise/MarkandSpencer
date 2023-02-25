import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import DropDownBtn from "./DropDownBtn";
import img1 from "../../images/homePage/nav_home_pic_1.webp";
import img2 from "../../images/homePage/nav_home_pic_2.webp";

const HomeDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Home
		  </Link>
			<ul className="populate_links_container">
				<ul className="populate_links">
					<li className="column_links reducedheight">
						<ul className="category">
							<li className="header">New in</li>
							<li>
								<Link to="" className="category_links">
									All New In
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Bedding</li>
							<li>
								<Link to="" className="category_links">
									All Bedding
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Bed Sheets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Duvets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Duvet Covers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Kids’ Bedding
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Pillows
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Pillowcases
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Bathroom</li>
							<li>
								<Link to="" className="category_links">
									All Bathroom
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Bathroom Accessories
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Bath Mats
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Towels
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Cooking & Dining</li>
							<li>
								<Link to="" className="category_links">
									Dinner Sets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Glassware
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Kitchen Utensils
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Mugs
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Pots & Pans
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Home Furnishings</li>
							<li>
								<Link to="" className="category_links">
									All Home Furnishings
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Cushions
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Curtains
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Made to Measure Curtains</li>
							<li>
								<Link to="" className="category_links">
									Rugs
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Throws
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Home Accessories</li>
							<li>
								<Link to="" className="category_links">
									All Home Accessories
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Artificial Flowers & Plants
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Candles
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Candle Holders
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Home Fragrance
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Mirrors
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Photo Frames
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Vases & Planters
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Lighting</li>
							<li>
								<Link to="" className="category_links">
									All Lighting
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Ceiling Lights
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Floor Lamps
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Table Lamps
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Brands</li>
							<li>
								<Link to="" className="category_links">
									Apothecary
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									M&S X Fired Earth
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Brands A-Z
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Trending</li>
							<li>
								<Link to="" className="category_links">
									5-Star Products
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Cosy Shop
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Home Expert Live
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									House Trends
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Offers</li>
							<li>
								<Link to="" className="category_links">
									20% off Cushions
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Up to 30% off selected Home Fragrance
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									20% off selected Luggage
								</Link>
							</li>
						</ul>
					</li>

					<li className="img_continer">
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Most-wanted styles"
								paragraph="The pieces everyone’s adding to their baskets right now"
								link1="Shop top-rated products"
								link2="Shop bedding"
							/>
							<ImgDropDowoncomponent
								img={img2}
								figcaption="Love is all around"
								paragraph="Get ready for a special Valentine’s Day at home"
								link1="Shop homeware gifts"
								link2="Shop tableware"
							/>
						</ul>
						<DropDownBtn btnValue="More in home" />
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default HomeDropDown