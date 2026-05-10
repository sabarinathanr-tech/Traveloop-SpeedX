function ForgotPassword() {

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold mb-4">
          Forgot Password
        </h1>

        <p className="text-slate-500 mb-8">
          Reset functionality coming soon.
        </p>

        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-4 rounded-2xl border border-slate-300 mb-6"
        />

        <button
          className="w-full bg-slate-950 text-white py-4 rounded-2xl"
        >
          Send Reset Link
        </button>

      </div>

    </div>
  );
}

export default ForgotPassword;