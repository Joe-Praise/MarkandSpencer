import React from 'react';
import MsFavouritesCard from '../../MsFavourites/MsFavouritesCard';
import value1 from "../../../../images/womenPage/value_1.webp";
import value2 from "../../../../images/womenPage/value_2.webp";
import value3 from "../../../../images/womenPage/value_3.webp";


const ValueYouCanTrust = () => {
  return (
		<div className="padding_3">
			<h2>VALUE YOU CAN TRUST</h2>
			<div className="value_you_can_trust_container">
				<MsFavouritesCard
					img={value1}
					description="Long-sleeved tops, from £9.50"
					redirect="Shop now"
				/>
				<MsFavouritesCard
					img={value2}
					description="Faux-leather leggings, from £22.50"
					redirect="Shop now"
				/>
				<MsFavouritesCard
					img={value3}
					description="Supersoft jumpers, from £17.50"
					redirect="Shop now"
				/>
			</div>
		</div>
  );
}

export default ValueYouCanTrust