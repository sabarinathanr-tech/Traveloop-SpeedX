import { useState } from "react";
import Navbar from "../components/Navbar";

function Budget() {

  const [trips, setTrips] = useState([
    {
      name: "Goa Escape",
      budget: 50000,
      spent: 20500,
    },
    {
      name: "Bangalore Weekend",
      budget: 25000,
      spent: 12000,
    },
    {
      name: "Kerala Ride",
      budget: 40000,
      spent: 18500,
    },
  ]);

  const [selectedTrip, setSelectedTrip] = useState(0);

  const [expense, setExpense] = useState("");

  const currentTrip = trips[selectedTrip];

  const remaining =
    currentTrip.budget - currentTrip.spent;

  const addExpense = () => {

    if (!expense) return;

    const updatedTrips = [...trips];

    updatedTrips[selectedTrip].spent += Number(expense);

    setTrips(updatedTrips);

    setExpense("");
  };

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold">
              Budget Planner
            </h1>

            <p className="text-slate-500 mt-3 text-xl">
              Manage trip-wise expenses.
            </p>

          </div>

          <select
            value={selectedTrip}
            onChange={(e) =>
              setSelectedTrip(Number(e.target.value))
            }
            className="p-4 rounded-2xl border border-slate-300"
          >

            {trips.map((trip, index) => (

              <option
                key={index}
                value={index}
              >
                {trip.name}
              </option>

            ))}

          </select>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <p className="text-slate-500 text-xl mb-3">
              Total Budget
            </p>

            <h2 className="text-5xl font-bold">
              ₹{currentTrip.budget}
            </h2>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <p className="text-slate-500 text-xl mb-3">
              Total Spent
            </p>

            <h2 className="text-5xl font-bold text-red-500">
              ₹{currentTrip.spent}
            </h2>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <p className="text-slate-500 text-xl mb-3">
              Remaining
            </p>

            <h2 className="text-5xl font-bold text-green-600">
              ₹{remaining}
            </h2>

          </div>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold mb-6">
            Add Expense
          </h2>

          <div className="flex gap-4">

            <input
              type="number"
              placeholder="Expense amount"
              value={expense}
              onChange={(e) =>
                setExpense(e.target.value)
              }
              className="flex-1 p-4 rounded-2xl border border-slate-300"
            />

            <button
              onClick={addExpense}
              className="bg-slate-950 text-white px-8 rounded-2xl"
            >
              Add
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Budget;