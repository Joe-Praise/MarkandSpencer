import React from 'react'
import { Link} from 'react-router-dom';

function EscapeForWinterCard({img, price}) {
  return (
		<figure>
			<Link to="/shop" className="links">
				<img src={img} alt="product portrait" />
				<figcaption className="product_details">{price}</figcaption>
			</Link>
		</figure>
  );
}

export default EscapeForWinterCard