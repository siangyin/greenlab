import React from "react";
import { Link } from "react-router-dom";
import error401img from "../assets/images/error401.svg";

const UnauthorisedCard = ({}) => {
	return (
		<div className="flex flex-col justify-center">
			<img src={error401img} alt="error401img" className="h-96" />
			<h2 className="text-center">
				{"Unauthorised! Sorry this page is not publically available."}
			</h2>

			<Link to="/login" className="text-center">
				<button
					className="text-center bg-emerald-500 hover:bg-emerald-300 text-white font-bold py-2 px-4 my-5 rounded mb-40"
					variant="primary"
				>
					Login now
				</button>
			</Link>
		</div>
	);
};

export default UnauthorisedCard;
