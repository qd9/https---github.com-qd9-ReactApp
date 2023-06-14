import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";


const Expenses = (props) => {
    console.log(props.items + "inside");
    const [filteredYear, setFilterYear] = useState(2020);

    const filterChangeHandler =  selectedYear => {
        setFilterYear(selectedYear);
        console.log(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
                {props.items.map((expense) => (
                    <ExpenseItem 
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