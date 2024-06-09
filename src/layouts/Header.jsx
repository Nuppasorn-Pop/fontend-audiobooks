import Avatar from "../components/Avatar";
import useAuth from "../hooks/useAuth";
import { SearchIcon } from "../icons/icons";

export default function Header() {
  const { authUser } = useAuth();
  return (
    <div className="rounded-tr-lg bg-gray-100">
      <div className="flex gap-3">
        <div className="form-control flex-grow justify-center items-center flex-row gap-1">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-20 md:w-max bg-white h-9 rounded-full"
          />
          <div role="button">
            <SearchIcon />
          </div>
        </div>
        <div className="dropdown dropdown-end text-end flex">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div>
              <Avatar src={authUser?.profileImage} />
            </div>
          </div>
          <small className="flex items-center p-1 bg-white rounded-lg m-2 text-orange-500 font-medium">{`${authUser?.firstName}`}</small>
          <ul
            tabIndex={0}
            className="mt-12 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-lg w-52 bg-white text-black"
          >
            <li>
              <a className="justify-between" href="/profile">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
