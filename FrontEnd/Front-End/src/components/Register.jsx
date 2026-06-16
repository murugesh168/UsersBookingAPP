import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form className="space-y-5">

          <div>
           <label className="block mb-2 font-medium">
             Username
           </label>

           <input
             type="text"
             placeholder="Enter username"
             className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Register
          </button>

          <div className="text-center">
            <Link to="/login" className="text-blue-600 font-medium">
              Back to Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Register;