import Navbar from "../components/Navbar";

function ItineraryBuilder() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold text-slate-900">
              Itinerary Builder
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              Plan and organize your stops.
            </p>

          </div>

          <button className="bg-slate-950 text-white px-8 py-4 rounded-2xl text-lg">
            + Add Stop
          </button>

        </div>

        <div className="space-y-8 mt-12">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Stop 1
            </h2>

            <p className="text-slate-500 mt-2">
              Goa
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <input
                type="text"
                value="Goa"
                readOnly
                className="border border-slate-300 rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                value="12 May - 15 May"
                readOnly
                className="border border-slate-300 rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                value="Beach Tour"
                readOnly
                className="border border-slate-300 rounded-2xl px-5 py-4"
              />

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Stop 2
            </h2>

            <p className="text-slate-500 mt-2">
              Bangalore
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <input
                type="text"
                value="Bangalore"
                readOnly
                className="border border-slate-300 rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                value="16 May - 18 May"
                readOnly
                className="border border-slate-300 rounded-2xl px-5 py-4"
              />

              <input
                type="text"
                value="Food Hunting"
                readOnly
                className="border border-slate-300 rounded-2xl px-5 py-4"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ItineraryBuilder;