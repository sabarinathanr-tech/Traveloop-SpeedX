import { useState } from "react";
import Navbar from "../components/Navbar";

function Profile() {

  const [name, setName] = useState("Sabarinathan");

  const [email, setEmail] = useState(
    "sabarinathanr.tech@gmail.com"
  );

  const [bio, setBio] = useState(
    "AI Travel Explorer"
  );

  const updateProfile = () => {

    alert("Profile updated successfully");
  };

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <div className="flex items-center gap-8 mb-10">

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>

              <label className="block text-xl font-semibold mb-3">
                Full Name
              </label>

              <input
                type="text"
                value={name}
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
              onChange={(e) =>
                setBio(e.target.value)
              }
              className="w-full p-4 rounded-2xl border border-slate-300"
            />

          </div>

          <button
            onClick={updateProfile}
            className="mt-10 bg-slate-950 text-white px-10 py-4 rounded-2xl"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;