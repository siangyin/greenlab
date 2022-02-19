import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, NavBar } from "./components";
import {
	HomePage,
	LoginPage,
	SignupPage,
	AccountPage,
	AdminPage,
	AllProductsPage,
	SingleProductPage,
	AdminProductPage,
	AllOrdersPage,
	OrderPage,
	CartPage,
	CheckoutPage,
	Error404Page,
} from "./pages";

function App() {
	const [user, setUser] = useState();

	useEffect(() => {
		const getAllProducts = async () => {
			try {
				const res = await axios.get(
					"https://greenlab-be.herokuapp.com/api/v1/products"
				);
				console.log(res.data);
				return res;
			} catch (err) {
				console.error(err);
			}
		};
		getAllProducts();
	});

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<AllProductsPage />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/signup" element={<SignupPage />} />
				<Route exact path="/account" element={<AccountPage />} />
				<Route exact path="/admin" element={<AdminPage />} />
				<Route exact path="/products" element={<AllProductsPage />} />
				<Route exact path="/product/:id" element={<SingleProductPage />} />
				<Route exact path="/product-new" element={<AdminProductPage />} />
				<Route exact path="/product-edit/:id" element={<AdminProductPage />} />
				<Route exact path="/cart" element={<CartPage />} />
				<Route exact path="/orders" element={<AllOrdersPage />} />
				<Route exact path="/order/:id" element={<OrderPage />} />
				<Route exact path="/checkout" element={<CheckoutPage />} />
				<Route path="*" element={<Error404Page />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
