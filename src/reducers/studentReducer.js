import { createSlice } from "@reduxjs/toolkit";


const studentReducer = createSlice({
  name: "students",
  initialState: {
     students: [
    { id: '1', name: 'student', lastName: '1', rollNo: 101, age: 20 },  
    { id: '2', name: 'student', lastName: '2', rollNo: 102, age: 22 },  
  ],
    loading: false,
    error: null,
  },
  reducers: {
    addStudent(state, action) {
      state.students.push(action.payload);
    },
    updateStudent(state, action) {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.students[index] = { ...state.students[index], ...action.payload };
      }
    },
    deleteStudent(state, action) {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

const { actions } = studentReducer;

export const { addStudent, updateStudent, deleteStudent } = actions;

export default studentReducer.reducer;
