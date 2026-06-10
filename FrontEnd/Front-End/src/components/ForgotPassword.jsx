import { useState } from "react";
import api from "../api/axiosConfig";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/api/auth/forgot-password",
        { email }
      );

      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(
        err.response?.data?.error ||
        "Something went wrong"
      );
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-2">
          Forgot Password
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Enter your registered email address
        </p>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          {message && (
            <p className="text-green-600 text-center">
              {message}
            </p>
          )}

          {error && (
            <p className="text-red-600 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>

          <div className="text-center">
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </form>

      </div>
    </div>
  );
}

export default ForgotPassword;