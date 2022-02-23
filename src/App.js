import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginContext, AdminContext, UserContext } from "./helpers";
import { Footer, NavBar } from "./components";
import {
	HomePage,
	UserLoginPage,
	UserAccountPage,
	AdminPage,
	ProductListPage,
	ProductSinglePage,
	AdminProductSetupPage,
	AdminAllOrdersPage,
	OrderPage,
	CartPage,
	CheckoutPage,
	Error404Page,
} from "./pages";

function App() {
	const [loggedIn, setLoggedIn] = useState();
	const [userID, setUserID] = useState();
	const [admin, setAdmin] = useState();



	return (
		<LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
			<UserContext.Provider value={{ userID, setUserID }}>
				<AdminContext.Provider value={{ admin, setAdmin }}>
					<Router>
						<NavBar />
						<main className="container mx-auto">
							<Routes>
								<Route exact path="/" element={<ProductListPage />} />
								<Route exact path="/login" element={<UserLoginPage />} />
								<Route exact path="/signup" element={<UserLoginPage />} />
								<Route exact path="/account" element={<UserAccountPage />} />
								<Route exact path="/admin" element={<AdminPage />} />
								<Route exact path="/products" element={<ProductListPage />} />
								<Route
									exact
									path="/product/:id"
									element={<ProductSinglePage />}
								/>
								<Route
									exact
									path="/product-new"
									element={<AdminProductSetupPage />}
								/>
								<Route
									exact
									path="/product-edit/:id"
									element={<AdminProductSetupPage />}
								/>
								<Route exact path="/cart" element={<CartPage />} />
								<Route exact path="/orders" element={<AdminAllOrdersPage />} />
								<Route exact path="/order/:id" element={<OrderPage />} />
								<Route exact path="/checkout" element={<CheckoutPage />} />
								<Route path="*" element={<Error404Page />} />
							</Routes>
						</main>
						<Footer />
					</Router>
				</AdminContext.Provider>
			</UserContext.Provider>
		</LoginContext.Provider>
	);
}

export default App;
