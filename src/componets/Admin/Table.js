import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
const Table = () => {
	const { products } = useContext(AppContext);
	let tableProd = products.slice(0, 10);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Description</th>
						<th>Quantity</th>
						<th>Collection</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{tableProd.map((prod) => {
						return (
							<tr key={prod._id}>
								<td>
									<figure>
										<img
											src={`http://159.65.21.42:9000${prod.image}`}
											alt="random product"
										/>
									</figure>
								</td>
								<td>{prod.description}</td>
								<td>{prod.quantity}</td>
								<td>{prod.name}</td>
								<td>£{prod.price.toFixed(2)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Table;
