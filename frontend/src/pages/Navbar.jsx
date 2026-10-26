import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-300 h-16 flex justify-between items-center px-6 shadow-md">
      <h1 className="text-2xl font-bold">EcoEarn</h1>

      <div className="flex gap-6">
        <Link to="/home" className="hover:text-white transition">
          Home
        </Link>

        <Link to="/register" className="hover:text-white transition">
          Register
        </Link>

        <Link to="/login" className="hover:text-white transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;