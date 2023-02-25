import React, { useContext } from 'react'
import { AppContext } from '../Context/Context';
import CartProductCard from './CartProductCard';
import CartSummary from './CartSummary';
import Offering from './Offering';
import SavedItems from './SavedItems';
const CartProductStructure = () => {
	const { cart } = useContext(AppContext)
	
	return (
		<div>
			{cart.length ? (
			<div className="cart_container_flex">  
					<div className="left_flex">
						<SavedItems />
						<CartProductCard />
						<Offering />
					</div>
					<CartSummary />
			</div>
			) :
			(
			<h2>No product in cart...</h2>	
			)
		}
	  </div>
  );
}

export default CartProductStructure