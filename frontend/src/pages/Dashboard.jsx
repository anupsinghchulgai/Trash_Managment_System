import Sidebar from "../components/Sidebar";
import ProfileMenu from "../components/ProfileManue";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 min-h-screen">

        {/* Top Section */}
        <div className="flex justify-end p-6">
          <ProfileMenu />
        </div>

        {/* Dashboard Content */}
        <div className="px-8 pb-8">

          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to EcoEarn 👋
            </h1>

            <p className="mt-2 text-gray-500">
              Manage your recycling activities and rewards.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Recycled */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500 text-sm">
                Total Recycled
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                24.5 kg
              </h2>

              <p className="text-green-600 text-sm mt-2">
                +12% this month
              </p>
            </div>

            {/* Rewards */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500 text-sm">
                Total Rewards
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                1,250
              </h2>

              <p className="text-green-600 text-sm mt-2">
                Eco points
              </p>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-500 text-sm">
                Activities
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                18
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Completed activities
              </p>
            </div>

          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-sm mt-8 p-6">

            <h2 className="text-xl font-semibold text-gray-800">
              Recent Activity
            </h2>

            <div className="mt-5 space-y-4">

              <div className="flex justify-between border-b pb-4">
                <div>
                  <p className="font-medium text-gray-700">
                    Plastic Recycling
                  </p>

                  <p className="text-sm text-gray-500">
                    5 kg recycled
                  </p>
                </div>

                <span className="text-green-600 font-medium">
                  +250 points
                </span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <div>
                  <p className="font-medium text-gray-700">
                    Paper Recycling
                  </p>

                  <p className="text-sm text-gray-500">
                    3 kg recycled
                  </p>
                </div>

                <span className="text-green-600 font-medium">
                  +150 points
                </span>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-gray-700">
                    E-Waste Recycling
                  </p>

                  <p className="text-sm text-gray-500">
                    2 kg recycled
                  </p>
                </div>

                <span className="text-green-600 font-medium">
                  +100 points
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;
