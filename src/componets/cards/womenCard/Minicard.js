import React from 'react'
import { Link } from 'react-router-dom';

const Minicard = ({ img, text1, text2, text3 }) => {

    return (
		<div className="miniCard_container">
			<div className="miniCard">
				<div className="miniCard_text_section">
					<h3>{text1}</h3>
					<p>{text2}</p>
					<Link to="/shop" className="links">
						<p className="bottom_text">
							{text3}
							<span className="p_arrow">→</span>
						</p>
					</Link>
				</div>
				<figure>
					<Link to="/shop" className="links">
						<img src={img} alt="Mini information card " />
					</Link>
				</figure>
			</div>
		</div>
	);
}

export default Minicard