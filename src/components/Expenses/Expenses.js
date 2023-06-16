//import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    //console.log(props.items + "inside");
    const [filteredYear, setFilterYear] = useState('2020');

    const filterChangeHandler =  selectedYear => {
        setFilterYear(selectedYear);
        console.log(selectedYear);
    };

    const filteredExpenses = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p>No Expense Found! </p>;
    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense, index) => (
    //         <ExpenseItem 
    //             key = {expense.id}
    //             title={expense.title} 
    //             amount={expense.amount} 
    //             date={expense.date}   
    //         />
    //     ))
    // };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
                {/* Key can be any unique ID */}
                {/* {filteredExpenses.length === 0 && <p>No Expense Found! </p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense, index) => (
                        <ExpenseItem 
                            key = {expense.id}
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date}   
                        />
                    ))
                }      */}
                <ExpensesChart expenses = {filteredExpenses} />
                <ExpensesList items = {filteredExpenses} />
            </Card>
        </div>
    )

}

export default Expenses;