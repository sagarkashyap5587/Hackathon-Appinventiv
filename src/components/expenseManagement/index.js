import React from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/action/expenseSlice";
import useInput from "../chart/userInput";
import Chart from "../chart";
import "../../style/expenses.css"

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [category, bindCategory, resetCategory] = useInput("");
  const [amount, bindAmount, resetAmount] = useInput(0);
  const [date, bindDate, resetDate] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { id: Date.now(), category, amount: parseFloat(amount), date };
    dispatch(addExpense(expense));
    resetCategory();
    resetAmount();
    resetDate();
  };

  return (
    <>
    <div className="formbackground">
    <form onSubmit={handleSubmit} className="form-change">
        <div className="form-field">
        <label htmlFor='category'>Category</label>
        <input type="text" placeholder="Category" {...bindCategory} required />
      </div>
        <div className="form-field">
        <label htmlFor='Amount'>Amount</label>
        <input type="number" placeholder="Amount" {...bindAmount} required />
      </div>
        <div className="form-field">
        <label htmlFor='date'>Date</label>
        <input type="date" {...bindDate} required />
      </div>
        <div className='form-field'>
         <button className="submit-button" type="submit">Add Expense</button>     
       </div>
    </form>
    </div>
    </>
  );
};





// <>
//     <h1 className='formheading'>Employee Form</h1>
//     {/* Form Start Here  */}
    
//     <div className='formbackground'>
//     <form className='form-change'>
//       <div className='form-group'>
//         <div className='form-field'>
//           <label htmlFor='name'>Name</label>
//           <input type='text' id='name' placeholder='Enter Name'/>
//         </div>
//         <div className='form-field'>
//           <label htmlFor='email'>Email</label>
//           <input type='email' id='email' placeholder='Enter Email'/>
//         </div>
//       </div>
//        <div className='form-group'>
//         <div className='form-field'>
//           <label htmlFor='phone'>Phone</label>
//           <input type="tel" id="phone" name="phone" placeholder='Enter Mobile Number' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
//         </div>
//         <div className='form-field'>
//           <label htmlFor='designation'>Designation</label>
//           <input type='text' id='designation' placeholder='Enter Designation'/>
//         </div>
//       </div>
//       <div className='form-group'>
//         <div className='form-field'>
//           <button className='submit-button'>Submit</button>
//         </div>
//       </div>
//     </form>
//     </div>
//     </>






export default ExpenseForm;
