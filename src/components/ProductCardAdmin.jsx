import { useContext, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import { FaStar, FaEdit, FaTrashAlt } from "react-icons/fa";
import { ButtonAction } from "../components";

function ProductCardAdmin({ item }) {
	const localuser = localStorage.getItem("userID");
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);
	const [successMsg, setSuccessMsg] = useState();
	let navigate = useNavigate();

	const handleDelete = async (req, res) => {
		try {
			if (admin) {
				const res = await axios.delete(`${BE_URL}/products/${item._id}`);
				console.log(res);
				setSuccessMsg(res.data.msg);
				location.reload();
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleEdit = () => {
		if (item._id) {
			navigate(`/product-edit/${item._id}`);
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

				<div className="inline-flex rounded-md shadow-sm" role="group">
					<Link
						to={`/product-edit/${item._id}`}
						className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border hover:bg-rose-100 hover:text-rose-500 focus:z-10 focus:ring-2 focus:ring-rose-500 focus:text-rose-500"
					>
						<FaEdit />
						Edit
					</Link>
					<button
						type="button"
						onClick={handleDelete}
						className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border hover:bg-rose-100 hover:text-rose-500 focus:z-10 focus:ring-2 focus:ring-rose-500 focus:text-rose-500"
					>
						<FaTrashAlt />
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCardAdmin;
