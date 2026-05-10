import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold text-center text-slate-900">
          Create Account
        </h1>

        <p className="text-center text-slate-500 mt-3">
          Join Traveloop today
        </p>

        <form
          onSubmit={handleSignup}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="text-slate-700 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-2 outline-none focus:border-slate-950"
            />

          </div>

          <div>

            <label className="text-slate-700 font-semibold">
              Email Address
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-2 outline-none focus:border-slate-950"
            />

          </div>

          <div>

            <label className="text-slate-700 font-semibold">
              Password
            </label>

            <input
              type="password"
              required
              placeholder="Create password"
              className="w-full border border-slate-300 rounded-2xl px-5 py-4 mt-2 outline-none focus:border-slate-950"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-slate-950 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-slate-600 mt-8">

          Already have an account?

          <Link
            to="/"
            className="font-bold ml-2 text-slate-950"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;