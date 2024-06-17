import bookImage from "../../../assets/bookImage.jpg";
import Button from "../../../components/Button";
import { AudioPlayer } from "react-audio-player-component";
import audiobookApi from "../../../apis/audibook-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Progress from "../../../components/Progress";
import favoriteApi from "../../../apis/favorite-api";

export default function AudiobookForm() {
  const { audiobookId } = useParams();
  const [oneAudiobook, setOneAudiobook] = useState([]);
  const [inShelf, setInshelf] = useState(true);
  const [audioFile, setAudioFile] = useState(null);
  const [isFav, setIsFav] = useState(null);

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

  useEffect(() => {
    const fetchFav = async () => {
      try {
        const res = await favoriteApi.getFavByuserIdAndAudiobookId(audiobookId);
        console.log(res.data.id, "res-fev");
        setIsFav(res.data.id);
        if (res.data.id) {
          setInshelf(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFav();
  }, [audiobookId, isFav]);

  const handleClickFav = async () => {
    try {
      const data = await favoriteApi.create(oneAudiobook?.id);
      setIsFav(data.audiobookId);
      setInshelf(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickUnFav = async () => {
    console.log("sdsds");
    try {
      if (isFav) {
        console.log("isFav", isFav);
        await favoriteApi.delete(isFav);
        setInshelf((cur) => !cur);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="flex gap-4 items-baseline"></div>
          <div>
            {inShelf ? (
              <Button onClick={handleClickFav} bg="green">
                Add to my favorite
              </Button>
            ) : (
              <Button onClick={handleClickUnFav}>Delete my favorite</Button>
            )}
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
