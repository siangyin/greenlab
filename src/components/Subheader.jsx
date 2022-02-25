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
		<div className="p-4 w-full text-center">
			<h3 className="mb-2 text-3xl font-bold text-gray-800 capitalize">
				{subheader}
			</h3>
		</div>
	);
}

export default Subheader;
