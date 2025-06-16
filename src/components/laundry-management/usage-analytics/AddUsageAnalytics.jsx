import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddUsageAnalytics = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: '',
    activity: '',
    date: '',
    status: 'Success'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('New Activity Submitted:', formData);
    // TODO: send data to backend API or update global state
    navigate('/usage-analytics');
  };

  const handleCancel = () => {
    navigate('/usage-analytics');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 rounded-4 shadow-sm">
        <h4 className="mb-3">Add Usage Activity</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="user">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
              placeholder="Enter user name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="activity">
            <Form.Label>Activity</Form.Label>
            <Form.Control
              type="text"
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              placeholder="Enter activity description"
              required
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
              <option value="Success">Success</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
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
              Submit Activity
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddUsageAnalytics;
