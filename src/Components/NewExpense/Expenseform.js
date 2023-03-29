import "./Expenseform.css";
const Expenseform = () => {
  return (
    <form>
      <div className="controls">
        <div className="controls">
          <label className="labeljyo">title</label>
          <input type={Text}  className="inputsel"/>
        </div>
        <div className="controls">
          <label className="labeljyo">amount</label>
          <input type='number' className="inputsel" />
        </div>
        <div className="controls">
          <label className="labeljyo">Date</label>
          <input type='date'  className="inputsel"/>
        </div>
      </div>
      <div className="actions">
        <button type="submit" className="jyoobutton">add expense</button>
      </div>
    </form>
  );
};
export default Expenseform;
