import MyAudiobookForm from "../features/audiobooks/components/MyAudiobookForm";
import NavBarMyShelf from "../layouts/NavBarMyShelf";

export default function MyShelf() {
  return (
    <div className="bg-gray-100 rounded-br-lg overflow-y-scroll max-h-screen h-screen p-6">
      <div className="flex gap-5">
        <NavBarMyShelf />
      </div>
      <MyAudiobookForm />
    </div>
  );
}
