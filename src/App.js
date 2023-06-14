import React , { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import data from "./data.json"

const DUMMY_EXPENSES = [
  { title: "Title 1", amount: "11111", date: new Date(2020, 1, 1) },
  { title: "Title 2", amount: "11112", date: new Date(2021, 6, 1) },
  { title: "Title 3", amount: "11113", date: new Date(2022, 5, 1) },
  { title: "Title 4", amount: "11114", date: new Date(2022, 2, 1) },
  { title: "Title 5", amount: "11115", date: new Date(2021, 3, 1) },
  { title: "Title 6", amount: "11116", date: new Date(2020, 4, 1) }
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
    //console.log(expenses + 'APP.js');
  };
  

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />

    </div>

  );
}

export default App;
