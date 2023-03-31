import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
import { fetchContacts, addContacts, deleteContatcs } from './operations';


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const myContactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        value: [],
        isLoading: false,
        error: null,
    },
    
    extraReducers: {
        [fetchContacts.pending]: handlePending,
     [fetchContacts.pending](state) {
      state.isLoading = true;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContacts.pending]: handlePending,
        [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.value.push(action.payload)
        },
        [addContacts.rejected]: handleRejected,
        [deleteContatcs.pending]: handlePending,
        [deleteContatcs.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
     const index = state.value.findIndex(item => item.name === action.payload);
      state.items.splice(index, 1);
    },
        
}

    // reducers: {
    //     add(state, action) {
    //         state.value.push(action.payload)
    //     },
    //     deleteBtn(state, action) {
    //     const index = state.value.findIndex(item => item.name === action.payload);
    //         state.value.splice(index, 1);
    //     },
    // },
})
    
const persistConfig = {
  key: 'contacts',
    storage,
}
 
const persistContactsReducer = persistReducer(persistConfig, myContactsSlice.reducer);

export const { add, deleteBtn } = myContactsSlice.actions;
export const contactsReducer = persistContactsReducer;

//  reducers: {
//         add(state, action) {
//             state.value.push(action.payload)
//         },
//         deleteBtn(state, action) {
//         const index = state.value.findIndex(item => item.name === action.payload);
//             state.value.splice(index, 1);
//         },