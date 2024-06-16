import { useEffect } from "react";
import FormAudiobook from "../../../components/FormAudiobook";
import { useState } from "react";
import audiobookApi from "../../../apis/audibook-api";

export default function MyAudiobookForm() {
  const [listMyAudiobook, setListMyAudiobook] = useState(null);
  useEffect(() => {
    const fetchMyAudiobook = async () => {
      try {
        const res = await audiobookApi.getMyAudiobook();
        setListMyAudiobook(res.data);
      } catch (error) {
        console.lof(error);
      }
    };
    fetchMyAudiobook();
  }, []);
  return (
    <div className="flex flex-wrap gap-3 mt-3 ml-2 justify-start">
      {listMyAudiobook?.map((el) => (
        <FormAudiobook
          key={el.id}
          title={el.title}
          author={el.author}
          src={el.bookImage}
          id={el.id}
          createdAt={el.createdAt.split("T")[0]}
          isDelete={true}
          ishidden={true}
          status={el.status}
        />
      ))}
    </div>
  );
}
