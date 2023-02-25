import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext} from "../Context/Context";
import DeliveryCollectionReturns from "./DeliveryCollectionReturns";
import img1 from "../../images/singleProductPage/delivery.webp";
import img2 from "../../images/singleProductPage/nominated_day.webp";
import img3 from "../../images/singleProductPage/collection.webp";import img4 from "../../images/singleProductPage/returns.webp";
import SizeChartInfoComp from "./SizeChartInfoComp";

const SizeChart = () => {
    const { rotate } = useContext(AppContext);
	return (
		<div className="size_chart_container">
			<p className="header">
				SIZE CHART <i className="fa-solid fa-angle-right"></i>
			</p>
			<div className="sizeChart_info_container">
				<SizeChartInfoComp
					title={"What customers say"}
					body={"Fits true to size"}
				/>
				<SizeChartInfoComp
					title={"Model details"}
					body={'Model is 5ft 7" / 170cm, wearing size 8'}
				/>
				<SizeChartInfoComp
					title={"Length"}
					body={"Neck to hem length for a size 12: 64cm"}
				/>
			</div>
			<div className="text">
				<p>
					Add this classic crew neck t-shirt to your wardrobe. Cut in
					a regular fit from a heavier weight pure cotton for a
					substantial feel. Finished with wide sleeves for a boxy
					look. M&S Collection: easy-to-wear wardrobe staples that
					combine classic and contemporary styles.
				</p>
				<p>
					We've styled this with
					<Link to="" className="links">
						jeans
					</Link>
					and
					<Link to="" className="links">
						trainers
					</Link>
				</p>
			</div>
			<div className="accordion_container">
				<p onClick={rotate} className="accordion header">
					DETAILS & CARE
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
				<div className="panel_container panel">
					<p className="bold">Fit and style</p>

					<p>Regular fit</p>

					<p className="bold">Composition</p>

					<p>100% cotton (exclusive of trimmings)</p>

					<p className="bold">Care</p>

					<p>
						Wash at 40 <sup>°</sup>C delicate
					</p>

					<p>Do not bleach</p>
					<p>Tumble dry medium temperature</p>
					<p>iron at medium temperature</p>
				</div>

				<p onClick={rotate} className="accordion header">
					DELIVERY, COLLECTION & RETURNS
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
				<div className="panel_container panel">
					<DeliveryCollectionReturns
						img={img1}
						head={"Delivery"}
						text1={"Standard"}
						text2={"FREE over £60, or £3.50"}
					/>

					<DeliveryCollectionReturns
						img={img2}
						head={""}
						text1={"Nominated day"}
						text2={"£4.99. Order by 8pm for delivery tomorrow"}
					/>

					<DeliveryCollectionReturns
						img={img3}
						head={"Collection"}
						text1={"Collect from store"}
						text2={
							"Order before 10pm for free next-day in-store collection"
						}
					/>

					<DeliveryCollectionReturns
						img={img4}
						head={"Returns"}
						text1={"UK returns"}
						text2={"FREE"}
					/>
				</div>
			</div>
		</div>
	);
};

export default SizeChart;
