import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddLaundryOrder = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customer: '',
    items: '',
    date: '',
    status: 'Pending'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // You can integrate an API call here
    navigate('/laundry-management'); // Redirect back to orders page
  };

  const handleCancel = () => {
    navigate('/laundry-management');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 rounded-4 shadow-sm">
        <h4 className="mb-3">Add Laundry Order</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="customer">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              required
              placeholder="Enter customer name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="items">
            <Form.Label>Number of Items</Form.Label>
            <Form.Control
              type="number"
              name="items"
              value={formData.items}
              onChange={handleChange}
              required
              placeholder="Enter number of items"
              min="1"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={handleCancel}
              className="rounded-4"
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="rounded-4">
              Submit Order
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddLaundryOrder;
