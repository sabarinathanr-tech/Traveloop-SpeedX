import Navbar from "../components/Navbar";

function ActivitySearch() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Explore Activities
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Find experiences and adventures.
        </p>

        <div className="bg-white rounded-3xl shadow-md p-8 mt-10">

          <input
            type="text"
            placeholder="Search activities..."
            className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-lg outline-none"
          />

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200"
              alt="Scuba Diving"
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                Scuba Diving
              </h2>

              <p className="text-slate-500 mt-3 text-lg">
                Goa • Adventure
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200"
              alt="Mountain Trek"
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                Mountain Trek
              </h2>

              <p className="text-slate-500 mt-3 text-lg">
                Manali • Nature
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200"
              alt="Food Tour"
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                Food Tour
              </h2>

              <p className="text-slate-500 mt-3 text-lg">
                Bangalore • Food
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ActivitySearch;