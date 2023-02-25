import React from 'react'
import { Link } from 'react-router-dom';
import facebook from "../../images/homePage/Facebook-hover.svg";
import twitter from "../../images/homePage/Twitter.svg";
import pintrest from "../../images/homePage/Pintrest-hover.svg";
import youtube from "../../images/homePage/Youtube-hover.svg";
import instagram from "../../images/homePage/Instagram-hover.svg";
import GooglePlay from "../../images/homePage/GooglePlay-Store.svg";
import applestore from "../../images/homePage/App-Store.svg";


const BaseLinks = () => {
  return (
		<div className="base_links_container">
			<div className="socials">
				<div className="left_socials">
				  <figure>
					  <Link to="">
						<img src={facebook} alt="facebook" />
					  </Link>
					</figure>
				  <figure>
					  <Link to="">
						<img src={twitter} alt="twitter" />
					  </Link>
					</figure>
				  <figure>
					  <Link to="">
						<img src={pintrest} alt="pintrest" />
					  </Link>
					</figure>
				  <figure>
					  <Link to="">
						<img src={youtube} alt="youtube" />
					  </Link>
					</figure>
				  <figure>
					  <Link to="">
						<img src={instagram} alt="instagram" />
					  </Link>
					</figure>
				</div>
				<div className="right_socials">
				  <figure>
					  <Link to="">
						<img src={applestore} alt="Apple store" />
					  </Link>
					</figure>
				  <figure>
					  <Link to="">
						<img src={GooglePlay} alt="Google play" />
					  </Link>
					</figure>
				</div>
			</div>
			<div className="terms_conditions">
              <Link to="" className="base-links">
                  <p>
					© 2023 Marks and Spencer plc (UK) 
                  </p>
				</Link>
				
              <Link to="" className="base-links">
                  <p>
					Terms & Conditions 
                  </p>
				</Link>
				
              <Link to="" className="base-links">
                  <p>
					Privacy 
                  </p>
				</Link>
				
              <Link to="" className="base-links">
                <p>
					Cookies 
                </p>
				</Link>
				
				<Link to="" className="base-links">
                <p>
					Accessibility 
                </p>
				</Link>
				
              <Link to="" className="base-links">
                  <p>
					Modern Slavery Act 
                  </p>
				</Link>
			</div>
		</div>
  ); 
}

export default BaseLinks