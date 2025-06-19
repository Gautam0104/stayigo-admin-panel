import React, { useState } from 'react';
import { Button, Form, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddInventory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    unit: '',
    status: 'In Stock'
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
    console.log('Submitted Inventory:', formData);
    // Backend API logic goes here
    navigate('/inventory-management');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Add Inventory</h4>

      <Card className="p-4 shadow-sm">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="inventoryName">
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
                  placeholder="e.g. Food, Cleaning, Supply"
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
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="unit">
                <Form.Label>Unit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. kg, bottle, pack"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => navigate('/inventory-management')}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Inventory
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddInventory;
