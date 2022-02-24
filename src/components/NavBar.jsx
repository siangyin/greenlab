import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import { FaLeaf, FaBars, FaDatabase } from "react-icons/fa";

const NavBar = () => {
	const [showLinks, setShowLinks] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);
	let navigate = useNavigate();
	const localuser = localStorage.getItem("userID");

	const updateWidth = () => {
		setWindowWidth(window.innerWidth);
		if (window.innerWidth > 768) {
			setShowLinks(true);
		} else {
			setShowLinks(false);
		}
	};

	useEffect(() => {
		if (localuser) {
			setLoggedIn(true);
		}
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	// functions
	const handleLogOut = async () => {
		try {
			const responseLogout = await fetch(`${BE_URL}/auth/logout`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			setLoggedIn(false);
			setAdmin(false);
			setUserID(false);
			localStorage.removeItem("userID");
			console.log(responseLogout);
			navigate("/logout");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav className="flex items-center justify-between flex-wrap bg-emerald-500 p-6">
			<a className="flex items-center flex-shrink-0 text-white mr-6" href="/">
				<img
					src="https://altusimpact.com/wp-content/uploads/2020/05/white-leaf.png"
					width="25"
				/>
				<span className="font-semibold text-2xl tracking-tight px-1">
					{" "}
					Greenlab
				</span>
			</a>
			<div className="block sm:hidden">
				<button
					className="flex items-center px-3 py-2 border rounded text-emerald-200 border-emerald-400 hover:text-white hover:border-white"
					onClick={() => setShowLinks(!showLinks)}
				>
					<FaBars />
				</button>
			</div>
			<div className="w-full block flex-grow md:flex md:items-center md:w-auto">
				<div className="text-sm md:flex-grow">
					{admin ? (
						<>
							<Link
								to="/"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
							>
								Store
							</Link>
						</>
					) : (
						<Link
							to="/"
							className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
						>
							All Products
						</Link>
					)}
				</div>
				<div>
					{!loggedIn && (
						<>
							<Link
								to="/login"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
							>
								Login
							</Link>
							<Link
								to="/signup"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
							>
								Sign Up
							</Link>
							<Link
								to="/cart"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
							>
								Cart
							</Link>
						</>
					)}

					{admin && (
						<>
							<Link
								to="/admin-products"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
							>
								Manage Products
							</Link>
							<Link
								to="/admin"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
							>
								Database
							</Link>
						</>
					)}
					{!admin && loggedIn && (
						<Link
							to="/account"
							className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
						>
							Account
						</Link>
					)}
					{loggedIn && (
						<>
							<button
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-emerald-500 hover:bg-white  md:mt-0"
								onClick={handleLogOut}
							>
								Logout
							</button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
