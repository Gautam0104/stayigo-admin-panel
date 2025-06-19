import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddAffiliate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '',
    totalEarnings: '',
    status: 'Active'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted affiliate:', formData);
    // You can add API call here
    navigate('/affiliate-management');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow-sm">
        <h4 className="mb-4">Add New Affiliate</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Affiliate Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter full name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@domain.com"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Affiliate Code</Form.Label>
            <Form.Control
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
              placeholder="Unique affiliate code"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Total Earnings</Form.Label>
            <Form.Control
              type="number"
              name="totalEarnings"
              value={formData.totalEarnings}
              onChange={handleChange}
              placeholder="e.g. 5000"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="rounded-4">
            Save Affiliate
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddAffiliate;
