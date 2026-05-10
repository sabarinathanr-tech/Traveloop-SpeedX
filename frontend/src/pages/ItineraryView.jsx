import Navbar from "../components/Navbar";

function ItineraryView() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10 max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-slate-900">
          Goa Escape
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Complete itinerary overview.
        </p>

        <div className="space-y-8 mt-12">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Day 1
            </h2>

            <ul className="mt-5 space-y-4 text-lg text-slate-700">

              <li>• Arrive in Goa</li>
              <li>• Hotel Check-in</li>
              <li>• Beach Walk</li>
              <li>• Dinner at Cafe</li>

            </ul>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Day 2
            </h2>

            <ul className="mt-5 space-y-4 text-lg text-slate-700">

              <li>• Water Sports</li>
              <li>• Fort Visit</li>
              <li>• Shopping</li>
              <li>• Night Party</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ItineraryView;