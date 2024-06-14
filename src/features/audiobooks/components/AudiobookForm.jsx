import bookImage from "../../../assets/bookImage.jpg";
import Button from "../../../components/Button";
import { AudioPlayer } from "react-audio-player-component";
import audiobookApi from "../../../apis/audibook-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Progress from "../../../components/Progress";

export default function AudiobookForm() {
  const { audiobookId } = useParams();
  const [oneAudiobook, setOneAudiobook] = useState([]);
  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    const fetchOneAudiobook = async () => {
      try {
        const res = await audiobookApi.getOneAudiobook(audiobookId);
        setOneAudiobook(res.data);
        setAudioFile(res.data.audioFile);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOneAudiobook();
  }, [audiobookId]);

  return (
    <div className="flex flex-col p-4 gap-6 items-center">
      <div className="flex gap-14">
        <div className="bg-white w-40 h-52 p-2 flex items-center">
          <img src={oneAudiobook?.bookImage || bookImage} className="h-full" />
        </div>
        <div className="bg-white p-4 flex flex-col gap-2 text-black">
          <div>Title : {oneAudiobook?.title}</div>
          <div>Author : {oneAudiobook?.author}</div>
          <div>Voice Actor : {oneAudiobook?.voiceActor || "-"}</div>
          <div>Book Type : {oneAudiobook?.bookType || "-"}</div>
          <div>
            Writer : {oneAudiobook.user?.firstName}{" "}
            {oneAudiobook.user?.lastName}
          </div>
          <div className="flex gap-4 items-baseline">
            <div>Status : </div>
            <div className="bg-green-400 p-1"> In Shelf</div>
            {/* <div className="bg-black p-1 text-white"> Un Shelf</div> */}
          </div>
          <div>
            <Button>Add to my shelf</Button>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center w-96 h-40 p-4">
        <div className="text-black mb-2">Detail</div>
        <div className="bg-white w-full">
          {oneAudiobook?.detail || "This story have not detail"}
        </div>
      </div>
      <div className="bg-red-300">
        {audioFile ? (
          <AudioPlayer
            src={audioFile}
            minimal={false}
            width={400}
            trackHeight={75}
            barWidth={1}
            gap={1}
            visualise={true}
            backgroundColor="#FFF8DE"
            barColor="#C1D0B5"
            barPlayedColor="#99A98F"
            skipDuration={2}
            showLoopOption={false}
            showVolumeControl={true}
          />
        ) : (
          <Progress />
        )}
      </div>
    </div>
  );
}
