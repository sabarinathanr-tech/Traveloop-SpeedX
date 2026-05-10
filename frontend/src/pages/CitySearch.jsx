import Navbar from "../components/Navbar";

function CitySearch() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Explore Cities
        </h1>

        <p className="text-slate-500 mt-3 text-xl">
          Search destinations and attractions.
        </p>

        <div className="bg-white rounded-3xl shadow-md p-8 mt-10">

          <input
            type="text"
            placeholder="Search cities..."
            className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-lg outline-none"
          />

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200"
              alt="Goa"
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                Goa
              </h2>

              <p className="text-slate-500 mt-3 text-lg">
                Beaches • Cafes • Nightlife
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200"
              alt="Bangalore"
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                Bangalore
              </h2>

              <p className="text-slate-500 mt-3 text-lg">
                Tech • Food • Parks
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-md overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200"
              alt="Kerala"
              className="h-52 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold">
                Kerala
              </h2>

              <p className="text-slate-500 mt-3 text-lg">
                Nature • Hills • Backwaters
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CitySearch;