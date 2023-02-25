import React from "react";
import img1 from "../../images/singleProductPage/collection.webp";
import img2 from "../../images/singleProductPage/delivery.webp";
import img3 from "../../images/singleProductPage/nominated_day.webp";
const Offering = () => {
	return (
		<div className="offering_container">
			<div className="product_header">
				<p>
					We're offering you the following collection and delivery
					options
				</p>
			</div>
			<div className="offering_content">
				<div className="img_text">

						<figure>
							<img src={img1} alt="block illustration" />
						</figure>
						<div>
							<p>Click & Collect</p>
						</div>

					<p className="right_offering">FREE</p>
				</div>
				<div className="img_text">
						<figure>
							<img src={img2} alt="block illustration" />
						</figure>
						<div>
							<p>Standard delivery (in 2-4 days)</p>
							<p>FREE over £60 (£100 for Wines)</p>
						</div>
					<p className="right_offering">FREE</p>
				</div>
				<div className="img_text">
						<figure>
							<img src={img3} alt="block illustration" />
						</figure>
						<div>
							<p>Next / Nominated day delivery</p>
						</div>
					<p className="right_offering">£4.99</p>
				</div>
			</div>
		</div>
	);
};

export default Offering;
