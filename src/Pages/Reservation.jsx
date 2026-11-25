import { useState } from "react";

function Reservation() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("✅ Reservation Successful!");
  };

  return (
    <div>
      <h2>📅 Table Reservation</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          required
        />

        <br /><br />

        <input
          type="date"
          required
        />

        <br /><br />

        <input
          type="time"
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Number of Guests"
          required
        />

        <br /><br />

        <select>
          <option>Regular Dining</option>
          <option>Birthday Party</option>
          <option>Corporate Event</option>
        </select>

        <br /><br />

        <button type="submit">
          Reserve Table
        </button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default Reservation;