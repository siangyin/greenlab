import React from "react";
import { FaHouse, FaAngleRight } from "react-icons/fa";
import { useLocation, Link, useNavigate } from "react-router-dom";

function Subheader({ subheader }) {
	const usePathname = () => {
		const location = useLocation();
		return location.pathname;
	};
	let pathId = usePathname();

	return (
		<div className="p-4 w-full text-center  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<h3 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">
				{subheader}
			</h3>
			<p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"></p>
		</div>
	);
}

export default Subheader;
