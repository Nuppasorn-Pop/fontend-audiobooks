import axios from "../config/axios";
const favoriteApi = {};

favoriteApi.create = (audiobookId) =>
  axios.post(`http://localhost:8888/favorite/${audiobookId}`);
favoriteApi.delete = (favoriteId) =>
  axios.delete(`http://localhost:8888/favorite/${favoriteId}`);
favoriteApi.getFavoriteByUserId = () =>
  axios.get("http://localhost:8888/favorite");
favoriteApi.getFavByuserIdAndAudiobookId = (audiobookId) =>
  axios.get(`http://localhost:8888/favorite/${audiobookId}`);
export default favoriteApi;
