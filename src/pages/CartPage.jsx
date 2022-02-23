import { useContext, useState, useEffect } from "react";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { CartItem, LoadingSpinner } from "../components";

function CartPage() {
	const [userCartDb, setUserCartDb] = useState();
	const localuser = localStorage.getItem("userID");

	// functions
	const getCurrentUserCart = async (req, res) => {
		try {
			if (localuser) {
				const res = await axios.get(`${BE_URL}/carts?userId=${localuser}`);
				console.log(res.data.data);
				setUserCartDb(res.data.data);
			}
		} catch (err) {
			console.error(err);
		}
	};

	let subtotalSum = 0;
	let qtySum = 0;
	if (userCartDb) {
		const calculatedSubtotal = userCartDb.map((item) => {
			qtySum += Number(item.qty);
			subtotalSum += Number(item.price * item.qty);
		});
	}

	useEffect(() => {
		getCurrentUserCart();
	}, []);

	if (!userCartDb) {
		return <LoadingSpinner />;
	}

	return (
		<div className="container mx-auto mt-10">
			<div className="flex shadow-md my-10">
				<div className="w-3/4 bg-white px-10 py-10">
					<div className="flex justify-between border-b pb-8">
						<h1 className="font-semibold text-2xl">Shopping Cart</h1>
						<h2 className="font-semibold text-2xl">3 Items</h2>
					</div>
					{/* header */}
					<div className="flex mt-10 mb-5">
						<h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
							Product Details
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
							Quantity
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
							Price
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
							Subtotal
						</h3>
					</div>

					{/* content */}
					{userCartDb &&
						userCartDb.map((item) => {
							return (
								<CartItem
									key={item._id}
									item={item}
									handleUpdate=""
									handleDelete=""
								/>
							);
						})}
					{/* content */}

					<a
						href="/"
						className="flex font-semibold text-emerald-600 text-sm mt-10"
					>
						<FaArrowLeft />
						Continue Shopping
					</a>
				</div>

				<div id="summary" className="w-1/4 px-8 py-10">
					<h1 className="font-semibold text-2xl border-b pb-8">
						Order Summary
					</h1>
					<div className="flex justify-between mt-10 mb-5">
						<span className="font-semibold text-sm uppercase">
							Total Items {qtySum}
						</span>
						<span className="font-semibold text-sm">590$</span>
					</div>
					<div>
						<label className="font-medium inline-block mb-3 text-sm uppercase">
							Shipping
						</label>
						<select className="block p-2 text-gray-600 w-full text-sm">
							<option>Standard shipping - $10.00</option>
						</select>
					</div>

					<div className="border-t mt-8">
						<div className="flex font-semibold justify-between py-6 text-sm uppercase">
							<span>Total cost</span>
							<span>$ {subtotalSum + 10}</span>
						</div>
						<button className="bg-emerald-500 font-semibold hover:bg-emerald-600 py-3 text-sm text-white uppercase w-full">
							submit order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPage;
