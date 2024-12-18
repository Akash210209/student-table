import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AddStudent from './pages/AddStudentPage';
import EditStudent from './pages/EditStudentPage';

function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/add-student', element: <AddStudent /> },
    { path: '/edit-student/:id', element: <EditStudent /> },
  ]);

  return <>{routes}</>;
}

export default App;
