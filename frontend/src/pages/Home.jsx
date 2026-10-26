import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar/>

      <div className="max-w-7xl mx-auto px-8 py-16">
      
        <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-800">
          Welcome to EcoEarn
        </h1>

       
        <h2 className="text-4xl font-bold text-green-700 mt-16 text-center">
          Turn Trash into Rewards
        </h2>

       
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-16">
      
          <div className="md:w-1/2">
            <p className="text-xl leading-9 text-gray-700">
              Join <span className="font-semibold text-green-700">EcoEarn</span>{" "}
              and help create a cleaner and greener India.
              <br />
              <br />
              Upload a photo of yourself disposing of waste responsibly or
              participating in a cleanup drive.
              <br />
              <br />
              Earn reward points for every verified contribution and redeem
              them for shopping discounts, coupons, and exciting rewards.
            </p>

            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://i.pinimg.com/1200x/6c/27/46/6c2746d6c72fbb74a86649a310d1d5e9.jpg"
              alt="EcoEarn"
              className="w-full max-w-md rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;