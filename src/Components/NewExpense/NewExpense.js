import React,{useState}from 'react'
import Expenseform from './Expenseform';
import './newExpense.css'

const NewExpense=(props)=>{
  const [edited,isediting]=useState(false)
   const ExpensesaveHandler=(enteredExpensedata)=>{
    const expensedatas={
       ...enteredExpensedata
        }
      props.lastadd(expensedatas)
      isediting(false)
   }
   const editinghandle=()=>{
      isediting(true)
   }
   const stopedit=()=>{
      isediting(false)
   }

return (
<div className='newexpense'>
   {!edited&&<button onClick={editinghandle}>addexpense</button>}
{edited&&<Expenseform SaveExpensedata={ExpensesaveHandler} onCancel={stopedit}/>}
</div>)
}
export default NewExpense