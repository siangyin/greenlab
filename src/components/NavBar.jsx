import { Link } from "react-router-dom";
import { FaLeaf, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const NavBar = () => {
	const [showLinks, setShowLinks] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isLogin, setIsLogin] = useState(true);
	const [showCurrentUser, setShowCurrentUser] = useState({ role: "admin" });

	const currUser = {
		name: "siangyin",
		email: "siangyin916@gmail.com",
		role: "user",
	};

	const updateWidth = () => {
		setWindowWidth(window.innerWidth);
		if (window.innerWidth > 768) {
			setShowLinks(true);
		} else {
			setShowLinks(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, [windowWidth]);

	return (
		<nav className="flex items-center justify-between flex-wrap bg-emerald-900 p-6">
			<a className="flex items-center flex-shrink-0 text-white mr-6" href="/">
				<img
					src="https://altusimpact.com/wp-content/uploads/2020/05/white-leaf.png"
					width="30"
				/>
				<span className="font-semibold text-2xl tracking-tight px-1">
					Greenlab
				</span>
			</a>
			<div className="block sm:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-emerald-200 border-emerald-400 hover:text-white hover:border-white">
					<FaBars />
				</button>
			</div>
			<div className="w-full block flex-grow md:flex md:items-center md:w-auto">
				<div className="text-sm md:flex-grow">
					<a
						href="/"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-900 hover:bg-white  md:mt-0"
					>
						ONLINE STORE
					</a>
				</div>
				<div>
					<a
						href="/login"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-900 hover:bg-white  md:mt-0"
					>
						Login
					</a>
					<a
						href="/signup"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-900 hover:bg-white  md:mt-0"
					>
						Sign Up
					</a>
					<a
						href="/cart"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-900 hover:bg-white  md:mt-0"
					>
						Cart
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
