import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBarLeft from "./NavBarLeft";

export default function MainContainer() {
  return (
    <div>
      <Header />
      <NavBarLeft />
      <Outlet />
    </div>
  );
}
