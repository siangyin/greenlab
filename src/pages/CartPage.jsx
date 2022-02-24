import { useContext, useState, useEffect } from "react";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { CartItem, LoadingSpinner, ButtonAction } from "../components";
import nodataimg from "../assets/images/nodata.svg";

function CartPage() {
	let navigate = useNavigate();
	const [userCartDb, setUserCartDb] = useState();
	const localuser = localStorage.getItem("userID");
	const [userDetail, setUserDetail] = useState();
	const getCurrentUserDetail = async (req, res) => {
		try {
			if (localuser) {
				const res = await axios.get(
					`${BE_URL}/users/myacct?userId=${localuser}`
				);
				setUserDetail(res.data);
				console.log(res.data);
			}
		} catch (err) {
			console.error(err);
		}
	};

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

	const postCartOrder = async (req, res) => {
		try {
			let cartIDs = [];
			userCartDb.map((item) => cartIDs.push(item._id));
			console.log({
				orderItems: cartIDs,
				shippingFee: 10,
				address: userDetail.address._id,
				userId: localuser,
			});
			if (localuser && userCartDb && userDetail) {
				const res = await axios.post(`${BE_URL}/orders`, {
					orderItems: cartIDs,
					shippingFee: 10,
					address: userDetail.address._id,
					userId: localuser,
				});
				if (res) {
					navigate(`/order/${res.data._id}`);
				}
				navigate(`/account-order`);
			}
		} catch (err) {
			console.log(err);
		}
	};

	async function handleDelete(id) {
		const res = await axios.delete(`${BE_URL}/carts/${id}`);
		console.log(res.data);
		window.location.reload();
	}

	useEffect(() => {
		getCurrentUserCart();
		getCurrentUserDetail();
	}, []);

	if (!userCartDb || !userDetail) {
		return (
			<div className="flex flex-col justify-center">
				<img src={nodataimg} alt="nodataimg" className="h-96" />
				<h2 className="text-center">{"Ooops... your cart is empty!"} </h2>

				<Link to="/" className="text-center">
					<button
						className="text-center bg-emerald-500 hover:bg-emerald-300 text-white font-bold py-2 px-4 my-5 rounded mb-40"
						variant="primary"
					>
						shop now
					</button>
				</Link>
			</div>
		);
	}

	return (
		<div className="container mx-auto mt-10">
			<div className="flex shadow-md my-10">
				<div className="w-3/4 bg-white px-10 py-10">
					<div className="flex justify-between border-b pb-8">
						<h1 className="font-semibold text-2xl">Shopping Cart</h1>
						<h2 className="font-semibold text-2xl"> {qtySum} Items</h2>
					</div>
					{/* header */}
					<div className="flex mt-10 mb-5">
						<h3 className="font-semibold text-gray-600 text-xs capitalize w-2/5">
							Product Details
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs capitalize w-1/5">
							Quantity
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs capitalize w-1/5">
							Price
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs capitalize w-1/5">
							Subtotal
						</h3>
					</div>

					{/* content */}
					{userCartDb.length === 0 && (
						<span className="font-bold text-sm uppercase">no item in cart</span>
					)}
					{userCartDb &&
						userCartDb.map((item) => {
							return (
								<CartItem
									key={item._id}
									item={item}
									handleUpdate=""
									handleDelete={handleDelete}
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
						<span className="font-semibold text-sm capitalize">
							Items: {qtySum}
						</span>
						<span className="font-semibold text-sm">$ {subtotalSum}</span>
					</div>
					<div>
						<label className="font-medium inline-block mb-3 text-sm capitalize">
							Shipping shipping $10
						</label>

						{userDetail.address ? (
							<span className="block p-2 text-gray-600 w-full text-sm">
								{userDetail.address.address}
							</span>
						) : (
							<Link
								to="/account"
								className="block p-2 text-rose-600 w-full text-sm hover:underline"
							>
								please update address in profile
							</Link>
						)}
					</div>

					<div className="border-t mt-8">
						<div className="flex font-semibold justify-between py-6 text-sm capitalize">
							<span>Total cost</span>
							<span>$ {subtotalSum + 10}</span>
						</div>
						{userCartDb.length > 1 && (
							<ButtonAction
								labelText="submit order"
								handleClick={postCartOrder}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPage;
