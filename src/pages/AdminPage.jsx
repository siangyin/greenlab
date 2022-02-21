import React from "react";

function AdminPage() {
	return (
		<div className="p-20">
			<div className="mb-6">
				<label
					htmlFor="name"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
				>
					Name
				</label>

				<input
					type="text"
					id="name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
					placeholder=" product name"
					required
				/>

				<label
					htmlFor="price"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
				>
					Price
				</label>

				<input
					type="number"
					id="price"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
					min="0"
					required
				/>
				<label
					htmlFor="description"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
				>
					Description
				</label>

				<textarea
					type="text"
					id="description"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
				/>
			</div>
			<label
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				for="user_avatar"
			>
				Upload image
			</label>
			<input
				class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
				aria-describedby="user_avatar_help"
				id="user_avatar"
				type="file"
			/>
			<div
				class="mt-1 text-sm text-gray-500 dark:text-gray-300"
				id="user_avatar_help"
			>
				img.png
			</div>
		</div>
	);
}

export default AdminPage;
