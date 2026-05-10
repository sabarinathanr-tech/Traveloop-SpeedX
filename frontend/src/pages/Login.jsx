import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem(
          "traveloopUser",
          JSON.stringify(data.user)
        );

        alert("Login successful");

        navigate("/dashboard");

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Login failed");

    }
  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-slate-900">
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mt-3 mb-8">
          Login to continue
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

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
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none"
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
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 outline-none"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-slate-950 text-white py-4 rounded-2xl text-lg font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-600 mt-8">

          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="font-semibold text-slate-900"
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;