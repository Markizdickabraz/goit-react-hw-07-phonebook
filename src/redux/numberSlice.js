import { createSlice } from "@reduxjs/toolkit";


const myNumberSlice = createSlice({
    name: 'number',
    initialState: '',
    reducers: {
        number(state, action) {
            return state = action.payload
        }
    }
})

export const { number } = myNumberSlice.actions;
export const numberReducer = myNumberSlice.reducer;