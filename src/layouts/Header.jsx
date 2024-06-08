import { SearchIcon } from "../icons/icons";

export default function Header() {
  return (
    <div className="rounded-tr-lg p-2.5 bg-gray-100">
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
        <div className="dropdown dropdown-end text-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="-mt-0 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-lg w-52 bg-white text-black"
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
