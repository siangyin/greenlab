import axios from "axios";

export const sendGetRequest = async () => {
	try {
		const res = await axios.get(
			"https://greenlab-be.herokuapp.com/api/v1/products"
		);
    console.log(res.data);
    return res
	} catch (err) {
		console.error(err);
	}
};
