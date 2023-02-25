import React from 'react'
import { Link } from 'react-router-dom';
// import { useState } from 'react';
const Mobilesublinks = ({value}) => {
    // const [isActive, setIsActive] = useState(false);
  return (
		<li className="panel_li">
			<Link to="/women" className="panel_link">
				{value}
			</Link>
		</li>
  );
}

export default Mobilesublinks