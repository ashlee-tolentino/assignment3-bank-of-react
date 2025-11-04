/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState } from "react";

const Credits = ({ credits = [], onAddCredit, balance }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const format = (n) => Number(n).toFixed(2);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert("Please enter a description.");
      return;
    }
    const parsed = Number(amount);
    if (Number.isNaN(parsed) || parsed === 0) {
      alert("Please enter a valid amount.");
      return;
    }
    onAddCredit(description.trim(), parsed);
    setDescription("");
    setAmount("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Credits</h2>

      <div style={{ marginTop: 8 }}>
        <strong>Account Balance:</strong> <span style={{ fontSize: "1.25rem" }}>${format(balance)}</span>
      </div>

      <section style={{ marginTop: 20 }}>
        <h3>Add a Credit</h3>
        <form onSubmit={handleAdd}>
          <div>
            <label>
              Description: <br />
              <input value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
          </div>
          <div style={{ marginTop: 8 }}>
            <label>
              Amount: <br />
              <input value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
          </div>
          <div style={{ marginTop: 10 }}>
            <button type="submit">Add Credit</button>
          </div>
        </form>
      </section>

      <section style={{ marginTop: 20 }}>
        <h3>All Credits</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {credits.length === 0 && <li>No credits showing.</li>}
          {credits.map((c, i) => (
            <li key={i} style={{ borderBottom: "1px solid #ddd", padding: "8px 0" }}>
              <div><strong>{c.description}</strong></div>
              <div>Amount: ${format(c.amount)}</div>
              <div>Date: {String(c.date).slice(0, 10)}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Credits;
