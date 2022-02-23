import { useState } from "react";
import Input from "./Input";

function ProductForm() {
	const [formProperty, setFormProperty] = useState([]);
	// type, name, value, handleChange, labelText, required
	return (
		<section className="h-screen">
			<div className="container px-6 py-12 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
						<img
							src="https://cdn.shopify.com/s/files/1/1859/5505/products/peacelily1.jpg?v=1634883411"
							className="w-1/2"
							alt="Phone image"
						/>
					</div>
					<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
						<form>
							{/* <!-- Email input --> */}
							<Input
								type="text"
								name="name"
								value=""
								required="true"
								handleChange=""
							/>

							{/* <!-- Submit button --> */}
							<button
								type="submit"
								className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductForm;
