import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import { nameReducer } from "./nameSlice";
import { numberReducer } from "./numberSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        name: nameReducer,
        number: numberReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
