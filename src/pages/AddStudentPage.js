import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../reducers/studentReducer';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    rollNo: '',
    age: '',
  });
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name cannot be empty';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name cannot be empty';
    if (!String(formData.rollNo).trim()) newErrors.rollNo = 'Roll No cannot be empty';
    if (!String(formData.age).trim()) newErrors.age = 'Age cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addStudent(formData)); 
      navigate('/'); 
    }
  };

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <Card className="shadow-lg rounded p-4" style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff' }}>
        <h2 className="mb-4 text-center text-primary">Add New Student</h2>

        <Form onSubmit={handleSubmit}>
          {/* Name  field here*/}
          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Name:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className={`border-radius-10 ${errors.name ? 'is-invalid' : ''}`}
              />
              {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
            </Col>
          </Row>

          {/* Last Name  field here*/}
          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Last Name:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className={`border-radius-10 ${errors.lastName ? 'is-invalid' : ''}`}
              />
              {errors.lastName && <Form.Text className="text-danger">{errors.lastName}</Form.Text>}
            </Col>
          </Row>

          {/* Roll Number  field here*/}
          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Roll No:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Enter Roll No"
                className={`border-radius-10 ${errors.rollNo ? 'is-invalid' : ''}`}
              />
              {errors.rollNo && <Form.Text className="text-danger">{errors.rollNo}</Form.Text>}
            </Col>
          </Row>

          {/* Age field here */}
          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Age:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter Age"
                className={`border-radius-10 ${errors.age ? 'is-invalid' : ''}`}
              />
              {errors.age && <Form.Text className="text-danger">{errors.age}</Form.Text>}
            </Col>
          </Row>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-3 w-100">
            Add Student
          </Button>
        </Form>

        {/* Go Back Button  to redirect my page to homepage if i dont want to edit or add student */}
        <Button variant="secondary" onClick={handleGoBack} className="mt-3 w-100">
          Go Back to Home
        </Button>
      </Card>
    </div>
  );
}

export default AddStudent;
