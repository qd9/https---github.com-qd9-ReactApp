import React, {useState} from "react";
//import NewExpense from "./NewExpense";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });

    const titleChangeHandler = (event)=> {
        //console.log(event);
        //setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        //use React default function to 100% it will be the latest state.
        // should pass a function on prevState!!
        console.log(event.target.value + 'title');
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle:event.target.value
            }
        });
        
    };

    const amountChangeHandler = event =>{
        //console.log(event.target.value);
        //setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount:event.target.value
            }
        })
    };

    const dateChangeHandler = event => {
        //console.log(event.target.value);
        //setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate:event.target.value
            }
        })
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title:userInput.enteredTitle,
            amount:userInput.enteredAmount,
            date:new Date(userInput.enteredDate)
        }
        console.log(expenseData + 'form');
        props.onSaveExpenseData(expenseData);
        setUserInput(()=>{
            return{
                enteredTitle:'',
                enteredAmount:'',
                enteredDate:''
            }
        })
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value = {userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={userInput.enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;