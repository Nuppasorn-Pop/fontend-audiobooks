import axios from "axios";
const authApi = {};

authApi.register = (body) =>
  axios.post("http://localhost:8888/auth/register", body);

export default authApi;
