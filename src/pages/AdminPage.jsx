import { useContext, useState, useEffect } from "react";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import { AdminList, Subheader, UnauthorisedCard } from "../components";

function AdminPage({ minitab }) {
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);
	const [miniTab, setMiniTab] = useState(minitab);

	const localuser = localStorage.getItem("userID");

	const [userInfo, setUserInfo] = useState();
	const [userList, setUserList] = useState();
	const [userOrderList, setUserOrderList] = useState();

	useEffect(() => {
		const getAllData = async (req, res) => {
			try {
				if (localuser) {
					const res = await axios.get(
						`${BE_URL}/users/myacct?userId=${localuser}`
					);
					setUserInfo({
						user: res.data.user,
						address: res.data.address,
						order: res.data.order,
					});

					if (res.data.user.role === "admin") {
						setAdmin(true);
						const fetchusers = await axios.get(`${BE_URL}/users`);

						const fetchorders = await axios.get(`${BE_URL}/orders`);
						setUserList(fetchusers.data.data);
						setUserOrderList(fetchorders.data.data);
						console.log(fetchusers.data.data);
						console.log(fetchorders.data.data);
					}
				}

				return userInfo;
			} catch (err) {
				console.log(err);
			}
		};
		getAllData();
	}, []);

	if (!loggedIn) {
		return <UnauthorisedCard />;
	}

	if (loggedIn && !admin) {
		return <UnauthorisedCard />;
	}

	return (
		<>
			<Subheader subheader="admin" />
			<div className="mb-4 border-b border-gray-200">
				<div className="flex flex-wrap -mb-px">
					<button
						className={
							miniTab === "users"
								? "mr-2 placeholder:inline-block py-4 px-4 text-sm font-medium text-center text-emerald-600 rounded-t-lg border-b-2 border-emerald-600 active"
								: "mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
						}
						onClick={() => setMiniTab("users")}
					>
						user
					</button>

					<button
						className={
							miniTab === "orders"
								? "mr-2 placeholder:inline-block py-4 px-4 text-sm font-medium text-center text-emerald-600 rounded-t-lg border-b-2 border-emerald-600 active"
								: "mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
						}
						onClick={() => setMiniTab("orders")}
					>
						orders
					</button>
				</div>

				{miniTab === "users" && <AdminList category="users" data={userList} />}
				{miniTab === "orders" && (
					<AdminList category="orders" data={userOrderList} />
				)}
			</div>
		</>
	);
}

export default AdminPage;
