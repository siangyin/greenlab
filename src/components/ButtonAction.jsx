import React from "react";

const ButtonAction = ({ labelText, handleClick }) => {
	return (
		<button
			type="button"
			onClick={handleClick}
			className="text-white bg-rose-400 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center capitalize"
		>
			{labelText}
		</button>
	);
};

export default ButtonAction;
