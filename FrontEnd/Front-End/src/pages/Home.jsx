import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">

  <div className="bg-white p-12 rounded-3xl shadow-xl text-center w-[700px]">

    <h1 className="text-5xl font-bold text-gray-800 mb-5">
      Front Desk Management System
    </h1>

    <p className="text-gray-600 text-lg mb-8">
      Manage appointments, bookings and customer information efficiently.
    </p>

    <div className="flex justify-center gap-5">

      <Link
        to="/login"
        className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700"
      >
        Register
      </Link>

    </div>

  </div>

</div>
  );
}

export default Home;