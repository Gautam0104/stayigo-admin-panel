import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddStaffCategory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    totalStaff: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('New Staff Category:', formData);
    // Here you can integrate your API call
    navigate('/staff-categories');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow-sm">
        <h4 className="mb-4">Add Staff Category</h4>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="id">
                <Form.Label>Category ID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="e.g. C006"
                  value={formData.id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="e.g. Chef"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={8}>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="description"
                  placeholder="Describe the staff category..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="totalStaff">
                <Form.Label>Total Staff</Form.Label>
                <Form.Control
                  type="number"
                  name="totalStaff"
                  placeholder="e.g. 5"
                  value={formData.totalStaff}
                  onChange={handleChange}
                  min={0}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => navigate('/staff-categories')}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Category
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddStaffCategory;
