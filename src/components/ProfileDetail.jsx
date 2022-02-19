import { useState } from "react";
import Input from "./Input";

function ProfileDetail() {
	const [formProperty, setFormProperty] = useState([
		{
			name: "name",
			label: "name",
			required: false,
			type: "text",
			placeholder: "Steven Jo",
		},
		{
			name: "contact",
			label: "contact",
			required: false,
			type: "text",
			placeholder: "+65 5555 3333",
		},
		{
			name: "address",
			label: "address",
			required: false,
			type: "text",
			placeholder: "123 Mary Merry Road #08-88",
		},

		{
			name: "postalcode",
			label: "postalcode",
			required: false,
			type: "number",
			placeholder: 654321,
		},
		{
			name: "remark",
			label: "remark",
			required: false,
			type: "text",
			placeholder: "please inform before delivery",
		},
	]);
	return (
		<form className="m-10">
			{formProperty.map((item, i) => {
				return <Input key={i} item={item} />;
			})}

			<button
				type="submit"
				className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
			>
				Submit
			</button>
		</form>
	);
}

export default ProfileDetail;
