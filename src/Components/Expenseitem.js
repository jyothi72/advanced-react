import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './Expenseitem.css'

const ExpenseItem=(props)=> {
  const change=()=>{
    console.log('clicked')
  }
  const deleted=()=>{
    console.log('deleted')
  }
 
 
  
    return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2 className='expense-item h2'>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={change}>changetitle</button>
      <button onClick={deleted}></button>
    </Card>
  );
}
export default ExpenseItem;
