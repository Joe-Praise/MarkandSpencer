import React from 'react'
import Btn from './Btn';
import YourwayCard from './YourwayCard';
import img1 from "../../images/homePage/your_ways_1.webp";
import img2 from "../../images/homePage/your_ways_2.webp";
import img3 from "../../images/homePage/your_ways_3.webp";
import img4 from "../../images/homePage/your_ways_4.webp";
import img5 from "../../images/homePage/your_ways_5.webp";
import img6 from "../../images/homePage/your_ways_6.webp";
import img7 from "../../images/homePage/your_ways_7.webp";
import img8 from "../../images/homePage/your_ways_8.webp";
import img9 from "../../images/homePage/your_ways_9.webp";
import img10 from "../../images/homePage/your_ways_10.webp";

const Yourway = () => {
  return (
		<div className="yourway_container">
			<h3>M&S, your way</h3>
			<p>
				Use #MyMarks or tag us for your chance to be featured on our
				Instagram page and win a £100 M&S voucher. T&Cs apply.
			</p>
			<div className="yourway_btn_container">
				<Btn
					value="Upload your photo"
					bg="white"
					shade="black"
					border="black"
				/>
				<Btn
					value="View gallery"
					bg="black"
					shade="white"
					border="black"
				/>
			</div>
			<div className="yourWaySLide snaps_inline">
				<YourwayCard username="peterdury" img={img1} />
				<YourwayCard username="peterdury" img={img2} />
				<YourwayCard username="peterdury" img={img3} />
				<YourwayCard username="peterdury" img={img4} />
				<YourwayCard username="peterdury" img={img5} />
				<YourwayCard username="peterdury" img={img6} />
				<YourwayCard username="peterdury" img={img7} />
				<YourwayCard username="peterdury" img={img8} />
				<YourwayCard username="peterdury" img={img9} />
				<YourwayCard username="peterdury" img={img10} />
			</div>
		</div>
  );
}

export default Yourway