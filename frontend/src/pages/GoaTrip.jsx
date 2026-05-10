import Navbar from "../components/Navbar";

function GoaTrip() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold">
          Goa Escape
        </h1>

        <p className="text-slate-500 mt-2">
          Beach vacation itinerary
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

          <h2 className="text-2xl font-bold">
            Day 1
          </h2>

          <ul className="mt-4 space-y-3 text-lg">
            <li>✈️ Airport Arrival</li>
            <li>🏨 Hotel Check-in</li>
            <li>🌊 Beach Walk</li>
            <li>🍽️ Dinner</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default GoaTrip;