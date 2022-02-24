import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginContext, AdminContext, UserContext, BE_URL } from "./helpers";
import { Footer, NavBar } from "./components";
import {
	AdminProductList,
	UserLoginPage,
	UserAccountPage,
	AdminPage,
	ProductListPage,
	ProductSinglePage,
	AdminProductSetupPage,
	OrderPage,
	CartPage,
	CheckoutPage,
	LogoutPage,
	Error404Page,
} from "./pages";

function App() {
	const [loggedIn, setLoggedIn] = useState();
	const [userID, setUserID] = useState();
	const [admin, setAdmin] = useState();
	const localuser = localStorage.getItem("userID");
	const [currUser, setCurrUser] = useState();

	useEffect(() => {
		const getAllData = async (req, res) => {
			try {
				if (localuser) {
					setLoggedIn(true);
					setUserID(localuser);
					const res = await axios.get(
						`${BE_URL}/users/myacct?userId=${localuser}`
					);
					setCurrUser({
						loggedIn: true,
						user: res.data.user,
						address: res.data.address,
						order: res.data.order,
					});

					if (res.data.user.role === "admin") {
						setAdmin(true);
					}
				}

				console.log(currUser);
			} catch (err) {
				console.log(err);
			}
		};
		getAllData();
	}, []);

	return (
		<LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
			<UserContext.Provider value={{ userID, setUserID }}>
				<AdminContext.Provider value={{ admin, setAdmin }}>
					<Router>
						<NavBar />
						<main className="container mx-auto">
							<Routes>
								<Route
									exact
									path="/"
									element={<ProductListPage currUser={currUser} />}
								/>
								<Route
									exact
									path="/admin-products"
									element={<AdminProductList currUser={currUser} />}
								/>
								<Route exact path="/login" element={<UserLoginPage />} />
								<Route exact path="/signup" element={<UserLoginPage />} />
								<Route
									exact
									path="/account"
									element={<UserAccountPage minitab="profile" />}
								/>
								<Route
									exact
									path="/account-profile"
									element={<UserAccountPage minitab="profile" />}
								/>
								<Route
									exact
									path="/account-order"
									element={<UserAccountPage minitab="order" />}
								/>

								<Route
									exact
									path="/admin"
									element={<AdminPage minitab="users" />}
								/>

								<Route
									exact
									path="/admin-users"
									element={<AdminPage minitab="users" />}
								/>

								<Route
									exact
									path="/admin-orders"
									element={<AdminPage minitab="orders" />}
								/>

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
								{/* <Route exact path="/orders" element={<AdminAllOrdersPage />} /> */}
								<Route exact path="/order/:id" element={<OrderPage />} />
								<Route exact path="/logout" element={<LogoutPage />} />
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
