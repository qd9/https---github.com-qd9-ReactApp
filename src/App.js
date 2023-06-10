import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: 'Title 1', amount: '11111', date: new Date() },
    { title: 'Title 2', amount: '111222', date: new Date() },
  ]

  const addExpenseHandler = expense => {
    console.log(expense);
    console.log("App.js");

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
