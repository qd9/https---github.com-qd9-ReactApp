import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";


const Expenses = (props) => {

    const [filteredYear, setFilterYear] = useState(2020);

    const filterChangeHandler =  selectedYear => {
        setFilterYear(selectedYear);
        console.log(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            </Card>
        </div>
    )

}

export default Expenses;