import React from "react";

function Input({ item }) {
	return (
		<div className="mb-6">
			<label
				for={item.name}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
			>
				{item.label}
			</label>
			{item.required ? (
				<input
					type={item.type}
					id={item.name}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
					placeholder={item.placeholder}
					required
				/>
			) : (
				<input
					type={item.type}
					id={item.name}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
					placeholder={item.placeholder}
				/>
			)}
		</div>
	);
}

export default Input;
