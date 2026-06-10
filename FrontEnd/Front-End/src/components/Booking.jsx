import { useState } from "react";
import api from "../api/axiosConfig";

function Booking() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/bookings", {
        customerName,
        customerEmail,
        service,
        date,
      });

      setMessage(response.data.message);

      setCustomerName("");
      setCustomerEmail("");
      setService("");
      setDate("");
    } catch (error) {
      setMessage(
        error.response?.data?.error || "Booking Failed"
      );
    }
  };

  return (
    <form onSubmit={handleBooking} className="space-y-4">

      <div>
        <label className="block text-sm font-medium mb-1">
          Customer Name
        </label>
        <input
          type="text"
          placeholder="Enter customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Customer Email
        </label>
        <input
          type="email"
          placeholder="Enter customer email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Service
        </label>
        <input
          type="text"
          placeholder="Enter service type"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Book Appointment
      </button>

      {message && (
        <p className="text-green-600">{message}</p>
      )}
    </form>
  );
}

export default Booking;