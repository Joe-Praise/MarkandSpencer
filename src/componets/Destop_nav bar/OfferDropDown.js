import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import img1 from "../../images/homePage/nav_offers_pic_1.webp";
import img2 from "../../images/homePage/nav_offers_pic_2.webp";
const OfferDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Offers
		  </Link>
			<ul className="populate_links_container">
				<ul className="populate_links">
					<li className="column_links reducedheight">
						<ul className="category">
							<li className="header">Top Women's Offers</li>
							<li>
								<Link to="" className="category_links">
									30% off selected Lingerie
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									4 for 3 Knickers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									30% off selected Bras
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Top Beauty Offers</li>
							<li>
								<Link to="" className="category_links">
									All Beauty Offers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									20% off Fragrance
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Free Gift- Elizabeth Arden
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Free Gift - Neals Yard Remedies
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Free Gift - REN
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Free Gift - Skin & Tonic
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Top Furniture Offers</li>
							<li>
								<Link to="" className="category_links">
									10% off when you buy a Bed & Mattress
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									10% off When you buy a Dining Table & 4 or more Chairs
								</Link>
                          </li>
						</ul>

						<ul className="category">
							<li className="header">Top Home Offers</li>
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

						<ul className="category">
							<li className="header">Top Men's Offers</li>
							<li>
								<Link to="" className="category_links">
									2 for £60 on selected Jeans
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									2 for £45 on selected Sweatshirts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									2 for £70 or 3 for £100 on selected Sartorial Shirts
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Top Baby & Kids Offers</li>
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
									2 for £12 on selected Hats, Gloves & Scarves
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Up to 50% off selected Toys
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Top Food & Drinks Offers</li>
							<li>
								<Link to="" className="category_links">
									Save up to 1/3 on selected wine
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									10% off on Sandwich Platters & Cakes
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">SALE</li>
							<li>
								<Link to="" className="category_links">
									Brands sale
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Last chance to buy
								</Link>
							</li>
						</ul>
					</li>

                  <li className="img_continer">
                      Featured
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Great furniture savings"
								link1="10% off when you buy a bed & mattress"
								link2="10% off when you buy a set of 2 dining room chairs & tables"
							/>
							<ImgDropDowoncomponent
								img={img2}
								figcaption="Up to 50% off sale"
								link1="Enjoy great savings on selected lines in our sale"
								link2="Shop Brands sale"
							/>
						</ul>
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default OfferDropDown