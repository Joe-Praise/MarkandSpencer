import React from 'react'
import { Link } from "react-router-dom";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import img1 from "../../images/homePage/nav_msbank_pic_1.webp";
import img2 from "../../images/homePage/nav_msbank_pic_2.webp";
const MSBankDropDown = () => {
  return (
	  <li className="links_section">
		  <Link to="/" className="links">
			M&S Bank
		  </Link>
			<ul className="populate_links_container">
				<ul className="populate_links">
					<li className="column_links reducedheight">
						<ul className="category">
							<li className="header">Credit Card</li>
							<li>
								<Link to="" className="category_links">
									Shopping Plus Offer
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Club Rewards
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sign In to Internet Banking
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Mobile App
								</Link>
							</li>
						</ul>
						<ul className="category">
							<li className="header">Insurance</li>
							<li>
								<Link to="" className="category_links">
									Home Insurance
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Pet Insurance
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Car Insurance
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Travel Insurance
								</Link>
							</li>
						</ul>

						<ul className="category">
							<li className="header">Sparks Pay</li>
							<li>
								<Link to="" className="category_links">
									What Is Sparks Pay?
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									FAQs
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Apply
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Sign In
								</Link>
							</li>
                      </ul>

						<ul className="category">
							<li className="header">Personal Loans</li>
							<li>
								<Link to="" className="category_links">
									Loans 
								</Link>
							</li>
                      </ul>

						<ul className="category">
							<li className="header">Travel Services</li>
							<li>
								<Link to="" className="category_links">
									Buy Back
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Exchange Rates
								</Link>
							</li>
							<li>
								<Link to="" className="category_links">
									Travel Money
								</Link>
							</li>
                      </ul>
 
						<ul className="category">
							<li className="header">Ways to Bank</li>
							<li>
								<Link to="" className="category_links">
									Saving & Investing 
								</Link>
							</li>
                      </ul>

						<ul className="category">
							<li className="header">M&S Energy</li>
							<li>
								<Link to="" className="category_links">
									Energy
								</Link>
							</li>
                      </ul>

						<ul className="category">
							<li className="header">Support</li>
							<li>
								<Link to="" className="category_links">
									Financial Support
								</Link>
							</li>
						</ul>
					</li>

					<li className="img_continer">
						Featured
						<ul className="img_flex">
							<ImgDropDowoncomponent
								img={img1}
								figcaption="Learn more about"
								link1="M&S CREDIT CARD"
							/>
							<ImgDropDowoncomponent
								img={img2}
								figcaption="Learn more about"
								link1="SPARKS PAY"
							/>
						</ul>
					</li>
				</ul>
			</ul>
		</li>
  );
}

export default MSBankDropDown