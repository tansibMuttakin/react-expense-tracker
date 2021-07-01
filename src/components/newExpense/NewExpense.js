import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const [isEditing,setIsEditing] = useState(false);

    const startEditingHandler = ()=>{
        setIsEditing(true);
    }
    const endEditingHandler = ()=>{
        setIsEditing(false);
    }

    function saveExpenseHandler(expense) {
        const expenses={
            ...expense,
            id:Math.random().toString()
        };
        props.onAddExpense(expenses);
        // setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} type="button">Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={endEditingHandler} onSaveExpense={saveExpenseHandler}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;