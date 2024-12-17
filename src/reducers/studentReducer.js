import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  students: [
    { id: '1', name: 'John', lastName: 'Doe', rollNo: 101, age: 20 },  // Ensure id is a string
    { id: '2', name: 'Jane', lastName: 'Smith', rollNo: 102, age: 22 },  // Ensure id is a string
  ],
};

  

// Student slice
const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push({
        id: new Date().getTime().toString(), // Unique ID
        ...action.payload,
      });
    },
    updateStudent: (state, action) => {
      const { id, name, lastName, rollNo, age } = action.payload;
      const index = state.students.findIndex((student) => student.id === id);
      if (index !== -1) {
        state.students[index] = { id, name, lastName, rollNo, age };
      }
    },
  },
});

export const { addStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
