import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: 'Title 1', amount: '11111', date: new Date() },
    { title: 'Title 2', amount: '111222', date: new Date() },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <h1>Sample</h1>
      <Expenses items={expenses} />
    </div>

  );
}

export default App;
