import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/action/expenseSlice";
import useInput from "../chart/userInput";
import Chart from "../chart";
import "../../style/expenses.css"

const ExpenseFormUpdate = () => {
  const dispatch = useDispatch();
  const [category, bindCategory, resetCategory] = useInput("");
  const [amount, bindAmount, resetAmount] = useInput(0);
  const [date, bindDate, resetDate] = useInput("");

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

    dispatch(addExpense(updatedExpense)); // Assuming updateExpense is defined in your redux actions
    localStorage.clear(); // Clear localStorage after update
    history.push("/"); // Redirect back to the expense list page
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



export default ExpenseFormUpdate;



// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addExpense } from "../../redux/action/expenseSlice"; // Assuming you have an updateExpense action
// import { useHistory } from "react-router-dom";

// const ExpenseFormUpdate = () => {
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");
//   const [date, setDate] = useState("");
//   const [id, setId] = useState("");
//   const dispatch = useDispatch();
//   const history = useHistory();

//   // Load the data from localStorage
//   useEffect(() => {
//     const savedId = localStorage.getItem("id");
//     const savedCategory = localStorage.getItem("category");
//     const savedAmount = localStorage.getItem("amount");
//     const savedDate = localStorage.getItem("date");

//     setId(savedId);
//     setCategory(savedCategory);
//     setAmount(savedAmount);
//     setDate(savedDate);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedExpense = {
//       id,
//       category,
//       amount,
//       date,
//     };

//     dispatch(addExpense(updatedExpense)); // Assuming updateExpense is defined in your redux actions
//     localStorage.clear(); // Clear localStorage after update
//     history.push("/"); // Redirect back to the expense list page
//   };

//   return (
//     <div style={{ width: "50%", margin: "0 auto", marginTop: "50px" }}>
//       <h2>Edit Expense</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Category:</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Amount:</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default ExpenseFormUpdate;
