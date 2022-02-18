import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SingleProductPage() {
	return (
		<div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
			<div id="viewerButton" className="hidden w-full flex justify-center">
				<button className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold">
					Open Quick View
				</button>
			</div>
			<div
				id="viewerBox"
				className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900"
			>
				<div className="flex justify-end">
					<button
						aria-label="Close"
						className="focus:outline-none focus:ring-2 focus:ring-gray-800"
					>
						X
					</button>
				</div>
				<div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
					<div className="lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">
						<img
							src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
							alt="A black chair with wooden legs"
							className="w-1/3"
						/>
					</div>
					<div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
						<h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
							super plant
						</h1>
						<p className="text-base leading-normal text-gray-600 dark:text-white mt-2">
							You don't just want to be comfortable sitting in a bar stool—you
							want to be comfortable shimmying it up to the bar, closer to your
							lover, or back slightly to include a third person in the
							conversation.
						</p>
						<p className="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
						<div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
							<button className="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
								Add to Cart
							</button>
						</div>
						<div className="mt-6">
							<button className="text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
								xxxx reviews
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleProductPage;
