import FormAudiobook from "../../../components/FormAudiobook";
import useAudiobook from "../../../hooks/useAudiobook";

export default function ListAudiobookForm() {
  const { audiobook } = useAudiobook();
  const audiobookAccept = audiobook.filter((el) => el.status === "ACCEPTED");

  return (
    <div className="flex flex-wrap gap-2 mt-3 justify-start">
      {audiobookAccept.reverse().map((el) => (
        <FormAudiobook
          key={el.id}
          title={el.title}
          author={el.author}
          src={el.bookImage}
          id={el.id}
          createdAt={el.createdAt.split("T")[0]}
        />
      ))}
    </div>
  );
}
