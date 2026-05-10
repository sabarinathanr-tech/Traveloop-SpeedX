import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MyTrips from "./pages/MyTrips";
import Budget from "./pages/Budget";
import CitySearch from "./pages/CitySearch";
import Notifications from "./pages/Notifications";
import CreateTrip from "./pages/CreateTrip";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import ItineraryView from "./pages/ItineraryView";
import Profile from "./pages/Profile";
import Checklist from "./pages/Checklist";
import Notes from "./pages/Notes";
import ActivitySearch from "./pages/ActivitySearch";
import PublicTrip from "./pages/PublicTrip";
import Recommendations from "./pages/Recommendations";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/AdminDashboard";
import GoaTrip from "./pages/GoaTrip";
import BangaloreTrip from "./pages/BangaloreTrip";
import KeralaTrip from "./pages/KeralaTrip";
import ForgotPassword from "./pages/ForgotPassword";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/trips" element={<MyTrips />} />

      <Route path="/budget" element={<Budget />} />

      <Route path="/cities" element={<CitySearch />} />

      <Route path="/notifications" element={<Notifications />} />

      <Route path="/create-trip" element={<CreateTrip />} />

      <Route path="/itinerary-builder" element={<ItineraryBuilder />} />

      <Route path="/itinerary" element={<ItineraryView />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/checklist" element={<Checklist />} />

      <Route path="/notes" element={<Notes />} />

      <Route path="/activities" element={<ActivitySearch />} />

      <Route path="/public-trips" element={<PublicTrip />} />

      <Route path="/recommendations" element={<Recommendations />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="/goa-trip" element={<GoaTrip />} />

      <Route path="/bangalore-trip" element={<BangaloreTrip />} />

      <Route path="/kerala-trip" element={<KeralaTrip />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

    </Routes>
  );
}

export default App;