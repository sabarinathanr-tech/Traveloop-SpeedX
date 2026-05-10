import Navbar from "../components/Navbar";

function Settings() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-4xl mx-auto p-10">

        <h1 className="text-5xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Manage your preferences and account.
        </p>

        <div className="bg-white rounded-3xl shadow-md p-10 mt-10 space-y-8">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">
                Dark Mode
              </h2>

              <p className="text-slate-500 mt-2">
                Enable dark theme interface
              </p>

            </div>

            <input type="checkbox" className="w-6 h-6" />

          </div>

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">
                Notifications
              </h2>

              <p className="text-slate-500 mt-2">
                Receive travel alerts and reminders
              </p>

            </div>

            <input type="checkbox" className="w-6 h-6" defaultChecked />

          </div>

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">
                Public Trips
              </h2>

              <p className="text-slate-500 mt-2">
                Share trips with other travelers
              </p>

            </div>

            <input type="checkbox" className="w-6 h-6" />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;