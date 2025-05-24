import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import burgerReducer from './burgerSlice'; 



export const store = configureStore({
  reducer: {
    language: languageReducer,
    burger: burgerReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
