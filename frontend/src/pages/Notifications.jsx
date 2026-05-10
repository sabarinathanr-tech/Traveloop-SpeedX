import Navbar from "../components/Navbar";

function Notifications() {

  const notifications = [
    {
      title: "Trip Reminder",
      message: "Your Goa trip starts tomorrow.",
    },
    {
      title: "Budget Alert",
      message: "You spent ₹8500 on flights.",
    },
    {
      title: "Weather Update",
      message: "Heavy rain expected in Kerala.",
    },
  ];

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          Notifications
        </h1>

        <div className="space-y-6">

          {notifications.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >

              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-slate-500 text-lg">
                {item.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Notifications;