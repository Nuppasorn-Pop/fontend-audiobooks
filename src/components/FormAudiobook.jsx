/* eslint-disable react/prop-types */
import bookImage from "../assets/bookImage.jpg";
import { useNavigate } from "react-router-dom";

export default function FormAudiobook({ src, title, author, createdAt, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${id}`);
  };

  return (
    <div
      className="w-40 h-60 bg-white shadow shadow-orange-500"
      role="button"
      onClick={handleClick}
    >
      <div>
        <img
          src={src || bookImage}
          alt="bookImage"
          className="h-28 w-full px-3 mt-2"
        />
      </div>
      <div className="p-2">
        <div className="text-xs font-semibold text-black">{title}</div>
        <small>{author}</small>
        <br />
        <small>{createdAt}</small>
      </div>
    </div>
  );
}
