import React from 'react';
import BeautyDropDown from './BeautyDropDown';
import BrandsDropDown from './BrandsDropDown';
import FlowersDropDown from './FlowersDropDown';
import FoodDropDown from './FoodDropDown';
import FurnitureDropDown from './FurnitureDropDown';
import GiftDropDown from './GiftDropDown';
import HomeDropDown from './HomeDropDown';
import InspireMeDropDown from './InspireMeDropDown';
import KidsDropDown from './KidsDropDown';
import LingerieDropDown from './LingerieDropDown';
import MenDropDown from './MenDropDown';
import MSBankDropDown from './MSBankDropDown';
import OfferDropDown from './OfferDropDown';
import WomenDropdown from './WomenDropdown';
const Dropdown = () => {
	return (
		<nav role='navigation'>
			<ul className='desktop_nav_links line2'>
				<WomenDropdown />
				<LingerieDropDown />
				<MenDropDown />
				<KidsDropDown />
				<HomeDropDown />
				<FurnitureDropDown />
				<BeautyDropDown />
				<BrandsDropDown />
				<FlowersDropDown />
				<GiftDropDown />
				<FoodDropDown />
				<OfferDropDown />
				<InspireMeDropDown />
				<MSBankDropDown />
			</ul>
		</nav>
	);
};

export default Dropdown;
