import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-pink-300 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-3xl font-bold text-blue-600">
             FrontDesk
          </h1>

          <div className="space-x-6 font-medium">
            <Link className="hover:text-blue-600 transition" to="/">
              Home
            </Link>

            <Link className="hover:text-blue-600 transition" to="/login">
              Login
            </Link>

            <Link className="hover:text-blue-600 transition" to="/register">
              Register
            </Link>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
