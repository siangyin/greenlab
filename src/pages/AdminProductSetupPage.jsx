import { useContext, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { LoginContext, AdminContext, UserContext, BE_URL } from "../helpers";
import axios from "axios";
import { ProductForm, Subheader, UnauthorisedCard } from "../components";

function AdminProductSetupPage() {
	const localuser = localStorage.getItem("userID");
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	const { admin, setAdmin } = useContext(AdminContext);
	const { userID, setUserID } = useContext(UserContext);

	if (!loggedIn) {
		return <UnauthorisedCard />;
	}

	if (loggedIn && !admin) {
		return <UnauthorisedCard />;
	}

	return (
		<>
			<Subheader subheader="new product" />
			<ProductForm />
		</>
	);
}

export default AdminProductSetupPage;
