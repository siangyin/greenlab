import { useContext, useState, useEffect } from "react";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaMinus, FaPlus } from "react-icons/fa";
import { CartItem, LoadingSpinner } from "../components";

function OrderPage() {
	const { id } = useParams();
	const [userOrderDb, setUserOrderDb] = useState();
	const [userCartDb, setUserCartDb] = useState();
	// const localuser = localStorage.getItem("userID");

	const [userDetail, setUserDetail] = useState();
	const getUserDetail = async (req, res) => {
		try {
			console.log(userOrderDb.userId);
		} catch (err) {
			console.error(err);
		}
	};

	// functions
	const getCurrentUserOrder = async (req, res) => {
		try {
			const res = await axios.get(`${BE_URL}/orders/${id}`);
			setUserOrderDb(res.data.data);

			const orderItemsArray = res.data.data.orderItems;
			let newArr = [];
			for (let sglCart of orderItemsArray) {
				const cartres = await axios.get(`${BE_URL}/carts/${sglCart}`);
				newArr.push(cartres.data.data);
				console.log(newArr);
				setUserCartDb(newArr);
			}

			const userinfo = await axios.get(
				`${BE_URL}/users/myacct?userId=${res.data.data.userId}`
			);
			console.log(userinfo.data);
			setUserDetail(userinfo.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getCurrentUserOrder();
	}, []);

	if (!userOrderDb) {
		return <LoadingSpinner />;
	}

	return (
		<div className="container mx-auto mt-10">
			<div className="flex shadow-md my-10">
				<div className="w-3/4 bg-white px-10 py-10">
					<div className="flex justify-between border-b pb-8">
						<h1 className="font-semibold text-2xl">
							Order ref >
							<span className="font-semibold"> {userOrderDb._id}</span>
						</h1>
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

					<Link
						to="/account-order"
						className="flex font-semibold text-emerald-600 text-sm mt-10"
					>
						<FaArrowLeft />
						Back
					</Link>
				</div>

				<div id="summary" className="w-1/4 px-8 py-10">
					<h1 className="font-semibold text-2xl border-b pb-8">
						Status: {userOrderDb.status}
					</h1>
					<div className="flex justify-between mt-10 mb-5">
						<span className="font-semibold text-sm capitalize">Subtotal</span>
						<span className="font-semibold text-sm">
							$ {userOrderDb.subtotal || "..."}
						</span>
					</div>
					<div>
						<label className="font-medium inline-block mb-3 text-sm capitalize">
							Shipping shipping $10
						</label>
						<select className="block p-2 text-gray-600 w-full text-sm">
							<option>{userDetail && userDetail.address.address}</option>
						</select>
					</div>

					<div className="border-t mt-8">
						<div className="flex font-semibold justify-between py-6 text-sm capitalize">
							<span>Total cost</span>
							<span>$ {userOrderDb.total || "..."}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderPage;
