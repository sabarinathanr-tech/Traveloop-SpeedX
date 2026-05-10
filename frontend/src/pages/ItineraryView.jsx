import Navbar from "../components/Navbar";

function ItineraryView() {

  const trip =
    JSON.parse(localStorage.getItem("currentTrip"));

  const totalDays =
    Number(trip?.days || 3);

  const interests =
    trip?.interests?.toLowerCase() || "";

  let activities = [];

  if (interests.includes("beach")) {

    activities = [
      "🏖️ Beach exploration",
      "🌅 Sunset photography",
      "🍽️ Seafood dinner",
      "🏄 Water sports",
    ];

  } else if (
    interests.includes("food")
  ) {

    activities = [
      "🍽️ Local food tour",
      "☕ Cafe exploration",
      "🥘 Traditional cuisine",
      "🛍️ Market visit",
    ];

  } else if (
    interests.includes("adventure")
  ) {

    activities = [
      "🚵 Adventure sports",
      "🏕️ Trekking",
      "🚗 Road trip exploration",
      "📸 Nature photography",
    ];

  } else {

    activities = [
      "🌅 Morning sightseeing",
      "🍽️ Try local food",
      "🏖️ Explore attractions",
      "🛍️ Shopping",
    ];

  }

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-6xl mx-auto p-10">

        <h1 className="text-6xl font-bold text-slate-900 mb-3">
          {trip?.destination}
        </h1>

        <p className="text-slate-500 text-2xl mb-10">
          {trip?.days} Days AI Generated Plan
        </p>

        <div className="space-y-8">

          {Array.from({ length: totalDays }).map(
            (_, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >

                <h2 className="text-4xl font-bold mb-6">
                  Day {index + 1}
                </h2>

                <div className="space-y-4">

                  {activities.map((item, i) => (

                    <div
                      key={i}
                      className="bg-slate-100 p-5 rounded-2xl text-xl"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}

export default ItineraryView;