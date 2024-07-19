import axios from "../config/axios";
const favoriteApi = {};

favoriteApi.create = (audiobookId) => axios.post(`/favorite/${audiobookId}`);
favoriteApi.delete = (favoriteId) => axios.delete(`/favorite/${favoriteId}`);
favoriteApi.getFavoriteByUserId = () => axios.get("/favorite");
favoriteApi.getFavByuserIdAndAudiobookId = (audiobookId) =>
  axios.get(`/favorite/${audiobookId}`);
export default favoriteApi;
