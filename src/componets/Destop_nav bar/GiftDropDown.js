import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import DropDownBtn from "./DropDownBtn";
import img1 from "../../images/homePage/nav_gifts_pic_1.webp";
import img2 from "../../images/homePage/nav_gifts_pic_2.webp";
const GiftDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			Gifts
		  </Link>
			<ul className="populate_links_container">
				<ul className="populate_links">
					<li className="column_links reducedheight">
						<ul className="category">
							<li className="header">Valentine's Day</li>
							<li>
								<Link to="" className="category_links">
									All Valentine's Day Gifts
                              </Link>
                          </li>
                          <li>
								<Link to="" className="category_links">
									Valentine's Flowers
								</Link>
                          </li>
                          <li>
								<Link to="" className="category_links">
									Valentine's Food & Drink Gifts
								</Link>
                          </li>
                          <li>
								<Link to="" className="category_links">
									Valentine's Gifts for Her
								</Link>
                          </li>
                          <li>
								<Link to="" className="category_links">
									Valentine's Gifts for Him
								</Link>
                          </li>
                          <li>
								<Link to="" className="category_links">
									Valentine's Cards
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
									Fruit Baskets
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Wicker Hampers
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Gift By Price</li>
							<li>
								<Link to="" className="category_links">
									Gifts under £20
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Gifts under £30
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Gifts under £50
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Gifts over £50
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Gifts by Recipient</li>
							<li>
								<Link to="" className="category_links">
									Gifts for Her
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Gifts for Him
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Gifts for Babies & Kids
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Gift Inspiration</li>
							<li>
								<Link to="" className="category_links">
									Chocolate Lovers
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Drinks Connoisseur
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									For the Foodies
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Beauty Gifts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Flowers & Plants
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Toys & Games
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Personalised gifts</li>
							<li>
								<Link to="" className="category_links">
									All personalised gifts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Personalised gifts for her
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Personalised gifts for him
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Personalised gifts for babies & kids
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">By Occasion</li>
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
									Congratulations
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Just Because
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									New Baby
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Housewarming
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Thank You
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Wedding & Engagement
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Gifts by Character</li>
							<li>
								<Link to="" className="category_links">
									Colin the Caterpillar
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Percy Pig
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Spencer Bear
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Harry Potter
								</Link>
							</li>
                      </ul>

						<ul className="category">
							<li className="header">Gifts by Delivery</li>
							<li>
								<Link to="" className="category_links">
									Free Delivery Gifts
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Letterbox Gifts
								</Link>
							</li>
                      </ul>

						<ul className="category">
							<li className="header">Greeting Cards</li>
							<li>
								<Link to="" className="category_links">
									All Cards
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Personalised Message Cards
								</Link>
							</li>
                      </ul>

                      <ul className="category">
							<li className="header">Gift Cards</li>
							<li>
								<Link to="" className="category_links">
									E-Gift Cards
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Gift Cards
								</Link>
                          </li>
                        </ul>
					</li>

					<li className="img_continer">
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Love is all around"
								paragraph="Treat someone you love to a gourmet food gift or stunning bouquet this Valentine’s Day"
                              link1="Valentine’s food & drink gifts"
                              link2="All Valentine’s gifts"
							/>
							<ImgDropDowoncomponent
								img={img2}
								figcaption="Wonderful gifts that won’t break the bank"
								paragraph="From afternoon tea delights through the letterbox to fabulous fizz and chocs, find the perfect gift for any budget"
								link1="Gifts under £20"
								link2="Gifts under £30"
							/>
						</ul>
						<DropDownBtn btnValue="More gifts & hampers" />
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default GiftDropDown