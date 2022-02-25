import { useContext, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { LoadingSpinner, Input, ButtonAction } from "../components";

function ProductSinglePage() {
	const { id } = useParams();
	const localuser = localStorage.getItem("userID");
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);
	const [prodDb, setProdDb] = useState();
	const [prodReviewDb, setProdReviewDb] = useState();
	const [addQty, setAddQty] = useState(1);

	const getProd = async () => {
		try {
			const res = await axios.get(`${BE_URL}/products/${id}`);
			console.log(res.data.data);
			return setProdDb(res.data.data);
		} catch (err) {
			console.error(err);
		}
	};

	const getReviews = async () => {
		try {
			const res = await axios.get(`${BE_URL}/products/${id}/reviews`);
			console.log(res.data.reviews);
			return setProdReviewDb(res.data.reviews);
		} catch (err) {
			console.error(err);
		}
	};

	const postQtyCart = async (req, res) => {
		try {
			if (localuser) {
				const res = await axios.post(`${BE_URL}/carts`, {
					productId: id,
					qty: addQty,
					userId: localuser,
				});

				console.log(res);
			}
		} catch (err) {
			console.error(err);
		}
	};

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setAddQty(value);
	}

	useEffect(() => {
		getProd();
		getReviews();
	}, []);

	if (!prodDb) {
		return <LoadingSpinner />;
	}
	return (
		<div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
			<div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
				<div className="lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">
					<img
						className="object-contain max-h-64 w-full"
						src={prodDb.image}
						alt={prodDb.name}
					/>
				</div>
				<div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
					<h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
						{prodDb.name}
					</h1>

					<div className="flex items-center mt-2.5 mb-5">
						<span className="bg-yellow-100 text-black-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-emerald-800">
							{prodDb.averageRating}
						</span>{" "}
						<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
					</div>

					<p className="text-base leading-normal text-gray-600  mt-2">
						{prodDb.description}
					</p>
					<p className="text-3xl font-medium text-gray-600 my-5"></p>

					{/* divider */}

					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						$ {prodDb.price}
					</span>

					{!admin && (
						<div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
							{/* divider */}
							<Input
								type="number"
								name="qty"
								value={addQty ? addQty : "1"}
								handleChange={handleChange}
								required="true"
							/>
							<ButtonAction labelText="add to cart" handleClick={postQtyCart} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductSinglePage;
