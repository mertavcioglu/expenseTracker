import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2023);
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  const filteredExpeneses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpeneses} />
        <ExpensesList items={filteredExpeneses} />
      </Card>
    </li>
  );
}

export default Expenses;
