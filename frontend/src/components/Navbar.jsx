import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-slate-950 text-white px-10 py-6 flex items-center justify-between shadow-lg">

      <Link
        to="/dashboard"
        className="text-5xl font-bold"
      >
        Traveloop
      </Link>

      <div className="flex items-center gap-8 text-lg font-semibold">

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/trips">Trips</Link>

        <Link to="/budget">Budget</Link>

        <Link to="/cities">Cities</Link>

        <Link to="/notifications">Notifications</Link>

        <Link to="/profile">Profile</Link>

      </div>

    </nav>
  );
}

export default Navbar;