import React, { useState } from 'react';
import { Button, Form, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddMenu = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    status: 'Available'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted Menu:', formData);
    // Submit formData to backend
    navigate('/menu-management'); // Redirect to menu list
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Add Menu</h4>

      <Card className="p-4 shadow-sm">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="menuName">
                <Form.Label>Menu Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter menu name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="menuType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Breakfast, Drinks"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="price">
                <Form.Label>Price (₹)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => navigate('/menu-management')}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Menu
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddMenu;
