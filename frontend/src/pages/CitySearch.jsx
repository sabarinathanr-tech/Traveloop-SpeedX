import { useState } from "react";
import Navbar from "../components/Navbar";

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Sabarinathan");

  const [email, setEmail] = useState(
    "sabarinathanr.tech@gmail.com"
  );

  const [bio, setBio] = useState(
    "AI Travel Explorer"
  );

  const saveProfile = () => {

    setIsEditing(false);

    alert("Profile updated successfully");
  };

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <div className="flex items-center justify-between mb-10">

            <div className="flex items-center gap-8">

              <div className="h-40 w-40 rounded-full bg-slate-950"></div>

              <div>

                <h1 className="text-5xl font-bold">
                  {name}
                </h1>

                <p className="text-slate-500 text-2xl mt-3">
                  {bio}
                </p>

              </div>

            </div>

            {!isEditing ? (

              <button
                onClick={() => setIsEditing(true)}
                className="bg-slate-950 text-white px-8 py-4 rounded-2xl"
              >
                Edit Profile
              </button>

            ) : (

              <button
                onClick={saveProfile}
                className="bg-green-600 text-white px-8 py-4 rounded-2xl"
              >
                Save
              </button>

            )}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>

              <label className="block text-xl font-semibold mb-3">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                disabled={!isEditing}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full p-4 rounded-2xl border border-slate-300"
              />

            </div>

            <div>

              <label className="block text-xl font-semibold mb-3">
                Email
              </label>

              <input
                type="email"
                value={email}
                disabled={!isEditing}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full p-4 rounded-2xl border border-slate-300"
              />

            </div>

          </div>

          <div className="mt-8">

            <label className="block text-xl font-semibold mb-3">
              Bio
            </label>

            <textarea
              rows="4"
              value={bio}
              disabled={!isEditing}
              onChange={(e) =>
                setBio(e.target.value)
              }
              className="w-full p-4 rounded-2xl border border-slate-300"
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-100 p-6 rounded-2xl">

              <h2 className="text-slate-500 mb-3">
                Trips Completed
              </h2>

              <h3 className="text-4xl font-bold">
                12
              </h3>

            </div>

            <div className="bg-slate-100 p-6 rounded-2xl">

              <h2 className="text-slate-500 mb-3">
                Favorite Destination
              </h2>

              <h3 className="text-2xl font-bold">
                Goa
              </h3>

            </div>

            <div className="bg-slate-100 p-6 rounded-2xl">

              <h2 className="text-slate-500 mb-3">
                Budget Managed
              </h2>

              <h3 className="text-3xl font-bold">
                ₹1.2L
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;