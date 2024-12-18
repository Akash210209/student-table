import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './reducers/studentReducer'; // Path to your studentReducer file

const store = configureStore({
  reducer: {
    student: studentReducer, 
  },
});

export default store;
