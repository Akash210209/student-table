import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudent } from '../reducers/studentReducer';  // Ensure the correct path
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

const EditStudentPage = () => {
  const { id } = useParams();  // Extract student id from the URL
  const students = useSelector((state) => state.student.students);  // Get students from Redux state
  const student = students.find((student) => student.id === String(id));  // Find student by ID

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    rollNo: '',
    age: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Log the student and id to debug
  useEffect(() => {
    console.log('URL ID:', id);  // Log the ID from URL
    console.log('Found Student:', student);  // Log the student object
  }, [id, student]);

  // Pre-populate the form with the student data
  useEffect(() => {
    if (student) {
      setFormData({ ...student });  // Set the form data to the student's current details
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent(formData));  // Dispatch the action to update student
    navigate('/');  // Redirect to homepage after updating
  };

  const handleGoBack = () => {
    navigate('/');  // Navigate back to homepage
  };

  if (!student) {
    return <div>Student not found. Redirecting...</div>;  // If student not found, show error
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <Card className="shadow-lg rounded p-4" style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff' }}>
        <h3 className="mb-4 text-center text-primary">Edit Student</h3>

        <Form onSubmit={handleSubmit}>
          {/* Name */}
          <Row className="mb-3">
            <Col xs={12} md={1} className="d-flex align-items-center">
              <Form.Label>Name:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                className="border-radius-10"
              />
            </Col>
          </Row>

          {/* Last Name */}
          <Row className="mb-3">
            <Col xs={12} md={1} className="d-flex align-items-center">
              <Form.Label>Last Name:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                required
                className="border-radius-10"
              />
            </Col>
          </Row>

          {/* Roll No */}
          <Row className="mb-3">
            <Col xs={12} md={1} className="d-flex align-items-center">
              <Form.Label>Roll No:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="number"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Enter Roll No"
                required
                className="border-radius-10"
              />
            </Col>
          </Row>

          {/* Age */}
          <Row className="mb-3">
            <Col xs={12} md={1} className="d-flex align-items-center">
              <Form.Label>Age:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter Age"
                required
                className="border-radius-10"
              />
            </Col>
          </Row>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-3 w-100">
            Update Student
          </Button>
        </Form>

        {/* Go Back Button */}
        <Button variant="secondary" onClick={handleGoBack} className="mt-3 w-100">
          Go Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default EditStudentPage;
