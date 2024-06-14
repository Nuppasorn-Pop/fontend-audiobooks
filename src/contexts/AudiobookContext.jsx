/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState, useEffect } from "react";
import audiobookApi from "../apis/audibook-api";
export const AudiobookContext = createContext();

export default function AudiobookConextProvider({ children }) {
  const [audiobook, setAudiobook] = useState([]);

  const fetchAudioBooks = async () => {
    try {
      const res = await audiobookApi.getAllAudioBooks();
      setAudiobook(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAudioBooks();
  }, []);

  const acceptAudiobook = (audiobookId) => {
    audiobookApi.acceptStatusAudiobook(audiobookId);
  };

  const rejectAudiobook = (audiobookId) => {
    audiobookApi.rejectStatusAudiobook(audiobookId);
  };

  return (
    <AudiobookContext.Provider
      value={{ audiobook, acceptAudiobook, rejectAudiobook }}
    >
      {children}
    </AudiobookContext.Provider>
  );
}
