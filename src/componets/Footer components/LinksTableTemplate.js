import React from 'react'
import { Link } from 'react-router-dom';

const LinksTableTemplate = ({title,link1, link2, link3, link4, link5, link6, link7, accordion}) => {
  return (
		<div className="Links_table">
			<h3 className='accordion' onClick={accordion}>{title} </h3>
			<div className='panel links'>
				<Link to="" className="table_links">{link1}</Link>
				<Link to="" className="table_links">{link2}</Link>
				<Link to="" className="table_links">{link3}</Link>
				<Link to="" className="table_links">{link4}</Link>
				<Link to="" className="table_links">{link5}</Link>
				<Link to="" className="table_links">{link6}</Link>
				<Link to="" className="table_links">{link7}</Link>
			</div>
		</div>
  );
}

export default LinksTableTemplate