import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const { logout, authUser } = useAuth();
  const navigate = useNavigate();
  const handleClicke = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };
  const checkRole = authUser?.role;
  return (
    <div>
      <button onClick={handleClicke}>logout</button>
      <br />
      {checkRole === "ADMIN" ? <button>ADMIN</button> : null}
    </div>
  );
}
