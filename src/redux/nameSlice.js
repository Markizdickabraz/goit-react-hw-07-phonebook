import { createSlice } from "@reduxjs/toolkit";


const myNameSlice = createSlice({
    name: 'name',
    initialState: '',
    reducers: {
        name(state, action) {
            return state = action.payload
        }
    }
})

export const { name } = myNameSlice.actions;
export const nameReducer = myNameSlice.reducer;