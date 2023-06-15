import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [addExpensesFlag, setAddExpensesFlag] = useState(true);

    const saveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        //console.log(expenseData + "NewExpense.js");
        props.onAddExpense(expenseData);
        setAddExpensesFlag(true);
    }

    const onAddHandler = () => {
        setAddExpensesFlag(false);
    }

    const onStopHandler = ()=> {
        setAddExpensesFlag(true);
    }

    return (
      <div className="new-expense">
        {addExpensesFlag? (<button onClick={onAddHandler}> Add New Expense</button>) : (<ExpenseForm onSaveExpenseData = {saveExpenseDateHandler} onCancel = {onStopHandler}></ExpenseForm>)}
      </div>
    )
};

export default NewExpense;