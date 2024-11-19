import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense, addExpense } from "../../redux/action/expenseSlice";
import "../../style/tableStyle.css";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.data);
  const dispatch = useDispatch();

  return (
    // <div>
    //   <h2>Expenses</h2>
    //   <ul>
    //     {expenses.map((exp) => (
    //       <li key={exp.id}>
    //         {exp.date} - {exp.category} - ${exp.amount}
    //         <button onClick={() => dispatch(deleteExpense(exp.id))}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <>
    
    <h1 style={{textAlign:'center', marginTop:"30px"}}>INCOME LIST</h1>
    <center style={{marginTop:"20px"}}>
    <table cellPadding={50} cellSpacing={50}>
      <tr>
        <th>Id</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {
        expenses.map((item,index) => {
          return(
            <>
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
              <td><button onClick={()=>addExpense(item.id)} style={{cursor:"pointer"}}>Edit</button></td>
              <td><button onClick={() => dispatch(deleteExpense(item.id))} style={{cursor:"pointer"}}>Delete</button></td>
            </tr>
            </>
          )
        })
      }
    </table>
    </center>
    </>
  );
};

export default ExpenseList;