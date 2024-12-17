import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../reducers/studentReducer'; // Redux action
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

function AddStudent() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [age, setAge] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch action to add student
    dispatch(addStudent({ name, lastName, rollNo, age }));

    // Redirect to homepage
    navigate('/');
  };

  const handleGoBack = () => {
    navigate('/');  // Navigate back to homepage
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <Card className="shadow-lg rounded p-4" style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff' }}>
        <h2 className="mb-4 text-center text-primary">Add New Student</h2>

        <Form onSubmit={handleSubmit}>
          {/* Name and Last Name */}
          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Name:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter Name" 
                required
                className="border-radius-10"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Last Name:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Enter Last Name" 
                required
                className="border-radius-10"
              />
            </Col>
          </Row>

          {/* Roll Number */}
          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Roll No:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control 
                type="text" 
                value={rollNo} 
                onChange={(e) => setRollNo(e.target.value)} 
                placeholder="Enter Roll No" 
                required
                className="border-radius-10"
              />
            </Col>
          </Row>

          {/* Age */}
          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Age:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                placeholder="Enter Age" 
                required
                className="border-radius-10"
              />
            </Col>
          </Row>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-3 w-100">
            Add Student
          </Button>
        </Form>

        {/* Go Back Button */}
        <Button variant="secondary" onClick={handleGoBack} className="mt-3 w-100">
          Go Back to Home
        </Button>
      </Card>
    </div>
  );
}

export default AddStudent;
