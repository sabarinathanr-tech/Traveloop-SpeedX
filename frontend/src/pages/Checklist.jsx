import Navbar from "../components/Navbar";

function Checklist() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-5xl mx-auto p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Packing Checklist
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Keep track of everything before your journey.
        </p>

        <div className="bg-white rounded-3xl shadow-md p-10 mt-10">

          <div className="space-y-6">

            <label className="flex items-center gap-4 text-xl">

              <input type="checkbox" className="w-5 h-5" />

              Passport & ID

            </label>

            <label className="flex items-center gap-4 text-xl">

              <input type="checkbox" className="w-5 h-5" />

              Clothes & Shoes

            </label>

            <label className="flex items-center gap-4 text-xl">

              <input type="checkbox" className="w-5 h-5" />

              Charger & Power Bank

            </label>

            <label className="flex items-center gap-4 text-xl">

              <input type="checkbox" className="w-5 h-5" />

              Medicines

            </label>

            <label className="flex items-center gap-4 text-xl">

              <input type="checkbox" className="w-5 h-5" />

              Camera & Accessories

            </label>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checklist;