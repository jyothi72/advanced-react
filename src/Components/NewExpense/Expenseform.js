import React,{useState} from 'react'
import "./Expenseform.css";
const Expenseform = (props) => {
  const [enteredtitle,setentered]=useState('');
  const [enteredamount,setenteredamount]=useState('');
  const [entereddate,setentereddate]=useState('');

    const showtitle=(event)=>{
      setentered(event.target.value)
    }
     const showamount=(event)=>{
      setenteredamount(event.target.value)
    }
     const showdate=(event)=>{
      setentereddate(event.target.value)
    }
    const submithandler=(event)=>{
      event.preventDefault()
      const expenseData={
        title:enteredtitle,
        amount:enteredamount,
        date:new Date(entereddate)
      }
      props.SaveExpensedata(expenseData)
     setentered('')
     setentereddate('')
     setenteredamount('')
    }
 return (
    <form onSubmit={submithandler}>
      <div className="controls">
        <div className="controls">
          <label className="labeljyo">title</label>
          <input type='text'   value={enteredtitle} className="inputsel" onChange={showtitle}/>
        </div>
        <div className="controls">
          <label className="labeljyo">amount</label>
          <input type='number'   value={enteredamount}className="inputsel" onChange={showamount}/>
        </div>
        <div className="controls">
          <label className="labeljyo">Date</label>
          <input type='date'  value={entereddate} className="inputsel" onChange={showdate}/>
        </div>
      </div>
      <div className="actions">
        <button type="button"className='jyoobutton' onClick={props.onCancel}>cancel</button>
        <button type="submit" className="jyoobutton">add expense</button>
      </div>
    </form>
  );
};
export default Expenseform;
