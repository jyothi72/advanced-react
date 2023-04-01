import "./expenselist.css";
import Expenseitem from "./Expenseitem";
const Expenselist = (props) => {
  if (props.items.length === 0) {
    return <h5 className="expenses-list__fallback">its not here!!</h5>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expenses)=> {
        return (
          <Expenseitem
            key={expenses.title}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          /> );
      })}
    </ul>
  )
    }
export default Expenselist;
