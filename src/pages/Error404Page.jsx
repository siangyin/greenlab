import React from "react";
import { Link } from "react-router-dom";
import error404img from "../assets/images/error404.jpg";

function Error404Page({ msg }) {
	return (
		<div className="text-center flex-col justify-center">
			<img src={error404img} alt={error404img} className="self-center h-80" />
			<h2>{msg ? msg : "Ooops... sorry, page not found!"} </h2>

			<Link to="/">
				<button
					className="bg-emerald-500 hover:bg-emerald-300 text-white font-bold py-2 px-4 rounded"
					variant="primary"
				>
					return to homepage
				</button>
			</Link>
		</div>
	);
}

export default Error404Page;
