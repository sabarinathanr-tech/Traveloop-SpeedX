import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950 text-white px-10 py-5 flex justify-between items-center">

      <Link
        to="/dashboard"
        className="text-4xl font-bold"
      >
        Traveloop
      </Link>

      <div className="flex gap-8 text-lg font-semibold">

        <Link to="/dashboard" className="hover:text-slate-300">
          Dashboard
        </Link>

        <Link to="/trips" className="hover:text-slate-300">
          Trips
        </Link>

        <Link to="/budget" className="hover:text-slate-300">
          Budget
        </Link>

        <Link to="/cities" className="hover:text-slate-300">
          Cities
        </Link>

        <Link to="/notifications" className="hover:text-slate-300">
          Notifications
        </Link>

        <Link to="/profile" className="hover:text-slate-300">
          Profile
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;