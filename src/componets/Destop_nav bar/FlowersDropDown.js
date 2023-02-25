import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import DropDownBtn from "./DropDownBtn";
import img1 from "../../images/homePage/nav_flower_pic_1.webp";
import img2 from "../../images/homePage/nav_flower_pic_2.webp";
const FlowersDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Flowers & Plants
		  </Link>
			<ul className="populate_links_container">
				<ul className="populate_links">
					<li className="column_links reducedheight">
						<ul className="category">
							<li className="header">Valentine's Day</li>
							<li>
								<Link to="" className="category_links">
									Valentine's Flowers
								</Link>
                          </li>
                          <li>
								<Link to="" className="category_links">
									Valentine's Plants
								</Link>
                          </li>
						</ul>
						<ul className="category">
							<li className="header">Flowers</li>
							<li>
								<Link to="" className="category_links">
									All Flowers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Next Day Delivery Flowers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sunday Delivery Flowers
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Plants</li>
							<li>
								<Link to="" className="category_links">
									All Plants
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Indoor Plants
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Outdoor Plants
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Gift Bundles</li>
							<li>
								<Link to="" className="category_links">
									Create your own Flower Gift Bundle
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Create your own Plant Gift Bundle
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Shop by Occasion</li>
							<li>
								<Link to="" className="category_links">
									Anniversary
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Birthday
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Mother's Day
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									New Home
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Thank You
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Home Accessories &Décor</li>
							<li>
								<Link to="" className="category_links">
									Artificial Flowers & Plants
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Vases & Plant Pots
								</Link>
							</li>
						</ul>
					</li>

					<li className="img_continer">
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Love is in the air"
								paragraph="Spoil your valentine with a bouquet of beautiful blooms with free delivery"
								link1="Shop Valentine's Day flowers"
							/>
							<ImgDropDowoncomponent
								img={img2}
								figcaption="Beautiful bouquets"
								paragraph="Discover our stunning range of flowers featuring the very best in-season blooms, all with free nominated-day delivery"
                              link1="Shop all flowers"
                              link2="Shop next-day-delivery flowers"
							/>
						</ul>
						<DropDownBtn btnValue="More flowers" />
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default FlowersDropDown