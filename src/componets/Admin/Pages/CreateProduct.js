import React from "react";
import FormBtn from "../../SignIn/FormBtn";
import { useState } from "react";
const CreateProduct = () => {
    const [post, setPost] = useState({
		name: "",
		category: "",
		price: "",
		quantity: "",
		description: "",
	});
	const [files, setFiles] = useState({
		image: null
	}) 
	const handleInputValue = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		if (name === "image") {
			let file = e.target.files[0];
			setFiles({image: file})
		}		
		setPost({ ...post, [name]: value });
	}
	
	// assigning the form values to variables for easy undrerstanding
	let file = files.image;
	let name = post.name;
	let quantity = post.quantity
	let category = post.category
	let price = post.price
	let description = post.description
	let formData = new FormData()
	formData.append("name", name);
	formData.append("category", category)
	formData.append("quantity", quantity)
	formData.append("price", price)
	formData.append("description", description);
	formData.append("image", file);
	
    const createProduct = (e) => {
        e.preventDefault();
        fetch("http://159.65.21.42:9000/create/product", {
			method: "POST",
            enctype: "multipart/form-data",
			body: formData,
			processData: false,
			contentType: false,
		})
			.then((resp) => resp.json())
			.then((data) => {
				alert("Product Created");
				console.log(data);
			})
			.catch((error) => {
				console.error(`ERROR: ${error}`);
			});
    }
    
    return (
		<div>
			<div className="sign_in_container">
				<legend>Create Product</legend>
				<form className="create_porduct_form" onSubmit={createProduct}>
					<div>
						<label htmlFor="">Name</label>
						<input
							type="text"
							name="name"
							onChange={handleInputValue}
						/>
					</div>
					<div>
						<label htmlFor="">Category</label>
						<select
							name="category"
							id=""
							onChange={handleInputValue}
						>
							<option value="">Select</option>
							<option value="M&S">Mark and spencer</option>
						</select>
					</div>
					<div>
						<label htmlFor="">Price</label>
						<input
							type="text"
							name="price"
							onChange={handleInputValue}
						/>
					</div>
					<div>
						<label htmlFor="">Quantity</label>
						<input
							type="text"
							name="quantity"
							onChange={handleInputValue}
						/>
					</div>
					<div>
						<label htmlFor="">Image</label>
						<input
							type="file"
							name="image"
							onChange={handleInputValue}
						/>
					</div>
					<div>
						<label htmlFor="boby">Description</label>
						<textarea
							name="description"
							onChange={handleInputValue}
						></textarea>
					</div>
					<FormBtn width={"100%"} value="Create" bg={"#b4cc51"} />
				</form>
			</div>
		</div>
	);
};

export default CreateProduct;
