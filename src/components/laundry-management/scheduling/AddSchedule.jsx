import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddSchedule = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    service: '',
    room: '',
    date: '',
    time: '',
    staff: '',
    status: 'Scheduled'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Schedule Submitted:', formData);
    // TODO: Send data to backend API
    navigate('/scheduling');
  };

  const handleCancel = () => {
    navigate('/scheduling');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 rounded-4 shadow-sm">
        <h4 className="mb-3">Add Schedule</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="service">
            <Form.Label>Service Type</Form.Label>
            <Form.Control
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Enter service name (e.g., Room Cleaning)"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="room">
            <Form.Label>Room Number</Form.Label>
            <Form.Control
              type="text"
              name="room"
              value={formData.room}
              onChange={handleChange}
              placeholder="Enter room number (e.g., 101)"
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

          <Form.Group className="mb-3" controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="staff">
            <Form.Label>Staff Assigned</Form.Label>
            <Form.Control
              type="text"
              name="staff"
              value={formData.staff}
              onChange={handleChange}
              placeholder="Enter staff name"
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
              <option value="Scheduled">Scheduled</option>
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
              Submit Schedule
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddSchedule;
