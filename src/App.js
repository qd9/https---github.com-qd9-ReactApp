import React , { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import data from "./data.json"

const DUMMY_EXPENSES = [
  { title: "Title 1", amount: "111111", date: new Date(2020, 1, 1), id: 0 },
  { title: "Title 2", amount: "222222", date: new Date(2021, 6, 1), id: 1 },
  { title: "Title 3", amount: "333333", date: new Date(2022, 5, 1), id: 2 },
  { title: "Title 4", amount: "444444", date: new Date(2022, 2, 1), id: 3 },
  { title: "Title 5", amount: "555555", date: new Date(2021, 3, 1), id: 4 },
  { title: "Title 6", amount: "666666", date: new Date(2020, 4, 1), id: 5 },
  { title: "Title 7", amount: "777777", date: new Date(2023, 4, 1), id: 6 },
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
