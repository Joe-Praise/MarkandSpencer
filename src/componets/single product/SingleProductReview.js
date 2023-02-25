import React from "react";
import { Link } from "react-router-dom";
import review from "../../images/singleProductPage/review.png";
const SingleProductReview = () => {
	return (
		<div className="review_wrapper">
			<h3>REVIEWS</h3>
			<div className="review_section">
				<div className="rating_container">
					<p className="rating">5.0</p>
					<div className="review_container">
						<img src={review} alt="review stars" />
						<p>
							<Link to="" className="links text_decoration">
								from 1 reviews
							</Link>
						</p>
					</div>
				</div>
				<div className="review_stars">
					<div className="stars">
						<p className="stars_no">5 stars</p>
						<div className="bar"></div>
						<p>
							<Link to="" className="links text_decoration">
								1
							</Link>
						</p>
					</div>
					<div className="stars">
						<p className="stars_no">4 stars</p>
						<div className="bar empty"></div>
						<p>
							<Link
								to=""
								className="links text_decoration"
							></Link>
						</p>
					</div>
					<div className="stars">
						<p className="stars_no">3 stars</p>
						<div className="bar empty"></div>
						<p>
							<Link
								to=""
								className="links text_decoration"
							></Link>
						</p>
					</div>
					<div className="stars">
						<p className="stars_no">2 stars</p>
						<div className="bar empty"></div>
						<p>
							<Link
								to=""
								className="links text_decoration"
							></Link>
						</p>
					</div>
					<div className="stars">
						<p className="stars_no">1 stars</p>
						<div className="bar empty"></div>
						<p>
							<Link
								to=""
								className="links text_decoration"
							></Link>
						</p>
					</div>
				</div>
			</div>
			<div className="review_btn">
				<button type="button">Read reviews</button>
				<button type="button">Write a review</button>
			</div>
		</div>
	);
};

export default SingleProductReview;
