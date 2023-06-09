import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    //useState always return an array, first element is the state value and second value is the function.
    //const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('UPDATED!');
    // };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                <h2>{props.title}</h2></div>
                <div className='expense-item__price'>${props.amount}</div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;