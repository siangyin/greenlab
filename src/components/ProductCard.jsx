import { useContext, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import { FaStar, FaEdit, FaTrashAlt } from "react-icons/fa";
import { ButtonAction } from "../components";

function ProductCard({ item }) {
	const localuser = localStorage.getItem("userID");
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);

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
					className="p-8 rounded-t-lg object-cover h-48 w-96"
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
					<span className="bg-yellow-100 text-black-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200">
						{item.category}
					</span>{" "}
					<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
				</div>
				{!admin && (
					<div className="flex justify-between items-center">
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							$ {item.price}
						</span>
						<ButtonAction labelText="add to cart" handleClick={postAdd1Cart} />
					</div>
				)}
			</div>
		</div>
	);
}

export default ProductCard;
