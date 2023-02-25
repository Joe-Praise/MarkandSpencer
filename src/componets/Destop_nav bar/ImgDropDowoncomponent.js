import React from 'react'
import { Link } from 'react-router-dom';

const ImgDropDowoncomponent = ({
	img,
	figcaption,
	paragraph,
	link1,
	link2,
}) => {
	return (
		<ul className="img">
			<li>
                <figure>
                    <Link to="">
					    <img src={img} alt="" />
                    </Link>
					<figcaption>{figcaption}</figcaption>
				</figure>
			</li>
			<li>{paragraph}</li>
			<li>
				<Link to="" className="img_links">
					{link1}
				</Link>
			</li>
			<li>
				<Link to="" className="img_links">
					{link2}
				</Link>
			</li>
		</ul>
	);
};

export default ImgDropDowoncomponent