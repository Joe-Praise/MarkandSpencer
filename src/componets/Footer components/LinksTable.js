import React from 'react'
import LinksTableTemplate from './LinksTableTemplate'

const LinksTable = () => {
	const accordion = (e) => {
		let dropdown = e.currentTarget.nextElementSibling;
		if (dropdown.style.maxHeight) {
			dropdown.style.maxHeight = null;
		} else {
			dropdown.style.maxHeight = dropdown.scrollHeight + "px";
		}
	};
	return (
		<div className="links_table_container">
			<LinksTableTemplate
				title="Here to help"
				link1="Help & contact us"
				link2="Our stores"
				link3="Accessibility in our stores"
				link4="Product recalls"
				link5="Site map"
				link6="Advice before you buy"
				link7=""
				accordion={accordion}
			/>
			<LinksTableTemplate
				title="Delivery & Returns"
				link1="Where's my order?"
				link2="Delivery & collection"
				link3="Guest Order Tracking"
				link4="Guest order return"
				link5="Returns & refunds"
				accordion={accordion}
			/>
			<LinksTableTemplate
				title="Shopping with Us"
				link1="Sparks"
				link2="Sparks FAQs"
				link3="Gift card balance"
				link4="Size guides"
				link5="Sustainability"
				link6="Covid-19 - shop with confidence"
				accordion={accordion}
			/>
			<LinksTableTemplate
				title="More from M&S"
				link1="Ocado"
				link2="Corporate site"
				link3="M&S Corporate Gifts"
				link4="M&S Bank"
				link5="M&S Energy"
				link6="M&S Opticians"
				link7="Careers"
				accordion={accordion}
			/>
		</div>
	);
};

export default LinksTable;