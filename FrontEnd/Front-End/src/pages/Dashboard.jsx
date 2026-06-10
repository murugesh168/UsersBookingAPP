import { Link } from "react-router-dom";
import Booking from "../components/Booking";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white p-8 m-8 rounded-3xl shadow-lg w-[800px]">

        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-xs text-gray-500 uppercase">
              Operations Overview
            </p>

            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>
          </div>

          <Link
            to="/"
            className="text-blue-600 font-medium"
          >
            Back Home
          </Link>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase mb-2">
            New Entry
          </p>

          <h2 className="text-2xl font-bold mb-6">
            Create Booking
          </h2>

          <Booking />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;