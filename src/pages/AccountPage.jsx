import { useState } from "react";
import { OrdersCard, ProfileDetail } from "../components";

function AccountPage() {
	const [miniTab, setMiniTab] = useState("profile");

	console.log(miniTab);
	return (
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

			{miniTab === "profile" && <ProfileDetail />}
			{miniTab === "order" && <OrdersCard />}
		</div>
	);
}

export default AccountPage;
