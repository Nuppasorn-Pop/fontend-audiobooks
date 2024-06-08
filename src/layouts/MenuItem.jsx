import { Link } from "react-router-dom";
export default function MenuItem({
  active,
  to,
  Icon,
  menuText,
  onClick = null,
}) {
  return (
    <Link
      to={to}
      role="button"
      onClick={onClick}
      className={`flex gap-1 ${
        active ? "" : "hover:bg-gray-100"
      } w-full px-1 pt-1`}
    >
      <Icon />
      <span className={`${active ? "text-black" : "text-gray-400"}`}>
        {menuText}
      </span>
    </Link>
  );
}
