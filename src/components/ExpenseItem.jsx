import React from "react";
import { CATEGORY_COLORS } from "../utils/categories";

export default function ExpenseItem({ expense, onDelete }) {
  const color = CATEGORY_COLORS[expense.category] || "#6b7280";

  return (
    <li className="expense-item">
      <span
        className="category-dot"
        style={{ backgroundColor: color }}
        title={expense.category}
      />
      <div className="expense-details">
        <p className="expense-description">{expense.description}</p>
        <p className="expense-meta">
          {expense.category} · {new Date(expense.date).toLocaleDateString()}
        </p>
      </div>
      <span className="expense-amount">${expense.amount.toFixed(2)}</span>
      <button
        className="btn-delete"
        onClick={() => onDelete(expense.id)}
        aria-label={`Delete ${expense.description}`}
      >
        ✕
      </button>
    </li>
  );
}