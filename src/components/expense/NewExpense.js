import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import './NewExpense.css';
import ExpensesChart from './ExpensesChart';
function NewExpense(props) {
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString()=== filteredYear;
    });
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                {filteredExpenses.map((expense)=>(
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    >
                    </ExpenseItem>
                ))}
                {!filteredExpenses.length && <h2 style={{color:'white'}}>No Expense Found</h2>}
            </Card>
        </div>
    );
}

export default NewExpense;