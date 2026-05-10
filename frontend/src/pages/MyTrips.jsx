import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function MyTrips() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold text-slate-900">
              My Trips
            </h1>

            <p className="text-slate-500 mt-3 text-xl">
              Manage all your travel plans.
            </p>

          </div>

          <Link
            to="/create-trip"
            className="bg-slate-950 text-white px-8 py-4 rounded-2xl text-xl"
          >
            + New Trip
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Goa Escape
            </h2>

            <p className="text-slate-500 text-xl mt-4">
              12 May - 18 May
            </p>

            <p className="text-4xl font-bold mt-6">
              ₹18,000
            </p>

            <Link
              to="/itinerary"
              className="inline-block mt-8 bg-slate-950 text-white px-5 py-3 rounded-2xl"
            >
              Open Trip
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Bangalore Weekend
            </h2>

            <p className="text-slate-500 text-xl mt-4">
              22 May - 25 May
            </p>

            <p className="text-4xl font-bold mt-6">
              ₹8,500
            </p>

            <Link
              to="/itinerary"
              className="inline-block mt-8 bg-slate-950 text-white px-5 py-3 rounded-2xl"
            >
              Open Trip
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Kerala Ride
            </h2>

            <p className="text-slate-500 text-xl mt-4">
              1 June - 7 June
            </p>

            <p className="text-4xl font-bold mt-6">
              ₹22,000
            </p>

            <Link
              to="/itinerary"
              className="inline-block mt-8 bg-slate-950 text-white px-5 py-3 rounded-2xl"
            >
              Open Trip
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyTrips;