import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

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

        navigate("/dashboard");

      } else {

        alert(data.message);

      }

    } catch (error) {

      alert("Login failed");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center mb-3">
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Login to continue
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 rounded-2xl border border-slate-300"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 rounded-2xl border border-slate-300"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-sm text-slate-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          <div className="flex justify-end">

            <Link
              to="/forgot-password"
              className="text-sm text-slate-500"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="w-full bg-slate-950 text-white py-4 rounded-2xl"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-8">

          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="font-semibold"
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;