import React from 'react'
import img1 from "../../../images/womenPage/more_to_explore_1.webp";
import img2 from "../../../images/womenPage/more_to_explore_2.webp";
import img3 from "../../../images/womenPage/more_to_explore_3.webp";
import img4 from "../../../images/womenPage/more_to_explore_4.webp";
import MoreToExploreCard from './MoreToExploreCard';


const MoreToExplore = () => {
  return (
		<div className="padding_3">
			<h2>VALUE YOU CAN TRUST</h2>
			<div className="ways_to_wow_container">
				<MoreToExploreCard
					img={img1}
					description="What to pack for a stylish break"
					redirect="Be inspired"
				/>
				<MoreToExploreCard
					img={img2}
					description="Denim that gets you"
					redirect="Outfit ideas this way"
				/>
				<MoreToExploreCard
					img={img3}
					description="Smart glasses from M&S opticians"
					redirect="Shop now"
				/>
				<MoreToExploreCard
					img={img4}
					description="Join us for one of our live shows"
					redirect="See what's on"
				/>
			</div>
		</div>
  );
}

export default MoreToExplore