import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import { CATEGORIES } from "../utils/categories";

export default function ExpenseList({
  expenses,
  onDelete,
  filterCategory,
  setFilterCategory,
}) {
  return (
    <div className="expense-list-container">
      <div className="list-header">
        <h2>Expenses ({expenses.length})</h2>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {expenses.length === 0 ? (
        <p className="empty-state">No expenses yet. Add your first one above.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}