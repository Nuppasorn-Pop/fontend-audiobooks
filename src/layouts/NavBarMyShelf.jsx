import { Link } from "react-router-dom";
export default function NavBarMyShelf() {
  return (
    <div className="flex gap-5">
      <Link to="/myshelf" className="text-orange-500 font-semibold">
        My Shelf
      </Link>
      <Link to="/myfavorite" className="text-orange-500 font-semibold">
        My Favorite
      </Link>
    </div>
  );
}
