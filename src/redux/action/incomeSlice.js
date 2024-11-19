
import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    data: []
}

const incomeSlice = createSlice({
    name: 'incomes',
    initialState,
    reducers: {
      addIncome: (state, action) => {
            const existingItem = state.data.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state, data: state.data.map(item => item.id === action.payload.id ? { ...item, quantity } : item)
                }
            }
            return {
                ...state, data: [...state.data, { ...action.payload, quantity: 1 }]
            }
        },
        deleteIncome: (state, action) => {
            return {
                ...state, data: state.data.filter(item => item.id !== action.payload.id)
            }
        },
        // removeToQuantity: (state, action) => {
        //     return {
        //         ...state, data: state.data.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1}: item).filter(item => item.quantity > 0)
        //     }
        // }
    }
})

export const { addIncome, deleteIncome  } = incomeSlice.actions

export default incomeSlice.reducer