// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Expense from './components/expense/NewExpense';
import NewExpense from './components/newExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense){
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>Lets get started</h2> */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items ={expenses} ></Expense>
    </div>
  );
}

export default App;
