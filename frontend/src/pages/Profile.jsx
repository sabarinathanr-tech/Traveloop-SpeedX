import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-4xl mx-auto p-10">

        <div className="bg-white rounded-3xl shadow-md p-10">

          <div className="flex items-center gap-8">

            <div className="w-28 h-28 rounded-full bg-slate-950"></div>

            <div>

              <h1 className="text-4xl font-bold">
                Sabarinathan
              </h1>

              <p className="text-slate-500 text-xl mt-2">
                AI Travel Explorer
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div>

              <h2 className="text-xl font-semibold text-slate-500">
                Email
              </h2>

              <p className="text-2xl mt-3">
                sabarinathan@gmail.com
              </p>

            </div>

            <div>

              <h2 className="text-xl font-semibold text-slate-500">
                Total Trips
              </h2>

              <p className="text-2xl mt-3">
                12 Trips
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;