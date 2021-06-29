// import React from "react";

// import ExpenseItem from "./ExpenseItem";
// import "./ExpensesList.css";
// const ExpensesList = (props) => {
//   if (props.items.length === 0) {
//     return <h2 className="expenses-list__fallback">found no expenses.</h2>;
//   }
//   return (
//     <ul className="expenses-list">
//       {props.items.map((expense) => {
//         <ExpenseItem
//           key={expense.id}
//           date={expense.date}
//           title={expense.title}
//           amount={expense.amount}
//         />;
//       })}
//     </ul>
//   );
// };

// export default ExpensesList;
import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
 
const ExpensesList = (props) => {
    if(props.items.length == 0) {
        return <h2 className="expenses-list__fallback">Found no expenses in {props.filteredYear}</h2>
    }
 
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (   
                <ExpenseItem
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
            ))}
        </ul>
    )
}
 
export default ExpensesList;