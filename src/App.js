import React from "react";
// import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, NavBar } from "./components";
import {
	HomePage,
	LoginPage,
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
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/login" element={<LoginPage />} />
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
