import React, { useState } from 'react';
import Expenses from './Components/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'
const dummyexpenses = [
  {  id:"e1",title: "car insurance", amount:250, date:new Date(2023, 3, 21) },
  {id:"e2", title: "petrol", amount:260, date:new Date(2023, 3, 23) },
  { id:"e3",title: "fruits", amount:270, date:new Date(2023, 3, 24) },
  {id:"e4", title: "groceries", amount:280, date:new Date(2023, 3, 26)}
];
const App=()=> {
  const [expenses, setexpenses]=useState(dummyexpenses);
  const addedexpensehandle=(there)=>{
    setexpenses((prev)=>{
      return ([there,...prev])
    })
  }
  return (
    <div>
      <NewExpense lastadd={addedexpensehandle}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}
export default App;
