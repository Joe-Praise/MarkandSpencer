import React from "react";
import { Link } from "react-router-dom";
import DropDownBtn from "./DropDownBtn";
import ImgDropDowoncomponent from "./ImgDropDowoncomponent";
import testing1 from "../../images/homePage/women_nav_bar_1.webp";
import testing2 from "../../images/homePage/women_nav_bar_2.webp";

const WomenDropdown = () => {
	return (
        <li className="links_section">
            <Link to="/women" className="links">
            Women
            </Link>
            <ul className="populate_links_container">
                <ul className="populate_links">
                    <li className="column_links">
                        <ul className="category">
                            <li className="header">New in</li>
                            <li>
                                <Link to="/women" className="category_links">All New In</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Clothing</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Footwear</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Beauty</Link>
                            </li>
                        </ul>
                        <ul className="category">
                            <li className="header">Clothing</li>
                            <li>
                                <Link to="/women" className="category_links">All Clothing</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Cashmere</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Coats & Jackets</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Dresses</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Hoodies</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Jeans</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Sportswear</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Joggers</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Jumpers & Cardigans</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Leggings</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Loungewear</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Modest</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Clothing</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Shirts & Blouses Skirts</Link>
                            </li>
                        </ul>
                        <ul className="category">
                            <li className="header">Lingerie & Nightwear</li>
                            <li>
                                <Link to="/women" className="category_links">Bras</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Knickers</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Nightwear</Link>
                            </li>
                        </ul>
                        <ul className="category">
                            <li className="header">Trending</li>
                            <li>
                                <Link to="/women" className="category_links">Anything But Ordinary</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Date Night Outfits</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Occasionwear</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">New: Pink</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">The Edit</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Holiday Shop</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Valentine's Nightwear</Link>
                            </li>
                        </ul>
                        <ul className="category">
                            <li className="header">Footwear</li>
                            <li>
                                <Link to="/women" className="category_links">All Footwear</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Boots</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Shoes</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Slippers</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Trainers</Link>
                            </li>
                        </ul>
                        <ul className="category">
                            <li className="header">Accessories</li>
                            <li>
                                <Link to="/women" className="category_links">All Accessories</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Hair Accessories</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Handbags & Purses</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Jewellery Luggage Watches</Link>
                            </li>
                        </ul>
                        <ul className="category">
                            <li className="header">Fit Type</li>
                            <li>
                                <Link to="/women" className="category_links">Curve</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Maternity</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Petite</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Tall</Link>
                            </li>
                        </ul>
                        <ul className="category">
                            <li className="header">Brands</li>
                            <li>
                                <Link to="/women" className="category_links">Autograph</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">FatFace</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Goodmove</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Hobbs</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Jaeger</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Monsoon</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Nobody’s Child</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Per Una</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Phase Eight</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Seasalt Cornwall</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Sosandar</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">White Stuff</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Brands A-Z</Link>
                            </li>
                        </ul>
                        <ul className="category">
                            <li className="header">Offers</li>
                            <li>
                                <Link to="/women" className="category_links">30% off selected Lingerie</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">4 for 3 Knickers</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">Up to 50% off Brands sale</Link>
                            </li>
                            <li>
                                <Link to="/women" className="category_links">All beauty offers</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="img_continer">
                        <ul className="img_flex">
                            <ImgDropDowoncomponent
                                img={testing1}
                                figcaption="Love is all around"
                                paragraph="We have outfits for every invite,
                            from cocktails with the girls to romantic dinners"
                                link1="Shop day-to-night outfits"
                                link2="Shop dresses"
                            />
                            <ImgDropDowoncomponent
                                img={testing2}
                                figcaption="It’s the little things"
                                paragraph="Celebrate love in all its forms
                            this Valentine’s Day with our inspiring gift ideas"
                                link1="Shop
                            Valentine’s Day gifts"
                                link2="Shop sexy lingerie"
                            />
                        </ul>
                        <DropDownBtn btnValue="More in womenswear" />
                    </li>
                </ul>
            </ul>
		</li>
	);
};

export default WomenDropdown;
