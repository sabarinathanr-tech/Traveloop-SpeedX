import Navbar from "../components/Navbar";

function Budget() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Budget Planner
        </h1>

        <p className="text-slate-500 mt-3 text-xl">
          Track your expenses and savings.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-3xl shadow-md p-10">

            <h2 className="text-2xl text-slate-500">
              Total Budget
            </h2>

            <p className="text-6xl font-bold mt-6">
              ₹48K
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-10">

            <h2 className="text-2xl text-slate-500">
              Spent
            </h2>

            <p className="text-6xl font-bold mt-6">
              ₹31K
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-10">

            <h2 className="text-2xl text-slate-500">
              Remaining
            </h2>

            <p className="text-6xl font-bold mt-6">
              ₹17K
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Budget;