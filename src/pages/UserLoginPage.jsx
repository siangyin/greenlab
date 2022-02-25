import { useContext, useState } from "react";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "./index";
import { FaArrowRight } from "react-icons/fa";

function UserLoginPage() {
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);
	let navigate = useNavigate();

	const usePathname = () => {
		const location = useLocation();
		return location.pathname;
	};
	let pathId = usePathname();

	const [userInputDb, setUserInputDb] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [errorMsg, setErrorMsg] = useState({
		title: "",
		type: "",
		msg: "",
		status: false,
	});

	// functions
	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setUserInputDb((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	// functions
	const getAllData = async (id) => {
		try {
			if (id) {
				setLoggedIn(true);
				const res = await axios.get(`${BE_URL}/users/myacct?userId=${id}`);

				setUserID({
					loggedIn: true,
					user: res.data.user,
					address: res.data.address,
					order: res.data.order,
				});

				if (res.data.user.role === "admin") {
					setAdmin(true);
				}

				if (res.data.user.role === "user") {
					setAdmin(false);
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	// functions
	const handleLogin = async (e) => {
		e.preventDefault();
		console.log(userInputDb);
		try {
			const responseLogin = await fetch(`${BE_URL}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInputDb),
			});
			const loginDetails = await responseLogin.json();

			if (loginDetails.status === "OK") {
				getAllData(loginDetails.user.userID);
				console.log(loginDetails.user.userID);
				localStorage.setItem("userID", loginDetails.user.userID);
				setErrorMsg((prevState) => ({
					...prevState,
					status: false,
				}));
			}

			if (loginDetails.user.role === "admin") {
				setAdmin(true);
				navigate("/admin-products");
			}

			if (loginDetails.user.role === "user") {
				setAdmin(false);
				navigate("/");
			}

			if (loginDetails.status !== "OK") {
				setErrorMsg({
					title: "invalid credential",
					type: "red",
					msg: "incorrect email or password",
					status: true,
				});

				setUserInputDb({
					name: "",
					email: "",
					password: "",
				});

				console.log(errorMsg);
			}
		} catch (error) {
			console.log(error);
		}
	};

	// functions
	const handleRegister = async (e) => {
		e.preventDefault();
		console.log(userInputDb);
		try {
			const responseLogin = await fetch(`${BE_URL}/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInputDb),
			});
			const loginDetails = await responseLogin.json();
			console.log(loginDetails);
			if (loginDetails.status === "OK") {
				console.log(loginDetails);
				setLoggedIn(true);
				setUserID(loginDetails.user.userID);
				if (loginDetails.role === "admin") {
					setAdmin(true);
				} else {
					setAdmin(false);
				}
				localStorage.setItem("userID", loginDetails.user.userID);
				setErrorMsg((prevState) => ({
					...prevState,
					status: false,
				}));
				navigate("/account");
			}

			if (loginDetails.status !== "OK") {
				setErrorMsg({
					title: "invalid credential",
					type: "red",
					msg: "incorrect email or password",
					status: true,
				});

				setUserInputDb({
					name: "",
					email: "",
					password: "",
				});

				console.log(errorMsg);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="min-h-5/6 flex flex-col items-center justify-center p-10 sm:p-20">
			<div
				className="
          flex flex-col
          bg-gray-100
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
			>
				<div className="font-medium self-center text-xl sm:text-3xl text-gray-800 capitalize">
					{pathId === "/signup" ? "create new account" : "login"}
				</div>

				<div className="mt-10">
					<form action="#">
						{/* name */}
						{pathId === "/signup" && (
							<div className="flex flex-col mb-5">
								<label
									className="mb-1 text-xs tracking-wide text-gray-600"
									htmlFor="name"
								>
									Name:
								</label>
								<div className="relative">
									<div
										className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
									>
										<i className="fas fa-user text-emerald-500"></i>
									</div>

									<input
										id="name"
										type="text"
										name="name"
										className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-emerald-400
                  "
										placeholder="Enter your name"
										value={userInputDb.name}
										onChange={handleChange}
									/>
								</div>
							</div>
						)}
						{/* email */}

						<div className="flex flex-col mb-5">
							<label
								className="mb-1 text-xs tracking-wide text-gray-600"
								htmlFor="email"
							>
								Email:
							</label>
							<div className="relative">
								<div
									className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
								>
									<i className="fas fa-at text-emerald-500"></i>
								</div>

								<input
									id="email"
									type="email"
									name="email"
									className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-emerald-400
                  "
									placeholder="Enter your email"
									value={userInputDb.email}
									onChange={handleChange}
								/>
							</div>
						</div>

						{/* password */}
						<div className="flex flex-col mb-6">
							<label
								htmlFor="password"
								className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
							>
								Password:
							</label>
							<div className="relative">
								<div
									className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
								>
									<span>
										<i className="fas fa-lock text-emerald-500"></i>
									</span>
								</div>

								<input
									id="password"
									type="password"
									name="password"
									className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-emerald-400
                  "
									placeholder="Enter your password"
									value={userInputDb.password}
									onChange={handleChange}
								/>
							</div>
						</div>
						{/* // err msg */}
						{errorMsg.status && (
							<p className="text-red-400 font-medium text-xs text-center pb-2">
								{errorMsg.msg}
							</p>
						)}
						<div className="flex w-full">
							<button
								type="button"
								onClick={pathId === "/login" ? handleLogin : handleRegister}
								className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-emerald-500
                  hover:bg-emerald-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
							>
								<span className="mr-2 uppercase">
									{pathId === "/login" ? "login" : "sign up"}
								</span>
								<span>
									<FaArrowRight />
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
			<div
				className="justify-center mt-6 inline-flex items-center
            text-gray-700
            font-medium
            text-xs text-center"
			>
				{pathId === "/signup" ? "Already have an account? " : "New user? "}
				<Link
					to={pathId === "/login" ? "/signup" : "/login"}
					className="text-xs ml-2 text-emerald-500 font-semibold"
				>
					{pathId === "signup" ? "Login here" : "Register here"}
				</Link>
			</div>
		</div>
	);
}

export default UserLoginPage;
