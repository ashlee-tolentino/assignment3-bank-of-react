/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState } from "react";

const Debits = ({ debits = [], onAddDebit, balance }) => {
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
    onAddDebit(description.trim(), parsed);
    setDescription("");
    setAmount("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Debits</h2>

      <div style={{ marginTop: 8 }}>
        <strong>Account Balance:</strong> <span style={{ fontSize: "1.25rem" }}>${format(balance)}</span>
      </div>

      <section style={{ marginTop: 20 }}>
        <h3>Add a Debit</h3>
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
            <button type="submit">Add Debit</button>
          </div>
        </form>
      </section>

      <section style={{ marginTop: 20 }}>
        <h3>All Debits</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {debits.length === 0 && <li>No debits showing.</li>}
          {debits.map((d, i) => (
            <li key={i} style={{ borderBottom: "1px solid #ddd", padding: "8px 0" }}>
              <div><strong>{d.description}</strong></div>
              <div>Amount: ${format(d.amount)}</div>
              <div>Date: {String(d.date).slice(0, 10)}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Debits;
