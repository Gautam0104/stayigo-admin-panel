import React, { useState } from 'react';
import { Button, Form, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    availability: 'Available'
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
    console.log('Submitted Item:', formData);
    // Here you would send the formData to your backend API
    navigate('/item-management'); // Go back to item list page
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Add Item</h4>

      <Card className="p-4 shadow-sm">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="itemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter item name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Snacks, Beverages"
                  name="category"
                  value={formData.category}
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
              <Form.Group controlId="availability">
                <Form.Label>Availability</Form.Label>
                <Form.Select
                  name="availability"
                  value={formData.availability}
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
              onClick={() => navigate('/item-management')}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Item
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddItem;
