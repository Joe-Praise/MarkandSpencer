import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import DropDownBtn from "./DropDownBtn";
import img1 from "../../images/homePage/nav_kids_pic_1.webp";
import img2 from "../../images/homePage/nav_kids_pic_2.webp";
const KidsDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Kids
		  </Link>
			<ul className="populate_links_container">
				<ul className="populate_links">
					<li className="column_links">
						<ul className="category">
							<li className="header">New in</li>
							<li>
								<Link to="" className="category_links">
									All New In
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Baby
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Boys’
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Girls’
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">School Uniform</li>
							<li>
								<Link to="" className="category_links">
									All School
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Boys’ Uniform
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Girls’ Uniform
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									School Shoes
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Kids’ shoe fit guide
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Baby (0mnths - 3yrs)</li>
							<li>
								<Link to="" className="category_links">
									All Baby
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Baby Boys
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Baby Girls
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Coats & Jackets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Newborn Essentials
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Outfits & Sets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sleepsuits
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Swimsuits
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Girls (2yrs - 16yrs)</li>
							<li>
								<Link to="" className="category_links">
									All Girls' Clothing
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Accessories
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Coats & Jackets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Dresses
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Footwear
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Hoodies & Sweatshirts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Jeans
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Jumpers & Cardigans
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Leggings
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Multipacks
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Nightwear
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Outfits & Sets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Trousers & Joggers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Skirts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Socks & Tights
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Swimwear
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Tops & T-shirts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Underwear & Thermals
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Boys (2yrs - 16yrs)</li>
							<li>
								<Link to="" className="category_links">
									All Boys' Clothing
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Accessories
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Coats & Jackets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Footwear
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Hoodies & Sweatshirts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Jeans
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Jumpers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Multipacks
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Nightwear
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Outfits & Sets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Trousers & Joggers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Socks
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Swimwear
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Tops & T-shirts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Underwear & Thermals
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Toys</li>
							<li>
								<Link to="" className="category_links">
									View All
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Baby Toys
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Games and Puzzles
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Soft Toys
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Trending</li>
							<li>
								<Link to="" className="category_links">
									Character Shop
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Oversized Hoodies
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Occasionwear
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Holiday Shop
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Brands</li>
							<li>
								<Link to="" className="category_links">
									Clarks
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Early Learning Centre
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									FatFace
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Goodmove
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									JACK & JONES JUNIOR
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Joules
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Monsoon
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Brands A-Z
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Offers</li>
							<li>
								<Link to="" className="category_links">
									20% off Coats & Jackets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									3 for 2 on selected Clothing
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Up to 50% off selected Toys
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Up to 50% off Brands sale
								</Link>
							</li>
						</ul>
					</li>

					<li className="img_continer">
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Made you look"
								paragraph="Update their wardrobes with our latest drop of standout styles"
								link1="Shop girls’ new in"
								link2="Shop boys’ new in"
							/>

							<ImgDropDowoncomponent
								img={img2}
								figcaption="Value you can trust"
								paragraph="Buy two and get the third free across selected babywear and kidswear"
								link1="Shop 3 for 2 on kids & babys clothing"
							/>
						</ul>
						<DropDownBtn btnValue="More in kidswear" />
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default KidsDropDown