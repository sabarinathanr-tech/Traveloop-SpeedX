import { useState } from "react";
import Navbar from "../components/Navbar";

function CitySearch() {

  const [search, setSearch] = useState("");

  const cities = [

    {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      link:
        "https://www.goatourism.gov.in",
    },

    {
      name: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
      link:
        "https://www.karnatakatourism.org",
    },

    {
      name: "Kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      link:
        "https://www.keralatourism.org",
    },

    {
      name: "Chennai",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445",
      link:
        "https://www.tamilnadutourism.tn.gov.in",
    },

    {
      name: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7",
      link:
        "https://maharashtratourism.gov.in",
    },

    {
      name: "Delhi",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      link:
        "https://www.incredibleindia.org",
    },

    {
      name: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
      link:
        "https://tourism.telangana.gov.in",
    },

    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      link:
        "https://www.visitdubai.com",
    },

    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      link:
        "https://parisjetaime.com/eng",
    },

    {
      name: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      link:
        "https://www.gotokyo.org/en",
    },

    {
      name: "Singapore",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
      link:
        "https://www.visitsingapore.com",
    },

    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      link:
        "https://visitlondon.com",
    },

  ];

  const filteredCities = cities.filter((city) =>
    city.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const dynamicCity =
    search &&
    !cities.some(
      (city) =>
        city.name.toLowerCase() ===
        search.toLowerCase()
    )
      ? {
          name: search,
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          link: `https://www.tripadvisor.com/Search?q=${search}`,
        }
      : null;

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-6xl font-bold mb-8">
          Discover Cities
        </h1>

        <input
          type="text"
          placeholder="Search any city..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-5 rounded-3xl border border-slate-300 text-xl mb-10"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {filteredCities.map((city, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >

              <img
                src={city.image}
                alt={city.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-4xl font-bold">
                  {city.name}
                </h2>

                <p className="text-slate-500 text-xl mt-4">
                  Explore attractions, food,
                  culture and tourism spots.
                </p>

                <button
                  onClick={() =>
                    window.open(
                      city.link,
                      "_blank"
                    )
                  }
                  className="mt-6 bg-slate-950 text-white px-6 py-3 rounded-2xl text-lg"
                >
                  Explore City
                </button>

              </div>

            </div>

          ))}

          {dynamicCity && (

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

              <img
                src={dynamicCity.image}
                alt={dynamicCity.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-4xl font-bold">
                  {dynamicCity.name}
                </h2>

                <p className="text-slate-500 text-xl mt-4">
                  Explore tourism details and
                  attractions.
                </p>

                <button
                  onClick={() =>
                    window.open(
                      dynamicCity.link,
                      "_blank"
                    )
                  }
                  className="mt-6 bg-slate-950 text-white px-6 py-3 rounded-2xl text-lg"
                >
                  Explore City
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default CitySearch;