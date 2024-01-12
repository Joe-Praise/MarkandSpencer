import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext();
function DataContext({ children }) {
	const Toast = toast;
	const [notifications, setNotifications] = useState([]);
	const [users, setUsers] = useState([]);
	const [products, setProducts] = useState([]);
	const [isSize, setIsSize] = useState('');
	const [isQty, setIsQty] = useState(1);
	const [cartQty, setCartQty] = useState(1);
	const [cart, setCart] = useState([]);
	const cartData = localStorage.getItem('MsCart');

	// notification handling
	const dispatchNotification = (details) => {
		setNotifications((prevState) => {
			return [...prevState, details];
		});
	};

	useEffect(() => {
		if (notifications.length > 0) {
			notifications.forEach(({ message, type, id }) => {
				if (id) {
					Toast.update(id, {
						message,
						type,
						isLoading: false,
						closeButton: true,
						autoClose: 3000,
					});
				} else {
					Toast(message, {
						type,
						toastId: 'yes',
					});
				}
			});

			setNotifications([]);
		}
	}, [setNotifications, notifications, Toast]);

	const getUsers = useCallback(() => {
		fetch('http://159.65.21.42:9000/users')
			.then((resp) => resp.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	const getProducts = useCallback(() => {
		fetch('http://159.65.21.42:9000/products')
			.then((resp) => resp.json())
			.then((data) => {
				const myProducts = data.filter((item) => {
					return item.category === 'M&S';
				});
				setProducts(myProducts);
			});
	}, []);

	const rotate = (e) => {
		let target = e.currentTarget.firstElementChild;
		if (target) {
			target.classList.toggle('rotate');
		}
		let newTarget = e.currentTarget;

		let dropdown = newTarget.nextElementSibling;
		if (dropdown.style.maxHeight) {
			dropdown.style.maxHeight = null;
		} else {
			dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
		}
	};

	const quantity = [
		{ qty: '1', value: '1' },
		{ qty: '2', value: '2' },
		{ qty: '3', value: '3' },
		{ qty: '4', value: '4' },
		{ qty: '5', value: '5' },
		{ qty: '6', value: '6' },
		{ qty: '7', value: '7' },
		{ qty: '8', value: '8' },
		{ qty: '9', value: '9' },
		{ qty: '10', value: '10' },
		{ qty: '11', value: '11' },
		{ qty: '12', value: '12' },
		{ qty: '13', value: '13' },
		{ qty: '14', value: '14' },
		{ qty: '15', value: '15' },
		{ qty: '16', value: '16' },
		{ qty: '17', value: '17' },
		{ qty: '18', value: '18' },
		{ qty: '19', value: '19' },
		{ qty: '20', value: '20' },
	];

	const grandTotal = [...cart]
		.map(({ totalPrice }) => totalPrice)
		.reduce((total, initial) => {
			return total + initial;
		}, 0);

	const activateCart = useCallback(() => {
		if (cartData) {
			let cartitems = JSON.parse(cartData);
			setCart(cartitems);
		}
	}, [cartData]);

	const runCart = (item) => {
		let initialCartItem = [...cart];
		let checkItem = initialCartItem.find(
			(cart_item) => cart_item._id === item._id
		);
		if (checkItem) {
			dispatchNotification({
				message: 'Item already in cart',
				type: 'error',
			});
		} else {
			let newCartItem = {
				...item,
				quantity: parseInt(isQty),
				totalPrice: item.price * parseInt(isQty),
				size: isSize,
			};
			initialCartItem.push(newCartItem);
			setCart(initialCartItem);
			localStorage.setItem('MsCart', JSON.stringify(initialCartItem));
			dispatchNotification({
				message: 'Item added to cart',
				type: 'success',
			});
		}
	};

	const addToBag = (item) => {
		if (isSize !== '') {
			runCart(item);
		} else {
			dispatchNotification({
				message: 'Size is required!',
				type: 'error',
			});
			return;
		}
	};

	const changeQty = (item) => {
		let initialCartItem = [...cart];
		initialCartItem.forEach((cart_item) => {
			if (cart_item._id === item._id) {
				item.quantity = parseInt(cartQty);
				item.totalPrice = cart_item.price * parseInt(cartQty);
			}
		});
		setCart(initialCartItem);
		localStorage.setItem('MsCart', JSON.stringify(initialCartItem));
	};

	const deleteCartItem = (item) => {
		let initialCartItem = [...cart];
		let cartItems = initialCartItem.filter(
			(cart_item) => cart_item._id !== item._id
		);
		setCart(cartItems);
		localStorage.setItem('MsCart', JSON.stringify(cartItems));
	};

	useEffect(() => {
		getUsers();
		getProducts();
		activateCart();
	}, [activateCart, getProducts, getUsers]);

	return (
		<AppContext.Provider
			value={{
				rotate,
				quantity,
				getUsers,
				users,
				getProducts,
				products,
				addToBag,
				isSize,
				setIsSize,
				grandTotal,
				setCart,
				cart,
				changeQty,
				deleteCartItem,
				isQty,
				setIsQty,
				cartQty,
				setCartQty,
				dispatchNotification,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default DataContext;
