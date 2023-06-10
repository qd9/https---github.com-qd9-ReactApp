import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";


const Expenses = (props) => {
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter></ExpensesFilter>
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            </Card>
        </div>
    )

}

export default Expenses;