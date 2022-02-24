import React from "react";
import { Link } from "react-router-dom";
import logoutimg from "../assets/images/logout.svg";

function LogoutPage({ msg }) {
	return (
		<div className="flex flex-col justify-center">
			<img src={logoutimg} alt="logoutimg" className="h-96" />
			<h2 className="text-center">{"User logged out!"} </h2>

			<Link to="/" className="text-center">
				<button
					className="text-center bg-emerald-500 hover:bg-emerald-300 text-white font-bold py-2 px-4 my-5 rounded mb-40"
					variant="primary"
				>
					go home
				</button>
			</Link>
		</div>
	);
}

export default LogoutPage;
