import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import DropDownBtn from "./DropDownBtn";
import img1 from "../../images/homePage/nav_beauty_pic_1.webp";
import img2 from "../../images/homePage/nav_beauty_pic_2.webp";
const BeautyDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Beauty
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
							<li className="header">Shop by Category</li>
							<li>
								<Link to="" className="category_links">
									Skincare
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Haircare
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Make-up
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Beauty Gifts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Bath & Body
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Handwash
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Nails
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Perfume
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Suncare
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Men’s Grooming
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Beauty Accessories
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Shop by Brand A-L</li>
							<li>
								<Link to="" className="category_links">
									Apothecary
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Autograph
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Aveda
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Benefit
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Bloom & Blossom
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Bumble & Bumble
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Clinique
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Color Wow
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Darphin
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Discover
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Elizabeth Arden
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Emma Hardie
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									EVE LOM
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Formula
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Fragrance Society
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Lab Series
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Leighton Denny
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									L’Occitane
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Living Proof
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Lumene
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Shop by Brand M-Z</li>
							<li>
								<Link to="" className="category_links">
									Murad
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Nails inc
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Neal’s Yard Remedies
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Neom
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Nuxe
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Origins
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Percy & Reed
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Philip Kingsley
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Pixi
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									PRAI Beauty
								</Link>
							</li>{" "}
							<li>
								<Link to="" className="category_links">
									Provenance
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Pure
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									REN Clean Skincare
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Skin & Tonic
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									This Works
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Ultrasun
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Beauty Brands A-Z
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Trending</li>
							<li>
								<Link to="" className="category_links">
									Clinique Skin Diagnostic Tool
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Five-Star Rated Beauty
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Great-value-essentials
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Vegan Beauty
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Wellbeing
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Offers</li>
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
					</li>

					<li className="img_continer">
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Enjoy 20% off fragrance"
								paragraph="Treat yourself or a loved one this Valentine’s Day"
								link1="Shop Women's Perfume"
								link2="Shop Men's Fragrance"
							/>
							<ImgDropDowoncomponent
								img={img2}
                              figcaption="Great-value beauty"
                              paragraph="Must-haves to transform your routine"
								link1="Shop skincare"
								link2="Shop haircare"
							/>
						</ul>
						<DropDownBtn btnValue="More in beauty" />
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default BeautyDropDown