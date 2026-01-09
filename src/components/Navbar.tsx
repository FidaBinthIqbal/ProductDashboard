import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const logout = useStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">Product Dashboard</h1>
      <button onClick={handleLogout} className="bg-white text-blue-500 px-3 py-1 rounded">
        Logout
      </button>
    </nav>
  );
}