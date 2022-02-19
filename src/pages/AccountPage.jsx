import React from "react";
import { ProfileDetail } from "../components";

function AccountPage() {
	return (
		<div className="mb-4 border-b border-gray-200 dark:border-gray-700">
			<div className="flex flex-wrap -mb-px">
				<button className="mr-2 inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300">
					Profile
				</button>

				<button className="mr-2 placeholder:inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500">
					Orders
				</button>
			</div>

			<ProfileDetail />
		</div>
	);
}

export default AccountPage;
