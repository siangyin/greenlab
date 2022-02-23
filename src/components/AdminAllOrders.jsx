import React from "react";
import { FaSearch } from "react-icons/fa";

function AdminAllOrders() {
	return (
		<div className="bg-white p-8 rounded-md w-full">
			<div className=" flex items-center justify-between pb-6">
				<div>
					<h2 className="text-gray-600 font-semibold">All Orders</h2>
					<span className="text-xs">Result: 12 orders</span>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex bg-gray-50 items-center p-2 rounded-md">
						<FaSearch />
						<input
							className="bg-gray-50 outline-none ml-1 block "
							type="text"
							name=""
							id=""
							placeholder="search..."
						/>
					</div>
					<div className="lg:ml-40 ml-10 space-x-8">
						<button className="bg-rose-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
							Search
						</button>
					</div>
				</div>
			</div>
			<div>
				<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Name
									</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Order No
									</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Order Date
									</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Item Qty
									</th>
									<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Status
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<div className="flex items-center">
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Vera Carpenter
												</p>
											</div>
										</div>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">528</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">
											Jan 21, 2020
										</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">43</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span
												aria-hidden
												className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
											></span>
											<span className="relative">Activo</span>
										</span>
									</td>
								</tr>
								<tr>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<div className="flex items-center">
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Blake Bowman
												</p>
											</div>
										</div>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">333</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">
											Jan 01, 2020
										</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">77</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span
												aria-hidden
												className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
											></span>
											<span className="relative">Activo</span>
										</span>
									</td>
								</tr>
								<tr>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<div className="flex items-center">
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Dana Moore
												</p>
											</div>
										</div>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">648</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">
											Jan 10, 2020
										</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">64</p>
									</td>
									<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
											<span
												aria-hidden
												className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
											></span>
											<span className="relative">Suspended</span>
										</span>
									</td>
								</tr>
								<tr>
									<td className="px-5 py-5 bg-white text-sm">
										<div className="flex items-center">
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Alonzo Cox
												</p>
											</div>
										</div>
									</td>
									<td className="px-5 py-5 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">123</p>
									</td>
									<td className="px-5 py-5 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">
											Jan 18, 2020
										</p>
									</td>
									<td className="px-5 py-5 bg-white text-sm">
										<p className="text-gray-900 whitespace-no-wrap">70</p>
									</td>
									<td className="px-5 py-5 bg-white text-sm">
										<span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
											<span
												aria-hidden
												className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
											></span>
											<span className="relative">Inactive</span>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
							<span className="text-xs xs:text-sm text-gray-900">
								Showing 1 to 4 of 50 Entries
							</span>
							<div className="inline-flex mt-2 xs:mt-0">
								<button className="text-sm text-rose-50 transition duration-150 hover:bg-rose-500 bg-rose-600 font-semibold py-2 px-4 rounded-l">
									Prev
								</button>
								&nbsp; &nbsp;
								<button className="text-sm text-rose-50 transition duration-150 hover:bg-rose-500 bg-rose-600 font-semibold py-2 px-4 rounded-r">
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminAllOrders;
