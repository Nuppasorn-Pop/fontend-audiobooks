import axios from "../config/axios";
const audiobookApi = {};

audiobookApi.create = (formData) => axios.post("/audiobooks", formData);
audiobookApi.findAudiobookByTitle = (title) => axios.get("/audiobooks", title);
audiobookApi.getAllAudioBooks = () => axios.get("/audiobooks");
audiobookApi.getMyAudiobook = () => axios.get(`/audiobooks/myShelf`);
audiobookApi.getOneAudiobook = (audiobookId) =>
  axios.get(`/audiobooks/${audiobookId}`);
audiobookApi.acceptStatusAudiobook = (audiobookId) =>
  axios.patch(`/audiobooks/${audiobookId}`);
audiobookApi.rejectStatusAudiobook = (audiobookId) =>
  axios.delete(`/audiobooks/${audiobookId}/reject`);
audiobookApi.deleteAudiobook = (audiobookId) =>
  axios.delete(`/audiobooks/${audiobookId}`);

export default audiobookApi;
