import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import data from "./data.json"

const App = () => {
  const expenses = [
    { title: "Title 1", amount: "11111", date: new Date(2020, 1, 1) },
    { title: "Title 2", amount: "11112", date: new Date(2021, 6, 1) },
    { title: "Title 3", amount: "11113", date: new Date(2022, 5, 1) },
    { title: "Title 4", amount: "11114", date: new Date(2022, 2, 1) },
    { title: "Title 5", amount: "11115", date: new Date(2021, 3, 1) },
    { title: "Title 6", amount: "11116", date: new Date(2020, 4, 1) }
  ];
  //console.log(expenses + "outside");
  const addExpenseHandler = expense => {
    //console.log(expense);
    //console.log("App.js");
  };

  return (
    <div>
      <h2>Let's get started!</h2>ßßß
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />

    </div>

  );
}

export default App;
