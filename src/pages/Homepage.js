import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const students = useSelector((state) => state.student.students); 
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Management</h1>
      
      {/* Add Button this button is used  to add my new student to the table */}
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/add-student')}
        >
          Add Student
        </button>
      </div>

      {/* Table start */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Roll No</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.age}</td>
                  <td>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => navigate(`/edit-student/${student.id}`)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No students available. Please add a student.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homepage;
