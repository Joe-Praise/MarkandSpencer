import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import DropDownBtn from "./DropDownBtn";
import img1 from "../../images/homePage/nav_furniture_pic_1.webp";
import img2 from "../../images/homePage/nav_furniture_pic_2.webp";
const FurnitureDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Furniture
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
							<li className="header">Sofas & Armchairs</li>
							<li>
								<Link to="" className="category_links">
									Sofas
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Accent Chairs
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Armchairs
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Corner Sofas
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Footstools
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sofa Beds
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Bedroom</li>
							<li>
								<Link to="" className="category_links">
									All Bedroom Furniture
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Beds
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Bedside Tables
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Chests of Drawers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Divan Beds
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Mattresses
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Wardrobes
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Living Room</li>
							<li>
								<Link to="" className="category_links">
									All Livingroom Furniture
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Bookcases & Shelving
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Coffee Tables
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Side Tables & Nests
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									TV Units
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Dining Room</li>
							<li>
								<Link to="" className="category_links">
									All Dining room Furniture
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Dining Chairs
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Dining Tables
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sideboards
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Office</li>
							<li>
								<Link to="" className="category_links">
									All Office Furniture
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Desks
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Office Chairs
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Garden Furniture</li>
							<li>
								<Link to="" className="category_links">
									All Garden Furniture
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Loft</li>
							<li>
								<Link to="" className="category_links">
									Loft Range
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Find out more
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Trending</li>
							<li>
								<Link to="" className="category_links">
									Book Your Furniture Consultation
								</Link>
							</li>
                      </ul>

						<ul className="category">
							<li className="header">Offers</li>
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
					</li>

					<li className="img_continer">
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="New-season styles"
								paragraph="Refresh your home with the latest pieces"
								link1="Shop new in"
								link2="Shop sofas & armchairs"
							/>
							<ImgDropDowoncomponent
								img={img2}
								figcaption="Great furniture savings"
								link1="10% off when you buy a bed & mattress"
								link2="10% off when you buy a set of 2 dining room chairs & tables"
							/>
						</ul>
						<DropDownBtn btnValue="More in furniture" />
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default FurnitureDropDown