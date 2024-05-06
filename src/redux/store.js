import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './redux/habitSlice'

const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;