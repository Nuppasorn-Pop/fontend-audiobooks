import { useContext } from "react";
import { AudiobookContext } from "../contexts/AudiobookContext";

export default function useAudiobook() {
  return useContext(AudiobookContext);
}
