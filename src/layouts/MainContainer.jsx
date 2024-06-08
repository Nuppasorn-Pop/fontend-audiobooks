import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBarLeft from "./NavBarLeft";

export default function MainContainer() {
  return (
    <div className="grid grid-rows-2 grid-flow-col p-3.5 bg-gradient-to-tl from-red-500 to-orange-400 min-h-screen max-w-full">
      <div className="row-span-2">
        <NavBarLeft />
      </div>
      <div className="row-span-2 col-span-12">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
