import { useContext, useState, useEffect } from "react";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import Input from "./Input";

function ProfileDetail({ userInfo }) {
	const [userAddInputDb, setUserAddInputDb] = useState();
	const [userInputDb, setUserInputDb] = useState();
	const localuser = localStorage.getItem("userID");

	// functions
	const getCurrentUserDetail = async (req, res) => {
		try {
			if (localuser) {
				const res = await axios.get(
					`${BE_URL}/users/myacct?userId=${localuser}`
				);
				console.log(res.data);
				setUserAddInputDb(res.data.address);

				setUserInputDb(res.data.user);
			}

			return userInfo;
		} catch (err) {
			console.error(err);
		}
	};

	const postUpdatedUserProfile = async (req, res) => {
		try {
			if (localuser) {
				const res = await axios.patch(`${BE_URL}/users/${localuser}`, {
					...userInputDb,
					address: userAddInputDb,
				});

				console.log(res);
				setUserAddInputDb(res.data.address);

				setUserInputDb(res.data.user);
			}
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getCurrentUserDetail();
	}, []);
	// console.log(userAddInputDb);
	function handleUserDetailChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setUserInputDb((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleUserAddChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setUserAddInputDb((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	return (
		<form className="m-10">
			<Input
				type="text"
				name="name"
				value={userInputDb ? userInputDb.name : ""}
				handleChange={handleUserDetailChange}
				required="true"
			/>

			<Input
				type="email"
				name="email"
				value={userInputDb ? userInputDb.email : ""}
				handleChange={handleUserDetailChange}
				required="true"
			/>

			<h4 className="block my-5 text-grey-300 capitalize underline">
				<span className="font-medium">Shipping Address & Contact: </span>
			</h4>

			<Input
				type="text"
				name="name"
				value={userAddInputDb ? userAddInputDb.name : ""}
				handleChange={handleUserAddChange}
				labelText="receiver name"
				required="true"
			/>

			<Input
				type="number"
				name="contact"
				value={userAddInputDb ? userAddInputDb.contact : ""}
				handleChange={handleUserAddChange}
				labelText="receiver contact no."
				required="true"
			/>

			<Input
				type="text"
				name="address"
				value={userAddInputDb ? userAddInputDb.address : ""}
				handleChange={handleUserAddChange}
				required="true"
			/>

			<button
				type="button"
				onClick={postUpdatedUserProfile}
				className="text-white capitalize bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
			>
				update detail
			</button>
		</form>
	);
}

export default ProfileDetail;
