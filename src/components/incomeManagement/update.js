import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../../redux/action/incomeSlice";
import useInput from "../chart/userInput";
import "../../style/expenses.css";
import { useNavigate } from "react-router-dom";

const IncomeFormUpdate = () => {
  const dispatch = useDispatch();
  const [category, bindCategory, resetCategory] = useInput("");
  const [amount, bindAmount, resetAmount] = useInput(0);
  const [date, bindDate, resetDate] = useInput("");
    const history = useNavigate()
  
  useEffect(() => {
    const savedId = localStorage.getItem("id");
    const savedCategory = localStorage.getItem("category");
    const savedAmount = localStorage.getItem("amount");
    const savedDate = localStorage.getItem("date");
    bindCategory(savedCategory);
    bindAmount(savedAmount);
    bindDate(savedDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedExpense = {
      id,
      category,
      amount,
      date,
    };

    dispatch(addIncome(updatedExpense)); // Assuming updateExpense is defined in your redux actions
    localStorage.clear(); // Clear localStorage after update
    history.push("/"); // Redirect back to the expense list page
  };

  return (
    <div className="formbackground">
    <center><h1>UPDATE</h1></center>
    <form onSubmit={handleSubmit} className="form-change">

        <div className="form-field">
        <label htmlFor='category'>Category</label>
        <input type="text" placeholder="Category" {...bindCategory} required />
      </div><br/>

        <div className="form-field">
        <label htmlFor='Amount'>Amount</label>
        <input type="number" placeholder="Amount" {...bindAmount} required />
      </div>
      <br/>
        <div className="form-field">
        <label htmlFor='date'>Date</label>
        <input type="date" {...bindDate} required />
      </div>
        <div className='form-field'>
         <button className="submit-button" type="submit">Add Income</button>     
       </div>
    </form>
    </div>
  );
};

export default IncomeFormUpdate;
