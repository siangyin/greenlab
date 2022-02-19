import React from "react";

function OrdersCard() {
	return (
		<div className="p-4 max-w-md bg-white rounded-lg border sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
					All orders
				</h3>
			</div>
			<div className="flow-root">
				<ul
					role="list"
					className="divide-y divide-gray-200 dark:divide-gray-700"
				>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="flex-1 min-w-0">
								<a
									href="#"
									className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500"
								>
									Order No: 258963
								</a>
								<p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">
									status: processing
								</p>
								<p className="text-sm text-gray-500 truncate dark:text-gray-400">
									Order date: 22 Feb 2022
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$320
							</div>
						</div>
					</li>
					{/* // next line */}
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="flex-1 min-w-0">
								<a
									href="#"
									className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500"
								>
									Order No: 258963
								</a>
								<p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">
									status: processing
								</p>
								<p className="text-sm text-gray-500 truncate dark:text-gray-400">
									Order date: 22 Feb 2022
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$320
							</div>
						</div>
					</li>
					{/* //next line */}
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="flex-1 min-w-0">
								<a
									href="#"
									className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500"
								>
									Order No: 258963
								</a>
								<p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">
									status: processing
								</p>
								<p className="text-sm text-gray-500 truncate dark:text-gray-400">
									Order date: 22 Feb 2022
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$320
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default OrdersCard;
