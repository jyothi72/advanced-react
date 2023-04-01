import React, { useState } from "react";

import Expensefilter from "./Expensefilter";
import Expenselist from "./Expenseslist";
import Card from "./Card";
import "./expenses.css";
const Expenses = (props) => {
  const [filteredyear, setfilteredyear] = useState("2020");
  const filterchangehandler = (selectedyear) => {
    setfilteredyear(selectedyear);
  };
  const filteredarr=props.items.filter((expense)=>{
    return( expense.date.getFullYear().toString()===filteredyear)
  })
  
  
  return (
    <div>
      <Card className="expenses">
        <Expensefilter
          selected={filteredyear}
          onChangeFilter={filterchangehandler}
        />
      <Expenselist items={filteredarr}/>
      </Card>
    </div>
  );
};
export default Expenses;
