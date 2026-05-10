import Navbar from "../components/Navbar";

function Notes() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-5xl mx-auto p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Travel Notes
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Save important reminders and plans.
        </p>

        <div className="bg-white rounded-3xl shadow-md p-10 mt-10">

          <textarea
            rows="12"
            placeholder="Write your travel notes..."
            className="w-full border border-slate-300 rounded-3xl p-6 text-lg outline-none resize-none"
          ></textarea>

          <button className="bg-slate-950 text-white px-8 py-4 rounded-2xl mt-8 text-lg">
            Save Notes
          </button>

        </div>

      </div>

    </div>
  );
}

export default Notes;