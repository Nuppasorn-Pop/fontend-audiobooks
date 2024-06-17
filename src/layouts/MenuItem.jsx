import { Link } from "react-router-dom";
export default function MenuItem({ active, to, Icon, menuText, onClick }) {
  return (
    <Link
      to={to}
      role="button"
      onClick={onClick}
      className={`flex gap-1 ${
        active ? "" : "hover:bg-gray-100"
      } w-full px-1 pt-1`}
    >
      {Icon ? <Icon /> : null}
      <span className={`${active ? "text-black" : "text-gray-400"} w-36`}>
        {menuText}
      </span>
    </Link>
  );
}
