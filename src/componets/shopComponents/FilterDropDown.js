import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import FilterDropDownForm from "./FilterDropDownForm";

const DropdownFilter = () => {
	const { rotate} = useContext(AppContext);
	const productType = [
		{
			id: 1,
			item: "Dresses",
			quantity: "47",
		},
		{
			id: 2,
			item: "Blouse",
			quantity: "24",
		},
		{
			id: 3,
			item: "Trousers",
			quantity: "17",
		},
		{
			id: 4,
			item: "Blazers",
			quantity: "9",
		},
		{
			id: 5,
			item: "T-shirt",
			quantity: "2",
		},
		{
			id: 6,
			item: "Tops",
			quantity: "5",
		},
		{
			id: 7,
			item: "Jeans",
			quantity: "2",
		},
		{
			id: 8,
			item: "Jackets",
			quantity: "1",
		},
		{
			id: 9,
			item: "Shoes",
			quantity: "1",
		},
		{
			id: 10,
			item: "Leggings",
			quantity: "5",
		},
		{
			id: 11,
			item: "Sandals",
			quantity: "4",
		},
		{
			id: 12,
			item: "Skirt",
			quantity: "3",
		},
		{
			id: 13,
			item: "Bags",
			quantity: "2",
		},
		{
			id: 14,
			item: "Jeggings",
			quantity: "2",
		},
		{
			id: 15,
			item: "Shirts",
			quantity: "2",
		},
		{
			id: 16,
			item: "Joggers",
			quantity: "1",
		},
	];

	const size = [
		{
			id: 1,
			item: "3",
			quantity: "4",
		},
		{
			id: 2,
			item: "4",
			quantity: "4",
		},
		{
			id: 3,
			item: "5",
			quantity: "4",
		},
		{
			id: 4,
			item: "6",
			quantity: "99",
		},
		{
			id: 5,
			item: "7",
			quantity: "4",
		},
		{
			id: 6,
			item: "8",
			quantity: "128",
		},
		{
			id: 7,
			item: "10",
			quantity: "136",
		},
		{
			id: 8,
			item: "12",
			quantity: "145",
		},
		{
			id: 9,
			item: "14",
			quantity: "153",
		},
		{
			id: 10,
			item: "16",
			quantity: "150",
		},
		{
			id: 11,
			item: "18",
			quantity: "152",
		},
		{
			id: 12,
			item: "20",
			quantity: "133",
		},
		{
			id: 13,
			item: "22",
			quantity: "90",
		},
		{
			id: 14,
			item: "24",
			quantity: "71",
		},
		{
			id: 15,
			item: "Extra Small",
			quantity: "18",
		},
		{
			id: 16,
			item: "Small",
			quantity: "18",
		},
		{
			id: 17,
			item: "Medium",
			quantity: "18",
		},
		{
			id: 18,
			item: "Large",
			quantity: "18",
		},
		{
			id: 19,
			item: "Extra Large",
			quantity: "16",
		},
		{
			id: 20,
			item: "8 short/petite",
			quantity: "17",
		},
		{
			id: 21,
			item: "20 petite",
			quantity: "7",
		},
	];

	const color = [
		{
			id: 1,
			item: "Pink",
			quantity: "26",
		},
		{
			id: 2,
			item: "Black",
			quantity: "28",
		},
		{
			id: 3,
			item: "green",
			quantity: "19",
		},
		{
			id: 4,
			item: "Navy",
			quantity: "11",
		},
		{
			id: 5,
			item: "Red",
			quantity: "19",
		},
		{
			id: 6,
			item: "Orange",
			quantity: "4",
		},
		{
			id: 7,
			item: "Beige",
			quantity: "3",
		},
		{
			id: 8,
			item: "Brown",
			quantity: "4",
		},
		{
			id: 9,
			item: "Cream",
			quantity: "4",
		},
		{
			id: 10,
			item: "Blue",
			quantity: "4",
		},
		{
			id: 11,
			item: "Grey",
			quantity: "1",
		},
		{
			id: 12,
			item: "Multi-Coloured",
			quantity: "2",
		},
	];

	const material = [
		{
			id: 1,
			item: "Cotton",
			quantity: "6",
		},
		{
			id: 2,
			item: "Linen",
			quantity: "2",
		},
		{
			id: 3,
			item: "Silk",
			quantity: "1",
		},
		{
			id: 4,
			item: "Suede",
			quantity: "1",
		},
		{
			id: 5,
			item: "Leather",
			quantity: "3",
		},
	];

	const Brand = [
		{
			id: 1,
			item: "M&S Collection",
			quantity: "85",
		},
		{
			id: 2,
			item: "Ghost",
			quantity: "18",
		},
		{
			id: 3,
			item: "Pre Una",
			quantity: "4",
		},
		{
			id: 4,
			item: "SOSANDAR",
			quantity: "8",
		},
		{
			id: 5,
			item: "Nobody's Child",
			quantity: "2",
		},
		{
			id: 6,
			item: "JAEGER",
			quantity: "1",
		},
		{
			id: 7,
			item: "Albaray",
			quantity: "3",
		},
		{
			id: 8,
			item: "Dune London",
			quantity: "3",
		},
		{
			id: 9,
			item: "Autograph",
			quantity: "1",
		},
		{
			id: 10,
			item: "HOBBS",
			quantity: "1",
		},
		{
			id: 11,
			item: "Jones Bootmaker",
			quantity: "1",
		},
	];

	const close = (e) => {
		let target = e.currentTarget.parentElement.parentElement;
		target.style.left="100%"
		console.log(target);
	}
	return (

		<div className="popupFilter">
			<p className="filter_header">
				Filters
				<span onClick={close}>
					<i className="fa-solid fa-x"></i>
				</span>
			</p>
			<div className="filter_accordion">
				<p className="accordion header" onClick={rotate}>
					Product Type
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
				<FilterDropDownForm options={productType} />

				<p className="accordion header" onClick={rotate}>
					Size
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
				<FilterDropDownForm options={size} />

				<p className="accordion header" onClick={rotate}>
					Color
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
				<FilterDropDownForm options={color} />

				<p className="accordion header" onClick={rotate}>
					Material
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
				<FilterDropDownForm options={material} display={"none"} />

				<p className="accordion header" onClick={rotate}>
					Brand
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
				<FilterDropDownForm options={Brand} />

				<p className="accordion header" onClick={rotate}>
					Price
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
			</div>
			<div className="filterBtn">
				<button>View Items</button>
			</div>
		</div>
	);
};

export default DropdownFilter;
