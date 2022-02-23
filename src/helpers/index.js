import axios from "axios";

const sendGetRequest = async () => {
	try {
		const res = await axios.get("http://localhost:5000/api/v1/products");
		console.log(res.data);
		return res;
	} catch (err) {
		console.error(err);
	}
};
import { LoginContext, AdminContext, UserContext } from "./context";

const BE_URL = `http://localhost:5000/api/v1`;

export { LoginContext, AdminContext, UserContext, BE_URL };
