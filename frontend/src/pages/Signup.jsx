import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Signup successful");

        navigate("/login");

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Signup failed");

    }
  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-slate-900">
          Create Account
        </h1>

        <p className="text-center text-slate-500 mt-3 mb-8">
          Join Traveloop today
        </p>

        <form
          onSubmit={handleSignup}
          className="space-y-6"
        >

          <div>

            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-slate-800"
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-slate-800"
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-slate-800"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-slate-950 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-slate-600 mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-slate-900"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;