import Navbar from "../components/Navbar";

function Recommendations() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          AI Recommendations
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Smart travel suggestions based on your interests.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Goa Escape
            </h2>

            <p className="text-slate-500 mt-4 text-lg">
              Best for beaches and nightlife.
            </p>

            <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8">
              Explore
            </button>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Kerala Nature
            </h2>

            <p className="text-slate-500 mt-4 text-lg">
              Relaxing backwaters and greenery.
            </p>

            <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8">
              Explore
            </button>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold">
              Manali Adventure
            </h2>

            <p className="text-slate-500 mt-4 text-lg">
              Trekking and mountain activities.
            </p>

            <button className="bg-slate-950 text-white px-6 py-3 rounded-2xl mt-8">
              Explore
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Recommendations;