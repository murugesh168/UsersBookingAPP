import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axiosConfig";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await api.post(
        `/api/auth/reset-password/${token}`,
        { password }
      );

      setMessage(response.data.message);
      setError("");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setError(
        err.response?.data?.error ||
        "Unable to reset password"
      );
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-2">
          Reset Password
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Enter your new password
        </p>

        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium"
            >
              New Password
            </label>

            <input
              id="password"
              type="password"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter new password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 font-medium"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
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
            Reset Password
          </button>
        </form>

      </div>
    </div>
  );
}

export default ResetPassword;