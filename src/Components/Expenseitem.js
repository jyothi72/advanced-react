import React,{ useState }from 'react'
import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './Expenseitem.css'

const ExpenseItem=(props)=> {
  
  const [title, setTitle]=useState(props.title)
 const changed=()=>{
  setTitle('updated')
  console.log(title)
}
const[amount,newamount]=useState(props.amount)
const changeamount=()=>{
  newamount('100')
}

 return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2 className='expense-item h2'>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={changeamount}>changamount</button>
      <button onClick={changed}>changetitle</button>
     
    </Card>
  );
}
export default ExpenseItem;
