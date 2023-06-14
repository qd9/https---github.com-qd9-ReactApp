import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        //console.log(expenseData + "NewExpense.js");
        props.onAddExpense(expenseData);
    }


    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler} />
      </div>
    )
};

export default NewExpense;