import React from 'react'
import { Link } from "react-router-dom";
import uk from "../../images/homePage/union_jack_logo.webp"
const TextSlide = () => {
    return (
		<div className="top_slider_container">
			<div className="text_slide_container">
				<ul className="header_text_slide">
					<li>
						<Link to="" className="slide_links">
							Credit Card Find out more
						</Link>
					</li>
					<li>
						<Link to="" className="slide_links">
							Let's stay in touch
						</Link>
					</li>
					<li>
						<Link to="" className="slide_links">
							Save £10 on Clinique moisturisers
						</Link>
					</li>
					<li>
						<Link to="" className="slide_links">
							Winter sun, sorted at Holiday Shop
						</Link>
					</li>
					<li>
						<Link to="" className="slide_links">
							Explore our interest free credit*
						</Link>
					</li>
					<li>
						<Link to="" className="slide_links">
							Explore M&S Live Shopping Events
						</Link>
					</li>
				</ul>
			</div>
			<div className="nav_top_link">
				<Link to="" className="link">
					Help
				</Link>
				<Link to="" className="link">
					Find a store
                </Link>
                <figure>
				<img src={uk} alt="union jack logo" />
                </figure>
			</div>
		</div>
	);
}

export default TextSlide