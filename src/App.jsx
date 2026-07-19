import React, { useState, useEffect, useMemo } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Summary from "./components/Summary.jsx";
import CategoryChart from "./components/categoryChart.jsx";
import { loadExpenses, saveExpenses } from "./utils/storage.js";
import "./App.css";

export default function App() {
  const [expenses, setExpenses] = useState(() => loadExpenses());
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const filteredExpenses = useMemo(() => {
    if (filterCategory === "All") return expenses;
    return expenses.filter((e) => e.category === filterCategory);
  }, [expenses, filterCategory]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 BudgetBuddy</h1>
        <p>Your daily companion for tracking spending and staying on budget.</p>
      </header>

      <main className="app-main">
        <section className="left-column">
          <ExpenseForm onAddExpense={addExpense} />
          <Summary expenses={expenses} />
        </section>

        <section className="right-column">
          <CategoryChart expenses={expenses} />
          <ExpenseList
            expenses={filteredExpenses}
            onDelete={deleteExpense}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />
        </section>
      </main>

      <footer className="app-footer">
      <p>BudgetBuddy · Built with React · Data stored locally in your browser</p>
      </footer>
    </div>
  );
}