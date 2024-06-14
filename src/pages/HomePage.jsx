import ListAudiobookForm from "../features/audiobooks/components/ListAudiobookForm";

export default function HomePage() {
  return (
    <div className="bg-gray-100 rounded-br-lg overflow-y-scroll max-h-screen h-screen p-6">
      <div className="text-orange-500 font-semibold">List Audiobooks</div>
      <ListAudiobookForm />
    </div>
  );
}
