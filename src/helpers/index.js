import axios from "axios";

import { LoginContext, AdminContext, UserContext } from "./context";

const BE_URL = process.env.BE_URL;
// `https://greenlab-be.herokuapp.com/api/v1`;

export { LoginContext, AdminContext, UserContext, BE_URL };
