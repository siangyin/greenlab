import { useState, useEffect } from "react";
import { BE_URL } from "../helpers";
import axios from "axios";
import { Input, ButtonAction, Subheader } from "./";

function ProductForm() {
	const [productsData, setProductsData] = useState();
	const [selectedFile, setSelectedFile] = useState(null);
	const url = `${BE_URL}/products`;
	const userID = localStorage.getItem("userID");

	function onChangeHandler(e) {
		const newData = { ...productsData };
		newData[e.target.name] = e.target.value;
		if (newData.price) {
			newData.price = Number(newData.price);
			//   console.log("Price", newData.price);
		}
		setProductsData(newData);
		console.log(newData);
	}

	// Create POST request with body (without Image yet)
	async function createProduct() {
		let payload = { ...productsData, createdBy: userID };
		let res = await axios.post(url, payload);
		console.log(res.data);
		uploadImg(res.data.data._id);
	}

	// upload img
	async function uploadImg(prodId) {
		const formData = new FormData();
		formData.append("image", selectedFile);
		try {
			const response = await axios({
				method: "post",
				url: `${BE_URL}/products/${prodId}/uploadimage`,
				data: formData,
				headers: { "Content-Type": "multipart/form-data" },
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<form className="m-10">
			{/* <!-- Name input --> */}
			<Input
				type="text"
				name="name"
				value={productsData ? productsData.name : ""}
				required="true"
				handleChange={onChangeHandler}
			/>
			{/* <!-- Price input --> */}
			<Input
				type="number"
				name="price"
				value={productsData ? productsData.price : ""}
				required="true"
				handleChange={onChangeHandler}
			/>
			{/* <!-- Category input --> */}
			<Input
				type="text"
				name="category"
				value={productsData ? productsData.category : ""}
				required="true"
				handleChange={onChangeHandler}
			/>
			{/* <!-- Image input --> */}
			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-5"
				type="file"
				onChange={(e) => {
					setSelectedFile(e.target.files[0]);
				}}
			/>

			{/* <!-- Submit button --> */}
			<ButtonAction labelText="add product" handleClick={createProduct} />
		</form>
	);
}

export default ProductForm;
