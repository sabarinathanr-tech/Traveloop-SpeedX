import Navbar from "../components/Navbar";

function ItineraryView() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold text-slate-900">
              Goa Escape
            </h1>

            <p className="text-slate-500 mt-3 text-lg">
              AI generated smart itinerary for your trip
            </p>

          </div>

          <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl">
            Export PDF
          </button>

        </div>

        {/* DAY 1 */}

        <div className="bg-white rounded-3xl shadow-md p-8 mt-10">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-3xl font-bold text-slate-900">
                Day 1
              </h2>

              <p className="text-slate-500 mt-2">
                Arrival & Relaxation
              </p>

            </div>

            <span className="bg-slate-100 px-5 py-2 rounded-full text-sm">
              Active
            </span>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">✈️</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Arrive at Goa Airport
                </h3>

                <p className="text-slate-500">
                  9:00 AM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">🏨</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Hotel Check-in
                </h3>

                <p className="text-slate-500">
                  Baga Beach Resort
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">🏖️</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Evening Beach Walk
                </h3>

                <p className="text-slate-500">
                  Relax at Baga Beach
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* DAY 2 */}

        <div className="bg-white rounded-3xl shadow-md p-8 mt-8">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-3xl font-bold text-slate-900">
                Day 2
              </h2>

              <p className="text-slate-500 mt-2">
                Adventure Activities
              </p>

            </div>

            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm">
              Upcoming
            </span>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">🚤</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Water Sports
                </h3>

                <p className="text-slate-500">
                  Jet ski & Parasailing
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">🍛</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Seafood Lunch
                </h3>

                <p className="text-slate-500">
                  Beachside restaurant
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">🌅</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Sunset Point Visit
                </h3>

                <p className="text-slate-500">
                  Chapora Fort
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* DAY 3 */}

        <div className="bg-white rounded-3xl shadow-md p-8 mt-8 mb-10">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-3xl font-bold text-slate-900">
                Day 3
              </h2>

              <p className="text-slate-500 mt-2">
                Shopping & Departure
              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm">
              Planned
            </span>

          </div>

          <div className="mt-8 space-y-5">

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">🛍️</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Local Market Shopping
                </h3>

                <p className="text-slate-500">
                  Buy souvenirs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">☕</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Cafe Visit
                </h3>

                <p className="text-slate-500">
                  Breakfast before departure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl">
              <div className="text-2xl">🛫</div>

              <div>
                <h3 className="font-semibold text-lg">
                  Return Journey
                </h3>

                <p className="text-slate-500">
                  Flight at 6:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ItineraryView;