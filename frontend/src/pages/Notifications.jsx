import Navbar from "../components/Navbar";

function Notifications() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Notifications
        </h1>

        <p className="text-slate-500 mt-3 text-xl">
          Stay updated with your trips.
        </p>

        <div className="space-y-6 mt-12">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold">
              Flight Reminder
            </h2>

            <p className="text-slate-500 mt-3 text-lg">
              Your Goa flight departs tomorrow at 8:00 AM.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold">
              Budget Alert
            </h2>

            <p className="text-slate-500 mt-3 text-lg">
              You already used 70% of your budget.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold">
              Weather Update
            </h2>

            <p className="text-slate-500 mt-3 text-lg">
              Rain expected during your Kerala trip.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Notifications;