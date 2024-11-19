import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteIncome, addIncome } from "../../redux/action/incomeSlice";
import "../../style/tableStyle.css";

const IncomeList = () => {
  const incomes = useSelector((state) => state.incomes.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteIncome({id}));
  };


  const handleEdit = (id, category, amount, date) => {
    localStorage.setItem("id",id)
    localStorage.setItem("category",category)
    localStorage.setItem("amount",amount)
    localStorage.setItem("date", date)
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>INCOME LIST</h1>
      <center style={{ marginTop: "20px" }}>
        <table cellPadding={50} cellSpacing={50}>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {incomes.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.category}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(item.id, item.category, item.amount, item.date)}
                      style={{ cursor: "pointer" }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </center>
    </>
  );
};

export default IncomeList;
