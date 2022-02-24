import { useContext, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import {
	LoadingSpinner,
	ProductCard,
	ProductCardAdmin,
	Subheader,
	UnauthorisedCard,
} from "../components";

function ProductListPage() {
	const localuser = localStorage.getItem("userID");
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);
	const [prodListDb, setProdListDb] = useState();

	const getAllProducts = async () => {
		try {
			const res = await axios.get(`${BE_URL}/products`);
			console.log(res.data);
			return setProdListDb(res.data.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getAllProducts();
	}, []);

	if (!loggedIn) {
		return <UnauthorisedCard />;
	}

	if (loggedIn && !admin) {
		return <UnauthorisedCard />;
	}

	if (!prodListDb) {
		return <LoadingSpinner />;
	}

	if (admin) {
		return (
			<>
				<Subheader subheader="all products" />
				<div className="max-w-2xl mx-auto py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="sr-only">Products</h2>
					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{/* single cards */}
						{prodListDb &&
							prodListDb.map((item) => {
								return <ProductCardAdmin key={item._id} item={item} />;
							})}
					</div>
				</div>
			</>
		);
	}
	return <LoadingSpinner />;
}

export default ProductListPage;
