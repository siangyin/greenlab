import { useContext, useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import { LoadingSpinner } from ".";
import axios from "axios";

function OrdersCard() {
	const [userOrdersDb, setUserOrdersDb] = useState();
	const localuser = localStorage.getItem("userID");

	// functions
	const getCurrentUserOrders = async (req, res) => {
		try {
			if (localuser) {
				const res = await axios.get(
					`${BE_URL}/orders/myorders?userId=${localuser}`
				);
				console.log(res.data.data);
				setUserOrdersDb(res.data.data);
			}
		} catch (err) {
			console.error(err);
		}
	};

	function dateFormat(date) {
		const month = date.getMonth();
		const day = date.getDate();
		const monthString = month >= 10 ? month : `0${month}`;
		const dayString = day >= 10 ? day : `0${day}`;
		return `${date.getFullYear()}-${monthString}-${dayString}`;
	}

	useEffect(() => {
		getCurrentUserOrders();
	}, []);
	console.log(userOrdersDb);

	if (!userOrdersDb) {
		return <LoadingSpinner />;
	}
	return (
		<div className="p-4 max-w-md bg-white rounded-lg border sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white capitalize">
					{userOrdersDb.length === 0 ? "no order" : "all order"}
				</h3>
			</div>
			<div className="flow-root">
				<ul
					role="list"
					className="divide-y divide-gray-200 dark:divide-gray-700"
				>
					{/* order list here if any */}

					{userOrdersDb &&
						userOrdersDb.map((item) => {
							return (
								<li className="py-3 sm:py-4" key={item._id}>
									<div className="flex items-center space-x-4">
										<div className="flex-1 min-w-0">
											<Link
												to={`/order/${item._id}`}
												className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500"
											>
												Order No: {item._id}
											</Link>
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">
												status: {item.status}
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												Order date: {item.createdAt.substring(0, 10)}
											</p>
										</div>
										<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
											${item.total}
										</div>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}

export default OrdersCard;
