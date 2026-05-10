import Navbar from "../components/Navbar";

function KeralaTrip() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold">
          Kerala Ride
        </h1>

        <p className="text-slate-500 mt-2">
          Nature and backwaters
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

          <h2 className="text-2xl font-bold">
            Day 1
          </h2>

          <ul className="mt-4 space-y-3 text-lg">
            <li>🚤 Backwater boating</li>
            <li>🌴 Village visit</li>
            <li>🍛 Kerala meals</li>
            <li>🌧️ Rain walk</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default KeralaTrip;