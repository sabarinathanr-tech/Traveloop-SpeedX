import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function MyTrips() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              My Trips
            </h1>

            <p className="text-slate-500 mt-2">
              Manage all your travel plans.
            </p>

          </div>

          <Link to="/create-trip">
            <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl">
              + New Trip
            </button>
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* GOA */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-3xl font-bold">
              Goa Escape
            </h2>

            <p className="text-slate-500 mt-4">
              12 May - 18 May
            </p>

            <p className="text-4xl font-bold mt-6">
              ₹18,000
            </p>

            <Link to="/goa-trip">
              <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8">
                Open Trip
              </button>
            </Link>

          </div>

          {/* BANGALORE */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-3xl font-bold">
              Bangalore Weekend
            </h2>

            <p className="text-slate-500 mt-4">
              22 May - 25 May
            </p>

            <p className="text-4xl font-bold mt-6">
              ₹8,500
            </p>

            <Link to="/bangalore-trip">
              <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8">
                Open Trip
              </button>
            </Link>

          </div>

          {/* KERALA */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-3xl font-bold">
              Kerala Ride
            </h2>

            <p className="text-slate-500 mt-4">
              1 June - 7 June
            </p>

            <p className="text-4xl font-bold mt-6">
              ₹22,000
            </p>

            <Link to="/kerala-trip">
              <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8">
                Open Trip
              </button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyTrips;