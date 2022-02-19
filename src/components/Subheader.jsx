import React from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";

function Subheader() {
	return (
		<div class="p-4 w-full text-center bg-green-100  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<h3 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
				Account
			</h3>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				Stay up to date and move work forward with Flowbite on iOS & Android.
				Download the app today.
			</p>
		</div>
	);
}

export default Subheader;
