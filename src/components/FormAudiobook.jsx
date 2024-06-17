/* eslint-disable react/prop-types */
import bookImage from "../assets/bookImage.jpg";
import { useNavigate } from "react-router-dom";
import useAudiobook from "../hooks/useAudiobook";
import { useState } from "react";
import favoriteApi from "../apis/favorite-api";

export default function FormAudiobook({
  src,
  title,
  author,
  createdAt,
  id,
  isDelete,
  status,
  ishidden,
  isUnFav,
  favId,
}) {
  const navigate = useNavigate();
  const { deleteMyAudiobook } = useAudiobook();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [unFavSuccess, setUnFavSuccess] = useState(false);
  const handleClick = () => {
    navigate(`/${id}`);
  };

  const handleClickDelete = async () => {
    try {
      await deleteMyAudiobook(id);
      setDeleteSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickUnFav = async () => {
    try {
      await favoriteApi.delete(favId);
      setUnFavSuccess((cur) => !cur);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div
        className="w-40 h-64 bg-white shadow shadow-orange-500 pt-1"
        role="button"
        onClick={handleClick}
      >
        <div>
          <img
            src={src || bookImage}
            alt="bookImage"
            className="h-24 w-full px-3 mt-2"
          />
        </div>
        <div className="p-2">
          <div className="text-xs font-semibold text-black">{title}</div>
          <small>{author}</small>
          <br />
          <small>{createdAt}</small>
        </div>
      </div>
      {deleteSuccess ? (
        <div className="absolute h-full w-full top-0 transparent opacity-95 flex items-center justify-center text-black font-semibold bg-red-400">
          Delete success
        </div>
      ) : (
        <div>
          {isDelete ? (
            <div>
              <button
                onClick={handleClickDelete}
                className="bg-red-600 text-white text-xs p-1 mx-2 absolute bottom-2"
              >
                Delete
              </button>
              {ishidden ? (
                <div className="absolute bottom-2 right-8 text-xs p-1 mx-2 bg-black text-white">
                  {status}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      )}

      {unFavSuccess ? (
        <div className="absolute h-full w-full top-0 transparent opacity-95 flex items-center justify-center text-black font-semibold bg-red-400">
          Unfavorite success
        </div>
      ) : (
        <div>
          {isUnFav ? (
            <button
              onClick={handleClickUnFav}
              className="bg-red-600 text-white text-xs p-1 mx-2 absolute bottom-2"
            >
              Unfavorite
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
