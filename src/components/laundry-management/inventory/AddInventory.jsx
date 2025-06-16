import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddInventory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    quantity: '',
    status: 'In Stock',
    lastUpdated: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Inventory Submitted:', formData);
    // TODO: Add API call or state update here
    navigate('/inventory');
  };

  const handleCancel = () => {
    navigate('/inventory');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 rounded-4 shadow-sm">
        <h4 className="mb-4">Add Inventory Item</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Item ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              placeholder="#INV006"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              placeholder="e.g. Linen, Toiletries, Amenities"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
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

          <Form.Group className="mb-4">
            <Form.Label>Last Updated</Form.Label>
            <Form.Control
              type="date"
              name="lastUpdated"
              value={formData.lastUpdated}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={handleCancel}
              className="rounded-4"
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="rounded-4">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddInventory;
