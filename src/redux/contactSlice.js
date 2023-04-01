import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist'
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
        items: [],
        isLoading: false,
        error: null,
    },
    
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state,action) {
            state.isLoading = true;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContacts.pending]: handlePending,
        [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload)
        },
        [addContacts.rejected]: handleRejected,
        [deleteContatcs.pending]: handlePending,
        [deleteContatcs.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        // state.items.filter(item => item.id !== action.payload.id)
          // console.log(action.payload)
        const index = state.items.findIndex(item => item.id === action.payload.id);
          state.items.splice(index, 1);
    },
}
        })
export const contactsReducer = myContactsSlice.reducer;

    
// const persistConfig = {
//   key: 'contacts',
//     storage,
// }
 
// const persistContactsReducer = persistReducer(persistConfig, myContactsSlice.reducer);

// export const { add, deleteBtn } = myContactsSlice.actions;
// export const contactsReducer = persistContactsReducer;

//  reducers: {
//         add(state, action) {
//             state.value.push(action.payload)
//         },
//         deleteBtn(state, action) {
//         const index = state.value.findIndex(item => item.name === action.payload);
//             state.value.splice(index, 1);
//         },