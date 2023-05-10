import React from "react";
import BarChart  from "../BarChart"
import DisplayCards from "../DisplayCards";
import { useState } from "react";
import Table from "../Table";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";
const DashBoard = () => {
	const { users, products, cart } = useContext(AppContext);

	const style = {
		overflowX: "auto",
	};

	const [Total] = useState([
			{
				id: 1,
				category: "Total Products",
				score: products.length,
			},
	
			{
				id: 2,
				category: "Total Users",
				score: users.length,
			},
	
			{
				id: 3,
				category: "Total Product in Cart",
				score: cart.length,
			}
		])
  
      const [userData] = useState({
			labels: Total.map((data) => data.category),
			datasets: [
				{
					label: "Shop Activities",
					data: Total.map((data) => data.score),
					backgroundColor: [
						"#045742",
						"#b4cc51",
						"#ea122a",
					],
					borderColor: "black",
					borderWidth: 2,
				},
			],
		});

	
	return (
		<div>
			<div className="dashboard_container">
				<DisplayCards />
				<div className="left_side">
					<div style={style} className="table_container">
						<Table />
					</div>
				</div>
				<div className="chart">
					<BarChart chartData={userData} />
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
