import { useState } from "react";
import Navbar from "../components/Navbar";

function Budget() {

  const trips =
    JSON.parse(localStorage.getItem("trips")) || [];

  const [selectedTrip, setSelectedTrip] =
    useState(0);

  const [expense, setExpense] =
    useState("");

  const [records, setRecords] =
    useState(
      JSON.parse(
        localStorage.getItem("expenses")
      ) || []
    );

  const currentTrip = trips[selectedTrip];

  const addExpense = () => {

    if (!expense) return;

    const newExpense = {
      tripId: currentTrip.id,
      amount: Number(expense),
      date: new Date().toLocaleDateString(),
    };

    const updated = [...records, newExpense];

    setRecords(updated);

    localStorage.setItem(
      "expenses",
      JSON.stringify(updated)
    );

    setExpense("");

  };

  const totalSpent = records
    .filter(
      (item) =>
        item.tripId === currentTrip?.id
    )
    .reduce(
      (acc, item) => acc + item.amount,
      0
    );

  const remaining =
    Number(currentTrip?.budget || 0) -
    totalSpent;

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-6xl font-bold">
              Budget Planner
            </h1>

            <p className="text-slate-500 text-2xl mt-3">
              Track expenses trip-wise.
            </p>

          </div>

          <select
            value={selectedTrip}
            onChange={(e) =>
              setSelectedTrip(Number(e.target.value))
            }
            className="border border-slate-300 p-4 rounded-2xl"
          >

            {trips.map((trip, index) => (

              <option
                key={trip.id}
                value={index}
              >
                {trip.destination}
              </option>

            ))}

          </select>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <p className="text-slate-500 text-2xl">
              Total Budget
            </p>

            <h2 className="text-5xl font-bold mt-4">
              ₹{currentTrip?.budget}
            </h2>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <p className="text-slate-500 text-2xl">
              Total Spent
            </p>

            <h2 className="text-5xl font-bold mt-4 text-red-500">
              ₹{totalSpent}
            </h2>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <p className="text-slate-500 text-2xl">
              Remaining
            </p>

            <h2 className="text-5xl font-bold mt-4 text-green-600">
              ₹{remaining}
            </h2>

          </div>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg mb-10">

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
              className="flex-1 border border-slate-300 p-4 rounded-2xl"
            />

            <button
              onClick={addExpense}
              className="bg-slate-950 text-white px-8 rounded-2xl"
            >
              Add
            </button>

          </div>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold mb-6">
            Expense Records
          </h2>

          <div className="space-y-4">

            {records
              .filter(
                (item) =>
                  item.tripId === currentTrip?.id
              )
              .map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between border-b pb-4"
                >

                  <p className="text-xl">
                    Expense
                  </p>

                  <div className="text-right">

                    <p className="font-bold text-xl">
                      ₹{item.amount}
                    </p>

                    <p className="text-slate-500">
                      {item.date}
                    </p>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Budget;