import React from "react";

function Input({ type, name, value, handleChange, labelText, required }) {
	// name label type placeholder required
	return (
		<div className="mb-6">
			<label
				htmlFor={name}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
			>
				{labelText || name}
			</label>
			{required ? (
				<input
					type={type}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
					name={name}
					value={value}
					onChange={handleChange}
					required
				/>
			) : (
				<input
					type={type}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
					name={name}
					value={value}
					onChange={handleChange}
				/>
			)}
		</div>
	);
}

export default Input;
