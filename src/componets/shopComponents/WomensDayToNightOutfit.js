import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const WomensDayToNightOutfit = () => {
	const [text, setText] = useState(false);
	const showText = (e) => {
		let { previousElementSibling } = e.target;
		let toggle = previousElementSibling.classList.toggle("display_none");
		if (toggle) {
			setText(true)
		} else {
			setText(false);
		}
	}
  return (
		<div className="womens_day_to_night_container">
			<div className="shopTopLinks">
				<Link to="/" className="links">
					Home
				</Link>
				/
				<Link to="/women" className="links">
					Women
				</Link>
				/
				<Link to="/shop" className="links">
					Day to Night Outfits
				</Link>
			</div>
			<h1>Women’s Day-to-Night Outfits</h1>

			<p className="display_none">
				Our collection of day-to-night outfits is filled with stylish
				printed dresses, studded tops and coated jeggings. We’ve got
				plenty of versatile pieces that work for daytime and evening
				wear, including sparkly T-shirts and sleek leather-look
				leggings. Look for foil prints and floral fabrics that create a
				dressed-up appearance. Browse our styles online and take
				advantage of free store collection
			</p>
			<p className="hide" onClick={showText}>
				{text ? "Read More" : "Read Less"}
			</p>
		</div>
  );
}

export default WomensDayToNightOutfit