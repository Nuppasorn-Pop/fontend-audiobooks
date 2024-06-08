import axios from "../config/axios";
const authApi = {};

authApi.register = (body) =>
  axios.post("http://localhost:8888/auth/register", body);
authApi.login = (body) => axios.post("http://localhost:8888/auth/login", body);
authApi.getMe = () => axios.get("http://localhost:8888/auth/me");
export default authApi;
