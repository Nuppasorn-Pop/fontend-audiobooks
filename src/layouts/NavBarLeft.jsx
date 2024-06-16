import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Logo from "../components/Logo";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";
import {
  HomeIcon,
  ShelfIcon,
  CreateIcon,
  LogoutIcon,
  AdminIcon,
} from "../icons/icons";

export default function NavBarLeft() {
  const { logout, authUser } = useAuth();
  const { pathname } = useLocation();
  const checkRole = authUser?.role;

  const handleClickeLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const menuList = [
    { id: 1, to: "/", Icon: HomeIcon, menuText: "Home" },
    { id: 2, to: "/myshelf", Icon: ShelfIcon, menuText: "My Shelf" },
    {
      id: 3,
      to: "/createaudiobook",
      Icon: CreateIcon,
      menuText: "Create Audiobook",
    },
    {
      id: 4,
      to: "/login",
      Icon: LogoutIcon,
      menuText: "Logout",
      onClick: handleClickeLogout,
    },
  ];
  return (
    <div className="bg-white min-h-full rounded-l-lg flex flex-col items-center gap-6">
      <div className="pt-6">
        <Logo size="5" />
      </div>
      <div className="flex flex-col gap-3 items-start">
        {menuList.map((item) => (
          <MenuItem
            key={item.id}
            Icon={item.Icon}
            to={item.to}
            menuText={item.menuText}
            active={pathname === item.to}
            onClick={item.onClick}
          />
        ))}

        {checkRole === "ADMIN" ? (
          <Link
            to="/admin"
            role="button"
            className="flex gap-2 text-black p-3 bg-orange-100 w-full justify-center"
          >
            <AdminIcon />
            <span>Admin Task</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
