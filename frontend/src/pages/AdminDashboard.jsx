import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Admin Dashboard
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Monitor users, trips, and analytics.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-xl text-slate-500">
              Total Users
            </h2>

            <p className="text-6xl font-bold mt-6">
              2.4K
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-xl text-slate-500">
              Total Trips
            </h2>

            <p className="text-6xl font-bold mt-6">
              12K
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-xl text-slate-500">
              Revenue
            </h2>

            <p className="text-6xl font-bold mt-6">
              ₹8L
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-xl text-slate-500">
              Active Users
            </h2>

            <p className="text-6xl font-bold mt-6">
              1.1K
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;