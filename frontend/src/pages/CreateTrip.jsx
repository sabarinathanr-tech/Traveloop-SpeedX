import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function CreateTrip() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/itinerary");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10 max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-slate-900">
          Create Your Trip
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Plan smarter journeys with AI itinerary generation.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-md p-10 mt-10 space-y-8"
        >

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="font-semibold text-lg">
                Trip Name
              </label>

              <input
                type="text"
                required
                placeholder="Summer Vacation"
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-3 outline-none"
              />

            </div>

            <div>

              <label className="font-semibold text-lg">
                Destination
              </label>

              <input
                type="text"
                required
                placeholder="Goa"
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-3 outline-none"
              />

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="font-semibold text-lg">
                Start Date
              </label>

              <input
                type="date"
                required
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-3 outline-none"
              />

            </div>

            <div>

              <label className="font-semibold text-lg">
                End Date
              </label>

              <input
                type="date"
                required
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-3 outline-none"
              />

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="font-semibold text-lg">
                Budget
              </label>

              <input
                type="number"
                placeholder="25000"
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-3 outline-none"
              />

            </div>

            <div>

              <label className="font-semibold text-lg">
                Travelers
              </label>

              <select
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-3 outline-none"
              >
                <option>1 Person</option>
                <option>2 People</option>
                <option>Family</option>
                <option>Friends Group</option>
              </select>

            </div>

          </div>

          <div>

            <label className="font-semibold text-lg">
              Interests
            </label>

            <textarea
              rows="5"
              placeholder="Beaches, Cafes, Adventure..."
              className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-3 outline-none"
            ></textarea>

          </div>

          <button
            type="submit"
            className="bg-slate-950 text-white px-10 py-4 rounded-2xl text-xl"
          >
            Generate Itinerary
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateTrip;