import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const menuList = [
  { id: 1, to: "/myshelf", menuText: "My Shelf" },
  { id: 2, to: "/myfavorite", menuText: "My Favorite" },
];
export default function NavBarMyShelf() {
  const { pathname } = useLocation();
  return (
    <div className="flex gap-5 text-orange-500 font-semibold">
      {menuList.map((item) => (
        <MenuItem
          key={item.id}
          to={item.to}
          menuText={item.menuText}
          active={pathname === item.to}
        />
      ))}
    </div>
  );
}
