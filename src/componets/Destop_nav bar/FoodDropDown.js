import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import DropDownBtn from "./DropDownBtn";
import img1 from "../../images/homePage/nav_food_pic_1.webp";
import img2 from "../../images/homePage/nav_food_pic_2.webp";
const FoodDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Food & Wine
		  </Link>
			<ul className="populate_links_container">
				<ul className="populate_links">
					<li className="column_links reducedheight">
						<ul className="category">
							<li className="header">Cakes & Sandwiches</li>
							<li>
								<Link to="" className="category_links">
									Afternoon Tea
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Cakes
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sandwich Platters
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Food & Drink Gifts</li>
							<li>
								<Link to="" className="category_links">
									All Food & Drink Gifts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Alcohol Gifts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Food Gifts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Wicker Hampers
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Beers, Wine & Spirits</li>
							<li>
								<Link to="" className="category_links">
									All Beers, Wines & Spirits
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									New In
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Beers & Cider
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Champagne
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Mixed Cases
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Prosecco & Sparkling
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Red Wine
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Rosé Wine
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Spirits & Cocktails
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									White Wine
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Our Favourite Wines</li>
							<li>
								<Link to="" className="category_links">
									Award Winning Wines
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									M&S Collection Wines
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Fred’s Wine List
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Loved by Experts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Wine under £8 a bottle
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Offers</li>
							<li>
								<Link to="" className="category_links">
									Save up to 1/3 on selected wine
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Free delivery on Food & Drink hampers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									10% off on sandwich platters & cakes
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">The Home of Dine In</li>
							<li>
								<Link to="" className="category_links">
									Gastropub Dine In
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Pizza Night Dine In
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Fresh Pasta Dine In
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Stir Fry Dine In
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Chicken Feast Dine In
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Valentine’s Dine In
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Eat Well, Play Well</li>
							<li>
								<Link to="" className="category_links">
									Healthy Eating Ideas
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Eat Well Recipes
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Tom Kerridge</li>
							<li>
								<Link to="" className="category_links">
									Steak Tips and Recipes
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">More In Store</li>
							<li>
								<Link to="" className="category_links">
									Valentine’s Inspiration
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Ways to Save
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									See What’s New
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Quick-Fire Dinners
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Pancake Day Ideas
								</Link>
							</li>
						</ul>
					</li>

					<li className="img_continer">
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Fuss-free hosting"
								paragraph="Feed a crowd by ordering a delicious sandwich platter or stunning cake online, then collecting in store"
								link1="Shop cakes"
								link2="Shop sandwich platters"
							/>
							<ImgDropDowoncomponent
								img={img2}
								figcaption="Save up to 1/3 on your favourite wines"
								paragraph="Stock up on wine and fizz by the case online and save up to 1/3"
								link1="Shop the offer"
								link2="Shop all beers, wines & spirits"
							/>
						</ul>
						<DropDownBtn btnValue="More in food" />
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default FoodDropDown