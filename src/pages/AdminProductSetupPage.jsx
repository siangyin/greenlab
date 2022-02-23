import React from "react";
import { ProductForm, Subheader } from "../components";

function AdminProductSetupPage() {
	return (
		<>
			<Subheader subheader="new product" />
			<ProductForm />
		</>
	);
}

export default AdminProductSetupPage;
