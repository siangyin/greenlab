import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { BE_URL } from "../helpers";
import axios from "axios";
import { FaStar } from "react-icons/fa";

function ProductCard({ item }) {
	const localuser = localStorage.getItem("userID");

	const postAdd1Cart = async (req, res) => {
		try {
			if (localuser) {
				const res = await axios.post(`${BE_URL}/carts`, {
					productId: item._id,
					qty: 1,
					userId: localuser,
				});

				console.log(res);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
			<Link to={`/product/${item._id}`}>
				<img
					className="p-8 rounded-t-lg object-contain h-48 w-96"
					src={item.image}
					alt={item.name}
				/>
			</Link>
			<div className="px-5 pb-5">
				<Link to={`/product/${item._id}`}>
					<h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{item.name}
					</h3>
				</Link>
				<div className="flex items-center mt-2.5 mb-5">
					<span className="bg-yellow-100 text-black-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-emerald-800">
						{item.averageRating}
					</span>{" "}
					<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
				</div>
				<div className="flex justify-between items-center">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						$ {item.price}
					</span>
					<button
						type="button"
						onClick={postAdd1Cart}
						className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
