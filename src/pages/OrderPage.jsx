import React from "react";
import { FaAngleLeft } from "react-icons/fa";

function OrderPage() {
	return (
		<div className="container mx-auto mt-10">
			<div className="flex shadow-md my-10">
				<div className="w-3/4 bg-white px-10 py-10">
					<div className="flex justify-between border-b pb-8">
						<h1 className="font-semibold text-2xl">Order no: 222364</h1>
						<h2 className="font-semibold text-2xl">3 Items</h2>
					</div>
					<div className="flex mt-10 mb-5">
						<h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
							Product Details
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
							Quantity
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
							Price
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
							Total
						</h3>
					</div>
					<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
						<div className="flex w-2/5">
							{/* <!-- product -->  */}
							<div className="w-20">
								<img
									className="h-24"
									src="https://m.media-amazon.com/images/I/91wOqjYFpFL.jpg"
									alt=""
								/>
							</div>
							<div className="flex flex-col justify-between ml-4 flex-grow">
								<span className="font-bold text-sm">Super Plant</span>
								<span className="text-rose-500 text-xs">Plant</span>
								<a
									href="#"
									className="font-semibold hover:text-rose-500 text-gray-500 text-xs"
								>
									Remove
								</a>
							</div>
						</div>
						<div className="flex justify-center w-1/5">
							<span className="mx-2 border text-center w-8">1</span>
						</div>
						<span className="text-center w-1/5 font-semibold text-sm">
							$400.00
						</span>
						<span className="text-center w-1/5 font-semibold text-sm">
							$400.00
						</span>
					</div>

					<a
						href="/"
						className="flex font-semibold text-emerald-600 text-sm mt-10"
					>
						<FaAngleLeft />
						Back
					</a>
				</div>

				<div id="summary" className="w-1/4 px-8 py-10">
					<h1 className="font-semibold text-2xl border-b pb-8">
						Order Summary
					</h1>
					<div className="flex justify-between mt-10 mb-5">
						<span className="font-semibold text-sm uppercase">Grand Total</span>
						<span className="font-semibold text-sm">590$</span>
					</div>
					<div>
						<label className="font-medium inline-block mb-3 text-sm uppercase">
							Status
						</label>
						<select className="block p-2 text-gray-600 w-full text-sm">
							<option>processing</option>
						</select>
					</div>
					<div className="py-10">
						<label
							htmlFor="promo"
							className="font-semibold inline-block mb-3 text-sm uppercase"
						>
							Payment status
						</label>
						<input
							type="text"
							id="promo"
							placeholder="Enter your code"
							className="p-2 text-sm w-full"
						/>
					</div>
					<button className="bg-red-400 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
						Cancel Order Request
					</button>
					<div className="border-t mt-8">
						<div className="flex font-semibold justify-between py-6 text-sm uppercase">
							<span>Total cost</span>
							<span>$600</span>
						</div>
						<button className="bg-emerald-500 font-semibold hover:bg-emerald-600 py-3 text-sm text-white uppercase w-full">
							Order Received
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderPage;
