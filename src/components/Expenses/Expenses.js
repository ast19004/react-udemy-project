import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (

        <Card className='expenses'>
            <ExpensesFilter onChangeFilter = {filterChangeHandler} selected={filteredYear}/>
            {
                props.items.map(item => 
                    <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
                )
            }
        </Card>
    )
}

export default Expenses;