import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CartItem, LoadingSpinner, ButtonAction } from "./";

function AdminList({ category, data }) {
	let count = 0;
	let header = `result : ${count} ${category} `;
	console.log(data);

	const tableheader = {
		users: ["email", "user id", "user name", "role"],
		orders: ["order no", "date", "user id", "status"],
	};

	if (!data) {
		return <LoadingSpinner />;
	}

	let listing;
	if (data) {
		count = data.length;
		if (category === "users") {
			listing = data.map((item) => {
				return (
					<tr key={item._id}>
						<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
							<div className="flex items-center">
								<div className="ml-3">
									<p className="text-gray-900 whitespace-no-wrap">
										{item.email}
									</p>
								</div>
							</div>
						</td>
						<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
							<p className="text-gray-900 whitespace-no-wrap">{item._id}</p>
						</td>
						<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
							<p className="text-gray-900 whitespace-no-wrap">{item.name}</p>
						</td>
						<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
							<span
								className={
									item.role === "admin"
										? `relative inline-block px-3 py-1 font-semibold text-rose-500 leading-tight`
										: `relative inline-block px-3 py-1 font-semibold text-emerald-500 leading-tight`
								}
							>
								<span
									aria-hidden
									className={
										item.role === "admin"
											? `absolute inset-0 bg-rose-200 opacity-50 rounded-full`
											: `absolute inset-0 bg-emerald-200 opacity-50 rounded-full`
									}
								></span>
								<span className="relative">{item.role}</span>
							</span>
						</td>
					</tr>
				);
			});
		} else {
			listing = data.map((item) => {
				return (
					<tr key={item._id}>
						<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
							<div className="flex items-center">
								<div className="ml-3">
									<p className="text-gray-900 whitespace-no-wrap">{item._id}</p>
								</div>
							</div>
						</td>
						<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
							<p className="text-gray-900 whitespace-no-wrap">
								{item.createdAt.substring(0, 10)}
							</p>
						</td>
						<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
							<p className="text-gray-900 whitespace-no-wrap">{item.userId}</p>
						</td>

						<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
							<span
								className={
									item.status === "pending"
										? `relative inline-block px-3 py-1 font-semibold text-rose-500 leading-tight`
										: `relative inline-block px-3 py-1 font-semibold text-emerald-500 leading-tight`
								}
							>
								<span
									aria-hidden
									className={
										item.status === "pending"
											? `absolute inset-0 bg-rose-200 opacity-50 rounded-full`
											: `absolute inset-0 bg-emerald-200 opacity-50 rounded-full`
									}
								></span>
								<span className="relative">{item.status}</span>
							</span>
						</td>
					</tr>
				);
			});
		}
	}

	return (
		<div className="bg-white p-8 rounded-md w-full">
			<div className=" flex items-center justify-between pb-6">
				<h2 className="text-gray-600 font-semibold capitalize">
					{`result: ${count} ${category}`}
				</h2>

				<div className="flex items-center justify-between"></div>
			</div>
			<div>
				<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									{category === "users"
										? tableheader.users.map((item, i) => {
												return (
													<th
														key={i}
														className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
													>
														{item}
													</th>
												);
										  })
										: tableheader.orders.map((item, i) => {
												return (
													<th
														key={i}
														className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
													>
														{item}
													</th>
												);
										  })}
								</tr>
							</thead>
							<tbody>{listing}</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminList;
