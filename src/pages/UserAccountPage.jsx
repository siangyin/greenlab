import { useContext, useState, useEffect } from "react";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import { OrdersCard, ProfileDetail, Subheader } from "../components";

function UserAccountPage({ minitab }) {
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);
	const [miniTab, setMiniTab] = useState(minitab);

	const localuser = localStorage.getItem("userID");

	const [userInfo, setUserInfo] = useState({});
	// console.log(localuser);
	console.log(userInfo);

	useEffect(() => {
		const getCurrentUserDetail = async (req, res) => {
			try {
				if (localuser) {
					const res = await axios.get(
						`${BE_URL}/users/myacct?userId=${localuser}`
					);
					console.log(res.data);
					setUserInfo({
						user: res.data.user,
						address: res.data.address,
						order: res.data.order,
					});
				}

				return userInfo;
			} catch (err) {
				console.error(err);
			}
		};
		getCurrentUserDetail();
	}, []);

	return (
		<>
			<Subheader subheader="account" />
			<div className="mb-4 border-b border-gray-200 dark:border-gray-700">
				<div className="flex flex-wrap -mb-px">
					<button
						className={
							miniTab === "profile"
								? "mr-2 placeholder:inline-block py-4 px-4 text-sm font-medium text-center text-emerald-600 rounded-t-lg border-b-2 border-emerald-600 active dark:text-emerald-500 dark:border-emerald-500"
								: "mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
						}
						onClick={() => setMiniTab("profile")}
					>
						Profile
					</button>

					<button
						className={
							miniTab === "order"
								? "mr-2 placeholder:inline-block py-4 px-4 text-sm font-medium text-center text-emerald-600 rounded-t-lg border-b-2 border-emerald-600 active dark:text-emerald-500 dark:border-emerald-500"
								: "mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
						}
						onClick={() => setMiniTab("order")}
					>
						Orders
					</button>
				</div>

				{miniTab === "profile" && <ProfileDetail userInfo={userInfo} />}
				{miniTab === "order" && <OrdersCard userInfo={userInfo} />}
			</div>
		</>
	);
}

export default UserAccountPage;
