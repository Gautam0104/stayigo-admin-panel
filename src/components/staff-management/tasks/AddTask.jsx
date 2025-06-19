import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    assignedTo: '',
    priority: 'Medium',
    deadline: new Date().toISOString().split('T')[0],
    status: 'Pending'
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
    console.log('New Task:', formData);
    // You can send this data to your backend API
    navigate('/tasks-management');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow-sm">
        <h4 className="mb-4">Add Task</h4>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="title">
                <Form.Label>Task Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="assignedTo">
                <Form.Label>Assigned To</Form.Label>
                <Form.Control
                  type="text"
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  placeholder="Enter staff name"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="priority">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="deadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => navigate('/tasks-management')}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Task
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddTask;
