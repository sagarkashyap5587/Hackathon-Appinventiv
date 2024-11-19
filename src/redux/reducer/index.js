import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "../action/incomeSlice";
import expensesReducer from "../action/expenseSlice";

export const store = configureStore({
    reducer: {
        incomes: incomeReducer,
        expenses: expensesReducer
    }
})




// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import expenseReducer from "../action/expenseSlice"
// import incomeReducer from "../action/incomeSlice"

// const persistConfig = {
//     key: "root",
//     storage,
//   };
  
// const rootReducer = {
//     expenses: persistReducer(persistConfig, expenseReducer),
//     incomes: persistReducer(persistConfig, incomeReducer),
//   };
  
// const store = configureStore({ reducer: rootReducer });
  
// export const persistor = persistStore(store);

// export default store;