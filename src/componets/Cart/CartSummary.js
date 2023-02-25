import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import paypal from "../../images/homePage/Paypal.svg";
import { AppContext } from '../Context/Context';

const CartSummary = () => {
    const {rotate, grandTotal} = useContext(AppContext)
  return (
		<div className="summary">
			<div className="product_header">
				<p>Summary</p>
			</div>
			<div className="total">
				<h3>
					TOTAL<span>(excluding delivery)</span>
				</h3>
			  <p className="total_price">${grandTotal}</p>
			</div>
			<div className="check_out_btn">
				<p>
					<i className="fa-solid fa-lock"></i>
					See Next Step
				</p>
			</div>
			<div className="monthly_payment">
				<p>
					3 Monthly Payments of £21.50 with
					<img src={paypal} alt="Paypal logo"/> <Link to="" className="links text_decoration">Learn More</Link>
				</p>
          </div>
          <div className='add_a_promoition'>
              	<p onClick={rotate} className="accordion header">
					Add a promotion code
					<span>
						<i className="fa-solid fa-angle-down"></i>
					</span>
				</p>
                <div className="panel_container panel">
                  <form>
                      <input type="text" />
                      <button type='button'>Apply</button>
                    </form>
                </div>
          </div>
		</div>
  );
}

export default CartSummary