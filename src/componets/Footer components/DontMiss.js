import React from 'react'
import Btn from '../yourWay/Btn';

const DontMiss = () => {
    const prevent = (e) => {
        e.preventDefault();
    }
  return (
		<div className="dontmiss_container">
			<h3>Don't miss out</h3>
			<p>
				Register to receive exclusive offers tailored to you, plus
				rewards and promotions before anyone else. Just select ‘YES’
				during step 3 on the next page and never miss a thing.
			</p>
			<form>
				<div>
					<input type="text" placeholder="Enter email address" />
				</div>
				<Btn
					onClick={prevent}
					value="Get Started"
					bg="lightgreen"
					shade="black"
					border="lightgreen"
				/>
			</form>
		</div>
  );
}

export default DontMiss