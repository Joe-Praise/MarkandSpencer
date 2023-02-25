import React from 'react'
import MsFavouritesCard from '../../MsFavourites/MsFavouritesCard';
import wow1 from "../../../../images/womenPage/ways_to_wow_1.webp";
import wow2 from "../../../../images/womenPage/ways_to_wow_2.webp";
import wow3 from "../../../../images/womenPage/ways_to_wow_3.webp";
import wow4 from "../../../../images/womenPage/ways_to_wow_4.webp";

const WaysToWow = () => {
  return (
		<div className="padding_3">
			<h2>Ways to wow</h2>
			<div className="ways_to_wow_container">
				<MsFavouritesCard
					img={wow1}
					description="Occasionwear"
					redirect="Shop now"
				/>
				<MsFavouritesCard
					img={wow2}
					description="High heels"
					redirect="Shop now"
				/>
				<MsFavouritesCard
					img={wow3}
					description="Jewellery"
					redirect="Shop now"
				/>
				<MsFavouritesCard
					img={wow4}
					description="20% off women’s perfumes"
					redirect="Shop now"
				/>
			</div>
		</div>
  );
}

export default WaysToWow