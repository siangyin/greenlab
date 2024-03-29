import React from "react";
import { Link } from "react-router-dom";
import error404img from "../assets/images/error404.svg";

function Error404Page({ msg }) {
	return (
		<div className="flex flex-col justify-center">
			<img src={error404img} alt="nofoundimg" className="h-96" />
			<h2 className="text-center">{"Ooops... sorry, page not found!"} </h2>

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

export default Error404Page;
