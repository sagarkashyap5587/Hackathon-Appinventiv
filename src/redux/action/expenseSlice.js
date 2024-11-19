import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    data: []
}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
      addExpense: (state, action) => {
            const existingItem = state.data.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state, data: state.data.map(item => item.id === action.payload.id ? { ...item} : item)
                }
            }
            return {
                ...state, data: [...state.data, { ...action.payload }]
            }
        },
        deleteExpense: (state, action) => {
            return {
                ...state, data: state.data.filter(item => item.id !== action.payload.id)
            }
        },
    }
})


export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

