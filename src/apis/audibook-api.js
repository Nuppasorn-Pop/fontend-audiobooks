import axios from "../config/axios";
const audiobookApi = {};

audiobookApi.create = (formData) =>
  axios.post("http://localhost:8888/audiobooks/", formData);
audiobookApi.findAudiobookByTitle = (title) =>
  axios.get("http://localhost:8888/audiobooks/", title);
audiobookApi.getAllAudioBooks = () =>
  axios.get("http://localhost:8888/audiobooks/");
audiobookApi.getMyAudiobook = () =>
  axios.get(`http://localhost:8888/audiobooks/myShelf`);
audiobookApi.getOneAudiobook = (audiobookId) =>
  axios.get(`http://localhost:8888/audiobooks/${audiobookId}`);
audiobookApi.acceptStatusAudiobook = (audiobookId) =>
  axios.patch(`http://localhost:8888/audiobooks/${audiobookId}`);
audiobookApi.rejectStatusAudiobook = (audiobookId) =>
  axios.delete(`http://localhost:8888/audiobooks/${audiobookId}/reject`);
audiobookApi.deleteAudiobook = (audiobookId) =>
  axios.delete(`http://localhost:8888/audiobooks/${audiobookId}`);

export default audiobookApi;
