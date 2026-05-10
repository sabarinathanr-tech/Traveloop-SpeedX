import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-6xl font-bold text-slate-900">
              Welcome Back 👋
            </h1>

            <p className="text-slate-500 mt-4 text-2xl">
              Organize and manage your journeys.
            </p>

          </div>

          <Link
            to="/create-trip"
            className="bg-slate-950 text-white px-10 py-5 rounded-3xl text-2xl font-semibold"
          >
            + Create Trip
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-14">

          <div className="bg-white rounded-3xl shadow-md p-10">

            <h2 className="text-slate-500 text-2xl">
              Total Trips
            </h2>

            <p className="text-7xl font-bold mt-8">
              12
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-10">

            <h2 className="text-slate-500 text-2xl">
              Upcoming Trips
            </h2>

            <p className="text-7xl font-bold mt-8">
              4
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-10">

            <h2 className="text-slate-500 text-2xl">
              Total Budget
            </h2>

            <p className="text-7xl font-bold mt-8">
              ₹48K
            </p>

          </div>

        </div>

        <div className="flex justify-between items-center mt-16">

          <h2 className="text-5xl font-bold">
            Recent Trips
          </h2>

          <Link
            to="/trips"
            className="text-2xl font-semibold text-slate-700"
          >
            View All
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-4xl font-bold">
              Goa Escape
            </h2>

            <p className="text-slate-500 mt-6 text-2xl">
              12 May - 18 May
            </p>

            <p className="text-4xl font-bold mt-8">
              ₹18,000
            </p>

            <Link
              to="/itinerary"
              className="inline-block bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8"
            >
              Open
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-4xl font-bold">
              Bangalore Weekend
            </h2>

            <p className="text-slate-500 mt-6 text-2xl">
              22 May - 25 May
            </p>

            <p className="text-4xl font-bold mt-8">
              ₹8,500
            </p>

            <Link
              to="/itinerary"
              className="inline-block bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8"
            >
              Open
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-4xl font-bold">
              Kerala Ride
            </h2>

            <p className="text-slate-500 mt-6 text-2xl">
              1 June - 7 June
            </p>

            <p className="text-4xl font-bold mt-8">
              ₹22,000
            </p>

            <Link
              to="/itinerary"
              className="inline-block bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8"
            >
              Open
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;