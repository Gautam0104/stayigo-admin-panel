import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddCoupon = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    code: '',
    discount: '',
    type: 'Percentage',
    usage: 'Single Use',
    status: 'Active'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted coupon:', formData);
    // You can add API call here
    navigate('/coupon-management');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow-sm">
        <h4 className="mb-4">Add New Coupon</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Coupon Code</Form.Label>
            <Form.Control
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
              placeholder="Enter coupon code"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              type="text"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              required
              placeholder="e.g. 50% or ₹100"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option>Percentage</option>
              <option>Flat</option>
              <option>Shipping</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Usage</Form.Label>
            <Form.Select
              name="usage"
              value={formData.usage}
              onChange={handleChange}
            >
              <option>Single Use</option>
              <option>Multiple Use</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Expired</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="rounded-4">
            Save Coupon
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddCoupon;
