import React from "react";
import { Link } from "react-router-dom";
import logoutimg from "../assets/images/logout.svg";

function LogoutPage({ msg }) {
	return (
		<div className="flex flex-col justify-center">
			<img src={logoutimg} alt="logoutimg" className="h-96" />
			<h2 className="text-center">Thank you Bye bye </h2>

			<Link to="/login" className="text-center">
				<button
					className="text-center bg-emerald-500 hover:bg-emerald-300 text-white font-bold py-2 px-4 my-5 rounded mb-40"
					variant="primary"
				>
					Login
				</button>
			</Link>
		</div>
	);
}

export default LogoutPage;
