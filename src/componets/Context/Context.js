import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext} from "react";

export const AppContext = createContext();
function DataContext({ children }) {
	const [users, setUsers] = useState([]);	
	const [products, setProducts] = useState([]);
	const [isSize, setIsSize] = useState("");
	const [isQty, setIsQty] = useState(1);
	const [cartQty, setCartQty] = useState(1)
	const [cart, setCart]= useState([])
	const cartData = localStorage.getItem("MsCart");
	
	const getUsers = () => {
		fetch("http://159.65.21.42:9000/users")
			.then((resp) => resp.json())
			.then((data) => {
				setUsers(data)
			});
	}

	const getProducts = () => {
		fetch("http://159.65.21.42:9000/products")
			.then((resp) => resp.json())
			.then((data) => {
				const myProducts = data.filter((item) => {
					return item.category === "M&S";
				})
				setProducts(myProducts);
			});
	};

    	const rotate = (e) => {
			let target = e.currentTarget.firstElementChild;
			if (target) {
				target.classList.toggle("rotate");
			}
			let newTarget = e.currentTarget;

			let dropdown = newTarget.nextElementSibling;
			if (dropdown.style.maxHeight) {
				dropdown.style.maxHeight = null;
			} else {
				dropdown.style.maxHeight = dropdown.scrollHeight + "px";
			}
	};
	
	const quantity = [
		{ qty: "1", value: "1" },
		{ qty: "2", value: "2" },
		{ qty: "3", value: "3" },
		{ qty: "4", value: "4" },
		{ qty: "5", value: "5" },
		{ qty: "6", value: "6" },
		{ qty: "7", value: "7" },
		{ qty: "8", value: "8" },
		{ qty: "9", value: "9" },
		{ qty: "10", value: "10" },
		{ qty: "11", value: "11" },
		{ qty: "12", value: "12" },
		{ qty: "13", value: "13" },
		{ qty: "14", value: "14" },
		{ qty: "15", value: "15" },
		{ qty: "16", value: "16" },
		{ qty: "17", value: "17" },
		{ qty: "18", value: "18" },
		{ qty: "19", value: "19" },
		{ qty: "20", value: "20" },
	];

	const grandTotal = [...cart].map(({ totalPrice }) => totalPrice).reduce((total, initial) => {
		return total + initial;
	}, 0);

	const activateCart = () => {
		if (cartData) {
			let cartitems = JSON.parse(cartData);
			setCart(cartitems);
		}
	};
	const runCart = (item) => {
		let initialCartItem = [...cart];
		let checkItem = initialCartItem.find(
			(cart_item) => cart_item._id === item._id
		);
		if (checkItem) {
			alert("Item already in cart");
		} else {
			let newCartItem = {
				...item,
				quantity: parseInt(isQty),
				totalPrice: item.price * parseInt(isQty),
				size: isSize,
			};
			initialCartItem.push(newCartItem);
			setCart(initialCartItem);
			localStorage.setItem("MsCart", JSON.stringify(initialCartItem));
			alert("Item added to cart");
		}
	}
	const addToBag = (item) => {

		if (isSize !== "") {
			runCart(item);
		} else {
			alert("select size");
			return;
		}


		// let initialCartItem = [...cart];
		// let checkItem = initialCartItem.find((cart_item) => cart_item._id === item._id);
		// setIsFetch(true);
		// if (checkItem) {
		// 	alert("Item already in cart");
		// } else {
		// 	let newCartItem = { ...item, quantity: isQty, totalPrice: item.price * isQty, size: isSize};
		// 	initialCartItem.push(newCartItem);
		// 	setCart(initialCartItem);
		// 	localStorage.setItem("MsCart", JSON.stringify(initialCartItem));
		// 	alert("Item added to cart");
		// }
	};
	const changeQty = (item) => {
		let initialCartItem = [...cart];
		initialCartItem.map((cart_item) => {
			if (cart_item._id === item._id) {
				item.quantity = parseInt(cartQty);
				item.totalPrice = cart_item.price * parseInt(cartQty);
			}
		});
		setCart(initialCartItem);
		localStorage.setItem("MsCart", JSON.stringify(initialCartItem));
	}
	const deleteCartItem = (item) => {
		let initialCartItem = [...cart];
		let cartItems = initialCartItem.filter((cart_item) => cart_item._id !== item._id);
		setCart(cartItems);
		localStorage.setItem("MsCart", JSON.stringify(cartItems));
	}

	useEffect(() => {
		getUsers()
		getProducts()
		activateCart()
	}, []);
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
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export default DataContext;