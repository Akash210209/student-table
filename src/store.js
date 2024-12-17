import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './reducers/studentReducer'; // Path to your studentReducer file

const store = configureStore({
  reducer: {
    student: studentReducer,  // This ensures `state.student` holds the student slice
  },
});

export default store;
