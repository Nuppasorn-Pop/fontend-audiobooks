import favoriteApi from "../../../apis/favorite-api";
import FormAudiobook from "../../../components/FormAudiobook";
import { useState } from "react";
import { useEffect } from "react";

export default function MyFavoriteForm() {
  const [myFavorite, setMyFavorite] = useState([]);

  const getAllMyFavorite = async () => {
    try {
      const allFavorite = await favoriteApi.getFavoriteByUserId();
      setMyFavorite(allFavorite.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllMyFavorite();
  }, []);

  console.log(myFavorite);
  return (
    <div className="flex flex-wrap gap-3 mt-3 ml-2 justify-start">
      {myFavorite?.map((el) => (
        <FormAudiobook
          key={el.id}
          favId={el.id}
          title={el.audiobook.title}
          author={el.audiobook.author}
          src={el.audiobook.bookImage}
          id={el.audiobookId}
          createdAt={el.createdAt.split("T")[0]}
          isUnFav={true}
        />
      ))}
    </div>
  );
}
