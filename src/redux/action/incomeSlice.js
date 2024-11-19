
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
                    ...state, data: state.data.map(item => item.id === action.payload.id ? { ...item } : item)
                }
            }
            return {
                ...state, data: [...state.data, { ...action.payload }]
            }
        },
        deleteIncome: (state, action) => {
            return {
                ...state, data: state.data.filter(item => item.id !== action.payload.id)
            }
        },
    }
})

export const { addIncome, deleteIncome  } = incomeSlice.actions

export default incomeSlice.reducer

