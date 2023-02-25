import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import DropDownBtn from "./DropDownBtn";
import img1 from "../../images/homePage/nav_brands_pic_1.webp";
import img2 from "../../images/homePage/nav_brands_pic_2.webp";
const BrandsDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Brands
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
                          <li>
								<Link to="" className="category_links">
									Monsoon
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">All Brands</li>
							<li>
								<Link to="" className="category_links">
									Brands A-Z
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									All Women’s Brands
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									All Men's Brands
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									All Lingerie Brands
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									All Kids’ Brands
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									All Beauty Brands
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									All Home Brands
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Popular Brands A-I</li>
							<li>
								<Link to="" className="category_links">
									Autograph
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Ben Sherman
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Body
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Boutique
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									B by Boutique
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Cyberjammies
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									DKNY
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Dune London
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									FatFace
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Finery London
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Ghost London
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Goodmove
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Hobbs
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Popular Brands J-Z</li>
							<li>
								<Link to="" className="category_links">
									JACK & JONES
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Jaeger
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Jones Bootmaker
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Joules
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Nobody's Child
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Per Una
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Phase Eight
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Rosie Exclusively for M&S
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Seasalt Cornwall
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sosandar
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Speedo
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Ted Baker
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									White Stuff
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Lingerie</li>
							<li>
								<Link to="" className="category_links">
									Fantasie
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Freya
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sloggi
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Triumph
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Wacoal
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Offers</li>
							<li>
								<Link to="" className="category_links">
									Up to 50% off selected Toys
								</Link>
							</li>
						</ul>
					</li>

					<li className="img_continer">
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Just in: Monsoon"
								paragraph="Discover pieces to make your day that little bit more special"
								link1="Shop Monsoon"
								link2="Shop all new in"
							/>
							<ImgDropDowoncomponent
								img={img2}
								figcaption="Enjoy up to 50% off"
								paragraph="Enjoy great savings on selected lines in our sale"
								link1="Shop brands sale"
							/>
						</ul>
						<DropDownBtn btnValue="More in brands" />
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default BrandsDropDown