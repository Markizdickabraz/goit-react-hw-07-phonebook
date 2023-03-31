import { createSlice } from "@reduxjs/toolkit";


const myFilterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filter(state, action) {
           return state = action.payload;
        }
    }
})

export const { filter } = myFilterSlice.actions;
export const filterReducer = myFilterSlice.reducer;