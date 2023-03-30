import React,{useState} from 'react'
import "./Expenseform.css";
const Expenseform = () => {
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
      console.log(expenseData)
    }


  return (
    <form onSubmit={submithandler}>
      <div className="controls">
        <div className="controls">
          <label className="labeljyo">title</label>
          <input type='text'  className="inputsel" onChange={showtitle}/>
        </div>
        <div className="controls">
          <label className="labeljyo">amount</label>
          <input type='number' className="inputsel" onChange={showamount}/>
        </div>
        <div className="controls">
          <label className="labeljyo">Date</label>
          <input type='date'  className="inputsel" onChange={showdate}/>
        </div>
      </div>
      <div className="actions">
        <button type="submit" className="jyoobutton">add expense</button>
      </div>
    </form>
  );
};
export default Expenseform;
