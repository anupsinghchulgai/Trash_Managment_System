import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin=()=>{
    navigate("/Dashboard");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">

      <div className="w-96 p-8 rounded-3xl bg-white/20 backdrop-blur-lg shadow-2xl border border-white/30">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Login
        </h1>

        <div className="flex flex-col space-y-5">

          <input
            className="h-14 w-full px-5 rounded-xl bg-white/80 outline-none focus:ring-4 focus:ring-purple-300"
            type="text"
            placeholder="Username"
          />

          <input
            className="h-14 w-full px-5 rounded-xl bg-white/80 outline-none focus:ring-4 focus:ring-purple-300"
            type="password"
            placeholder="Password"
          />

          <button
            onClick={handleLogin}
            className="h-14 w-full rounded-xl text-white font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition duration-300 shadow-lg"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
};

export default Login;