/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import ListWaitApprove from "../../../components/ListWaitApprove";
import useAudiobook from "../../../hooks/useAudiobook";
import { useState } from "react";

export default function ApproveForm() {
  const { audiobook } = useAudiobook();
  const [isAudiobook, setIsAudiobook] = useState(true);
  const audiobookPending = audiobook.filter((el) => el.status === "PENDING");

  useEffect(() => {
    if (audiobookPending.length === 0) {
      setIsAudiobook(false);
    }
  }, []);

  return (
    <div>
      {isAudiobook ? (
        <div className="flex font-semibold justify-between py-3 text-black">
          <div className="flex-grow text-center">Title</div>
          <div className="flex-grow text-center">Status</div>
          <hr />
        </div>
      ) : (
        <div className="text-center bg-gray-100">
          This have not audiobooks to approve
        </div>
      )}
      {audiobookPending.map((el) => (
        <ListWaitApprove
          status={el.status}
          key={el.id}
          title={el.title}
          author={el.author}
          createdAt={el.createdAt.split("T")[0]}
          src={el.bookImage}
          id={el.id}
          userName={`${el.user.firstName} ${el.user.lastName}`}
        />
      ))}
    </div>
  );
}
