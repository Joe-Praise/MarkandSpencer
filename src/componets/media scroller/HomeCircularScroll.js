import React from 'react'
import CircleCard from './CircleCard'
import C_card1 from "../../images/homePage/homecircle_1.webp"
import C_card2 from "../../images/homePage/homecircle_2.webp"
import C_card3 from "../../images/homePage/homecircle_3.webp"
import C_card4 from "../../images/homePage/homecircle_4.webp"
import C_card5 from "../../images/homePage/homecircle_5.webp"
import C_card6 from "../../images/homePage/homecircle_6.webp"
import C_card7 from "../../images/homePage/homecircle_7.webp"
import C_card8 from "../../images/homePage/homecircle_8.webp"
import C_card9 from "../../images/homePage/homecircle_9.webp"
import C_card10 from "../../images/homePage/homecircle_10.webp"
import C_card11 from "../../images/homePage/homecircle_11.webp"
import C_card12 from "../../images/homePage/homecircle_12.webp"
import C_card13 from "../../images/homePage/homecircle_13.webp"
import C_card14 from "../../images/homePage/homecircle_14.webp"
import C_card15 from "../../images/homePage/homecircle_15.webp"
import C_card16 from "../../images/homePage/homecircle_16.webp"

const HomeCircularScroll = () => {
	const style = {
		backgroundColor: "white"
	}
  return (
		<div style={style} className="shop_by_Department">
			<h1>Shop by department</h1>
			<div className="horizontal_scroll_container snaps_inline">
				<CircleCard pic={C_card1} text="Women's" />
				<CircleCard pic={C_card2} text="Lingerie" />
				<CircleCard pic={C_card3} text="Men's" />
				<CircleCard pic={C_card4} text="Kid's" />
				<CircleCard pic={C_card5} text="School uniform" />
				<CircleCard pic={C_card6} text="Home" />
				<CircleCard pic={C_card7} text="Furniture" />
				<CircleCard pic={C_card8} text="Beauty" />
				<CircleCard pic={C_card9} text="Gifting" />
				<CircleCard pic={C_card10} text="Flowers" />
				<CircleCard pic={C_card11} text="Brands" />
				<CircleCard pic={C_card12} text="Food & wine" />
				<CircleCard pic={C_card13} text="Offers" />
				<CircleCard pic={C_card14} text="Gift cards" />
				<CircleCard pic={C_card15} text="Inspire me" />
				<CircleCard pic={C_card16} text="Holiday Shop" />
			</div>
		</div>
  );
}

export default HomeCircularScroll