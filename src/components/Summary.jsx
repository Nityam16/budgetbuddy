import React from "react";

export default function Summary({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const now = new Date();
  const thisMonthTotal = expenses
    .filter((e) => {
      const d = new Date(e.date);
      return (
        d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
      );
    })
    .reduce((sum, e) => sum + e.amount, 0);

  const topCategory = (() => {
    if (expenses.length === 0) return "—";
    const totals = {};
    expenses.forEach((e) => {
      totals[e.category] = (totals[e.category] || 0) + e.amount;
    });
    return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
  })();

  return (
    <div className="summary-grid">
      <div className="summary-card">
        <p className="summary-label">Total Spent</p>
        <p className="summary-value">${total.toFixed(2)}</p>
      </div>
      <div className="summary-card">
        <p className="summary-label">This Month</p>
        <p className="summary-value">${thisMonthTotal.toFixed(2)}</p>
      </div>
      <div className="summary-card">
        <p className="summary-label">Top Category</p>
        <p className="summary-value">{topCategory}</p>
      </div>
      <div className="summary-card">
        <p className="summary-label">Transactions</p>
        <p className="summary-value">{expenses.length}</p>
      </div>
    </div>
  );
}