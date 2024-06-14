/* eslint-disable react/prop-types */
import Button from "./Button";
import bookImage from "../assets/bookImage.jpg";
import { useNavigate } from "react-router-dom";
import useAudiobook from "../hooks/useAudiobook";
import { useState } from "react";

export default function ListWaitApprove({
  title,
  author,
  createdAt,
  src,
  id,
  userName,
}) {
  const [isAccept, setIsAccept] = useState(true);
  const [isReject, setisReject] = useState(true);
  const navigate = useNavigate();
  const { acceptAudiobook, rejectAudiobook } = useAudiobook();
  const handleClickPreview = () => {
    navigate(`/${id}`);
  };

  const handleClickAccept = async () => {
    try {
      await acceptAudiobook(id);
      setIsAccept(false);
      setisReject(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickReject = async () => {
    try {
      await rejectAudiobook(id);
      setIsAccept(false);
      setisReject(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-8 py-3 flex items-center justify-between gap-20">
      <div className="flex gap-2 w-72">
        <div className="w-24 h-20">
          <img src={src || bookImage} alt="bookImage" className="h-full" />
        </div>
        <div>
          <div className="font-bold text-black">{title}</div>
          <div className="text-sm">{author}</div>
          <div className="text-xs">{`Writer : ${userName}`}</div>
          <div className="text-xs">{`Created At : ${createdAt}`}</div>
        </div>
      </div>
      <div className="flex gap-1">
        <Button size="40" onClick={handleClickPreview}>
          PREVIEW
        </Button>
        {isAccept ? (
          <Button size="40" bg="green" onClick={handleClickAccept}>
            ACCEPT
          </Button>
        ) : null}
        {isReject ? (
          <Button size="40" bg="black" onClick={handleClickReject}>
            REJECT
          </Button>
        ) : null}
      </div>
    </div>
  );
}
