import React from "react";
import { FaArrowLeft, FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item, handleDelete, handleUpdate }) => {
	return (
		<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
			<div className="flex w-2/5">
				{/* <!-- product -->  */}
				<div className="w-20">
					<img className="h-24" src={item.image} alt={item.name} />
				</div>
				<div className="flex flex-col justify-center ml-4 space-y-4">
					<span className="font-bold text-sm">{item.name}</span>
					<span className="font-semibold hover:text-rose-500 text-gray-500 text-xs">
						<FaTrashAlt />
					</span>
				</div>
			</div>
			<div className="flex justify-center w-1/5">
				<button className="px-3 hover:text-rose-500">
					<FaMinus />
				</button>
				<span className="px-3">{item.qty}</span>
				<button className="px-3 hover:text-rose-500">
					<FaPlus />
				</button>
			</div>
			<span className="text-center w-1/5 font-semibold text-sm">
				{item.price}
			</span>
			<span className="text-center w-1/5 font-semibold text-sm">
				{item.qty * item.price}
			</span>
		</div>
	);
};

export default CartItem;
