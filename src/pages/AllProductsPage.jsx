import React from "react";
// import { ProductCard } from "../components";
import { FaStar } from "react-icons/fa";

function AllProductsPage() {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>
				<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					<div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<img
								className="p-8 rounded-t-lg"
								src="https://media.istockphoto.com/photos/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-picture-id1278906674?b=1&k=20&m=1278906674&s=170667a&w=0&h=PRsEw9KpsggCTUEqH_DqgtEKRt884wAGfQCQTeS8xBY="
								alt="product image"
							/>
						</a>
						<div className="px-5 pb-5">
							<a href="#">
								<h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
									super plants
								</h3>
							</a>
							<div className="flex items-center mt-2.5 mb-5">
								<span className="bg-yellow-100 text-black-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-emerald-800">
									5.0
								</span>{" "}
								<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
							</div>
							<div className="flex justify-between items-center">
								<span className="text-3xl font-bold text-gray-900 dark:text-white">
									$599
								</span>
								<a
									href="#"
									className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
								>
									Add to cart
								</a>
							</div>
						</div>
					</div>

					{/* product next */}
					<div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<img
								className="p-8 rounded-t-lg"
								src="https://media.istockphoto.com/photos/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-picture-id1278906674?b=1&k=20&m=1278906674&s=170667a&w=0&h=PRsEw9KpsggCTUEqH_DqgtEKRt884wAGfQCQTeS8xBY="
								alt="product image"
							/>
						</a>
						<div className="px-5 pb-5">
							<a href="#">
								<h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
									super plants
								</h3>
							</a>
							<div className="flex items-center mt-2.5 mb-5">
								<span className="bg-yellow-100 text-black-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-emerald-800">
									5.0
								</span>{" "}
								<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
							</div>
							<div className="flex justify-between items-center">
								<span className="text-3xl font-bold text-gray-900 dark:text-white">
									$599
								</span>
								<a
									href="#"
									className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
								>
									Add to cart
								</a>
							</div>
						</div>
					</div>

					{/* product next */}
					<div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
						<a href="#">
							<img
								className="p-8 rounded-t-lg"
								src="https://media.istockphoto.com/photos/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-picture-id1278906674?b=1&k=20&m=1278906674&s=170667a&w=0&h=PRsEw9KpsggCTUEqH_DqgtEKRt884wAGfQCQTeS8xBY="
								alt="product image"
							/>
						</a>
						<div className="px-5 pb-5">
							<a href="#">
								<h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
									super plants
								</h3>
							</a>
							<div className="flex items-center mt-2.5 mb-5">
								<span className="bg-yellow-100 text-black-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-emerald-800">
									5.0
								</span>{" "}
								<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
							</div>
							<div className="flex justify-between items-center">
								<span className="text-3xl font-bold text-gray-900 dark:text-white">
									$599
								</span>
								<a
									href="#"
									className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
								>
									Add to cart
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AllProductsPage;
