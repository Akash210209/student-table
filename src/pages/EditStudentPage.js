import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudent } from '../reducers/studentReducer'; 
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

const EditStudentPage = () => {
  const { id } = useParams(); 
  const students = useSelector((state) => state.student.students); 
  const student = students.find((student) => student.id === String(id)); 

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    rollNo: '',
    age: '',
  });

  const [errors, setErrors] = useState({}); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (student) {
      setFormData({ ...student }); 
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };
  // validation block here where im checking if values are valid and are not epmty conditions
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name cannot be empty';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name cannot be empty';
    if (!String(formData.rollNo).trim()) newErrors.rollNo = 'Roll No cannot be empty';
    if (!String(formData.age).trim()) newErrors.age = 'Age cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(updateStudent(formData)); 
      navigate('/'); 
    }
  };

  const handleGoBack = () => {
    navigate('/'); 
  };

  if (!student) {
    return <div>Student not found. Redirecting...</div>; 
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <Card className="shadow-lg rounded p-4" style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff' }}>
        <h3 className="mb-4 text-center text-primary">Edit Student</h3>

        <Form onSubmit={handleSubmit}>
          {/* Name field here */}
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
                isInvalid={!!errors.name} // Add invalid class if there's an error
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Col>
          </Row>

          {/* Last Name field here*/}
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
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Col>
          </Row>

          {/* Roll No field here */}
          <Row className="mb-3">
            <Col xs={12} md={3} className="d-flex align-items-center">
              <Form.Label>Roll No:</Form.Label>
            </Col>
            <Col xs={12} md={9}>
              <Form.Control
                type="number"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Enter Roll No"
                isInvalid={!!errors.rollNo}
              />
              <Form.Control.Feedback type="invalid">{errors.rollNo}</Form.Control.Feedback>
            </Col>
          </Row>

          {/* Age  field here*/}
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
                isInvalid={!!errors.age}
              />
              <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
            </Col>
          </Row>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-3 w-100">
            Update Student
          </Button>
        </Form>

               {/* Go Back Button  to redirect my page to homepage if i dont want to edit or add student */}
        <Button variant="secondary" onClick={handleGoBack} className="mt-3 w-100">
          Go Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default EditStudentPage;
