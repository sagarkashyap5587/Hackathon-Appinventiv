import { path } from "./path";
import ExpenseForm from "../components/expenseManagement";
import ExpenseList from "../components/expenseManagement/expensesList";
import IncomeForm from "../components/incomeManagement";
import IncomeList from "../components/incomeManagement/incomeList";
import Dashboard from "../components/Dashboard";

const PageRoutes= [
    {
        name :"INCOME FORM",
        Components : IncomeForm,
        path: path.INCOME_FORM,
        isPrivate: false
    },
    {
        name: "EXPENSE FORM",
        Components : ExpenseForm,
        path: path.EXPENSE_FORM,
        isPrivate: false
    },
    {
        name :"INCOME LIST",
        Components : IncomeList,
        path: path.INCOME_LIST,
        isPrivate: false
    },
    {
        name :"EXPENSE LIST",
        Components : ExpenseList,
        path: path.EXPENSE_LIST,
        isPrivate: false
    },

]

export default PageRoutes;
