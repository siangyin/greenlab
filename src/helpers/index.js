import axios from "axios";

import { LoginContext, AdminContext, UserContext } from "./context";

const BE_URL = `https://greenlab-be.herokuapp.com/api/v1`;
// `https://greenlab-be.herokuapp.com/api/v1`;
console.log(BE_URL);
export { LoginContext, AdminContext, UserContext, BE_URL };
