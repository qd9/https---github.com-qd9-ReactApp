import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";


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

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
                {/* Key can be any unique ID */}
                {filteredExpenses.map((expense, index) => (
                    <ExpenseItem 
                        key = {expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                        
                    />
                ))}         
            </Card>
        </div>
    )

}

export default Expenses;