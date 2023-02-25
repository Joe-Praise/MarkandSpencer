import React from 'react'
import { Link } from 'react-router-dom'

const DropDownBtn = ({btnValue}) => {
  return (
		<ul className="nav_btn_container">
			<li>
				<Link to="" className="category_links">
					{btnValue}
				</Link>
			</li>
		</ul>
  );
}

export default DropDownBtn