import axios from "axios";

import { LoginContext, AdminContext, UserContext } from "./context";

const BE_URL = `http://localhost:5000/api/v1`;
	// `https://greenlab-be.herokuapp.com/api/v1`;

export { LoginContext, AdminContext, UserContext, BE_URL };
