import React, { useState } from "react";
import Expenseitem from "./Expenseitem";
import Expensefilter from "./Expensefilter";
import Card from "./Card";
import "./expenses.css";
const Expenses = (props) => {
  const [filteredyear, setfilteredyear] = useState("2020");
  const filterchangehandler = (selectedyear) => {
    setfilteredyear(selectedyear);
  };
  return (
    <div>
      <Card className="expenses">
        <Expensefilter
          selected={filteredyear}
          onChangeFilter={filterchangehandler}
        />
        {props.items.map((expenses) => {
          return(
          <Expenseitem
            key={expenses.title}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
        
          />
          )
        })}
      </Card>
    </div>
  );
};
export default Expenses;
