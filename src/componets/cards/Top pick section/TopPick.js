import React from 'react';
import { Link } from 'react-router-dom';
import pick1 from "../../../images/homePage/top_picks_Bra_1.webp";
import pick2 from "../../../images/homePage/top_picks_Bra_2.webp";
import pick3 from "../../../images/homePage/top_picks_Bra_3.webp";
import pick4 from "../../../images/homePage/top_picks_Bra_4.webp";
import pick5 from "../../../images/homePage/top_picks_Bra_5.webp";
import pick6 from "../../../images/homePage/top_picks_Bra_6.webp";
import pick7 from "../../../images/homePage/top_picks_Bra_7.webp";

const TopPick = () => {
    return (
		<div className="top_pick">
			<h2>Top pick from bra section</h2>
			<div className="image_cards">
				<div className="first_img">
					<Link to="/women">
						<figure>
							<img src={pick1} alt="lady on bra" />
						</figure>
					</Link>
				</div>
				<Link to="/women" className="fig2">
					<figure>
						<img src={pick2} alt="lady on bra" />
					</figure>
				</Link>

				<Link to="/women" className="fig3">
					<figure>
						<img src={pick3} alt="lady on bra" />
					</figure>
				</Link>

				<Link to="/women" className="fig4">
					<figure>
						<img src={pick4} alt="lady on bra" />
					</figure>
				</Link>
				<Link to="/women" className="fig5">
					<figure>
						<img src={pick5} alt="lady on bra" />
					</figure>
				</Link>

				<Link to="/women" className="fig6">
					<figure>
						<img src={pick6} alt="lady on bra" />
					</figure>
				</Link>
				<Link to="/women" className="fig7">
					<figure>
						<img src={pick7} alt="lady on bra" />
					</figure>
				</Link>
			</div>
		</div>
	);
}

export default TopPick