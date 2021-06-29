import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  //const [filteredExpenses, setFilteredExpenses] = useState([...props.items]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // setFilteredExpenses([...props.items]);
    // console.log(selectedYear);
    // console.log(filteredExpenses);
    // let filteredArray = filteredExpenses.filter(
    //   (expense) => new Date(expense.date).getFullYear() == selectedYear
    // );
    // console.log(filteredArray);
    // setFilteredExpenses(filteredArray);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ))} */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
