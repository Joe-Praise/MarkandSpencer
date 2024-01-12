import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context/Context';
import FormBtn from '../../SignIn/FormBtn';
import { useEffect, useState } from 'react';
const Products = () => {
	const { products, getProducts, dispatchNotification } =
		useContext(AppContext);
	const [update, setUpdate] = useState(false);
	const [id, setId] = useState(false);
	const [edit, setEdit] = useState('');
	const [modal, setModal] = useState(false);

	const [post, setPost] = useState({
		name: '',
		category: '',
		price: '',
		quantity: '',
		description: '',
	});
	const [files, setFiles] = useState({
		image: null,
	});
	const handleUpdate = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		if (name === 'image') {
			let file = e.target.files[0];
			setFiles({ image: file });
		}
		setPost({ ...post, [name]: value });
	};

	// assigning the form values to variables for easy undrerstanding
	let file = files.image;
	let name = post.name;
	let quantity = post.quantity;
	let category = post.category;
	let price = post.price;
	let description = post.description;
	let formData = new FormData();
	formData.append('name', name);
	formData.append('category', category);
	formData.append('quantity', quantity);
	formData.append('price', price);
	formData.append('description', description);
	formData.append('image', file);

	useEffect(() => {
		if (update) {
			getProducts();
		}

		return () => {
			setUpdate(false);
		};
	}, [update, getProducts]);

	const handleDeleteProduct = (id) => {
		fetch(`http://159.65.21.42:9000/product/${id}`, {
			method: 'DELETE',
		})
			.then((resp) => resp.json())
			.then((data) => {
				dispatchNotification({
					message: 'Product Deleted',
					type: 'success',
				});
				setUpdate(true);
			})
			.catch((error) => {
				dispatchNotification({
					message: 'An error occured',
					type: 'error',
				});
				console.error(error);
			});
	};

	const editProduct = (e) => {
		e.preventDefault();
		fetch(`http://159.65.21.42:9000/product/${id}`, {
			method: 'PUT',
			enctype: 'multipart/form-data',
			body: formData,
			processData: false,
			contentType: false,
		})
			.then((resp) => resp.json())
			.then((data) => {
				setId(null);
				dispatchNotification({
					message: 'Product Successfully Updated',
					type: 'success',
				});
				setUpdate(true);
				console.log(data);
			})
			.catch((error) => {
				dispatchNotification({
					message: 'An error occured',
					type: 'error',
				});
				console.error(error);
			});
		setModal(false);
		document.body.style.overflowY = 'auto';
	};

	const cancelEdit = () => {
		setModal(false);
		setId(null);
		document.body.style.overflowY = 'auto';
	};

	const handleEditBtn = (product) => {
		setId(product._id);
		setModal(true);
		setEdit(product);
		document.body.style.overflowY = 'hidden';
	};

	return (
		<div>
			<h3>Products</h3>
			{products.length ? (
				<div className='Product_container_admin'>
					{products.map((product) => (
						<div className='product_card' key={product._id}>
							<figure>
								<img
									src={`http://159.65.21.42:9000${product.image}`}
									alt={product.description}
								/>
							</figure>
							<p>£{product.price.toFixed(2)}</p>
							<p className='collection'>{product.name}</p>
							<p className='description'>{product.description}</p>
							<p>{product.quantity}</p>

							<div className='product_btn'>
								<FormBtn
									bg={'green'}
									value='Edit'
									onClick={() => handleEditBtn(product)}
								/>
								<FormBtn
									bg={'red'}
									value='Delete'
									onClick={() => handleDeleteProduct(product._id)}
								/>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className='isLoading'>🚀</div>
			)}
			{modal ? (
				<div className='sign_in_container position_fixed'>
					<form className='create_porduct_form'>
						<legend>Edit Product Details</legend>
						<div>
							<label htmlFor=''>Name</label>
							<input
								type='text'
								name='name'
								value={edit.name}
								onChange={handleUpdate}
							/>
						</div>
						<div>
							<label htmlFor=''>Category</label>
							<select name='category' id='' onChange={handleUpdate}>
								<option value=''>Select</option>
								<option value='M&S'>Mark and spencer</option>
							</select>
						</div>
						<div>
							<label htmlFor=''>Price</label>
							<input
								type='text'
								name='price'
								value={edit.price}
								onChange={handleUpdate}
							/>
						</div>
						<div>
							<label htmlFor=''>Quantity</label>
							<input
								type='text'
								name='quantity'
								value={edit.quantity}
								onChange={handleUpdate}
							/>
						</div>
						<div>
							<label htmlFor=''>Image</label>
							<input type='file' name='image' onChange={handleUpdate} />
						</div>
						<div>
							<label htmlFor='boby'>Description</label>
							<textarea
								name='description'
								value={edit.description}
								onChange={handleUpdate}
							></textarea>
						</div>
						<div className='products_btn'>
							<FormBtn
								width={'45%'}
								value='Cancel'
								bg={'#ea122a'}
								onClick={cancelEdit}
							/>
							<FormBtn
								width={'45%'}
								value='Edit User'
								bg={'#b4cc51'}
								onClick={editProduct}
							/>
						</div>
					</form>
				</div>
			) : null}
		</div>
	);
};

export default Products;
