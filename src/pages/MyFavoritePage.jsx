import NavBarMyShelf from "../layouts/NavBarMyShelf";
import MyFavoriteForm from "../features/favorite/components/MyFavoriteForm";

export default function MyFavoritePage() {
  return (
    <div className="bg-gray-100 rounded-br-lg overflow-y-scroll max-h-screen h-screen p-6">
      <div className="flex gap-5">
        <NavBarMyShelf />
      </div>
      <MyFavoriteForm />
    </div>
  );
}
