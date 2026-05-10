import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CreateTrip() {

  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    title: "",
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelers: "1 Person",
    interests: "",
    days: 3,
  });

  const handleChange = (e) => {

    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const start =
      new Date(trip.startDate);

    const end =
      new Date(trip.endDate);

    const diff =
      Math.ceil(
        (end - start) /
        (1000 * 60 * 60 * 24)
      ) + 1;

    const finalTrip = {
      ...trip,
      days: diff > 0 ? diff : 1,
      id: Date.now(),
    };

    localStorage.setItem(
      "currentTrip",
      JSON.stringify(finalTrip)
    );

    const existingTrips =
      JSON.parse(localStorage.getItem("trips")) || [];

    existingTrips.push(finalTrip);

    localStorage.setItem(
      "trips",
      JSON.stringify(existingTrips)
    );

    navigate("/itinerary");

  };

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto p-10">

        <h1 className="text-6xl font-bold text-slate-900">
          Create Your Trip
        </h1>

        <p className="text-slate-500 text-2xl mt-3 mb-10">
          Plan smarter journeys with AI itinerary generation.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-10"
        >

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="text-2xl font-semibold">
                Trip Name
              </label>

              <input
                type="text"
                name="title"
                placeholder="Summer Vacation"
                className="w-full mt-4 border border-slate-300 rounded-3xl p-6 text-xl"
                onChange={handleChange}
                required
              />

            </div>

            <div>

              <label className="text-2xl font-semibold">
                Destination
              </label>

              <input
                type="text"
                name="destination"
                placeholder="Goa"
                className="w-full mt-4 border border-slate-300 rounded-3xl p-6 text-xl"
                onChange={handleChange}
                required
              />

            </div>

            <div>

              <label className="text-2xl font-semibold">
                Start Date
              </label>

              <input
                type="date"
                name="startDate"
                className="w-full mt-4 border border-slate-300 rounded-3xl p-6 text-xl"
                onChange={handleChange}
                required
              />

            </div>

            <div>

              <label className="text-2xl font-semibold">
                End Date
              </label>

              <input
                type="date"
                name="endDate"
                className="w-full mt-4 border border-slate-300 rounded-3xl p-6 text-xl"
                onChange={handleChange}
                required
              />

            </div>

            <div>

              <label className="text-2xl font-semibold">
                Budget
              </label>

              <input
                type="number"
                name="budget"
                placeholder="25000"
                className="w-full mt-4 border border-slate-300 rounded-3xl p-6 text-xl"
                onChange={handleChange}
                required
              />

            </div>

            <div>

              <label className="text-2xl font-semibold">
                Travelers
              </label>

              <select
                name="travelers"
                className="w-full mt-4 border border-slate-300 rounded-3xl p-6 text-xl"
                onChange={handleChange}
              >

                <option>1 Person</option>
                <option>2 People</option>
                <option>Family</option>
                <option>Friends Group</option>

              </select>

            </div>

          </div>

          <div className="mt-8">

            <label className="text-2xl font-semibold">
              Interests
            </label>

            <textarea
              name="interests"
              placeholder="Beach, Food, Adventure..."
              rows="4"
              className="w-full mt-4 border border-slate-300 rounded-3xl p-6 text-xl"
              onChange={handleChange}
            />

          </div>

          <button
            type="submit"
            className="w-full mt-10 bg-slate-950 text-white py-6 rounded-3xl text-2xl font-bold hover:bg-slate-800"
          >
            Generate AI Itinerary
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateTrip;