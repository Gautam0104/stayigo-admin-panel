import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddTrackingAndNotification = () => {
  const navigate = useNavigate();

  const [trackingData, setTrackingData] = useState({
    id: '',
    type: '',
    room: '',
    staff: '',
    status: 'Pending',
    timestamp: ''
  });

  const [notificationData, setNotificationData] = useState({
    id: '',
    user: '',
    message: '',
    type: 'Info',
    timestamp: ''
  });

  const handleTrackingChange = e => {
    const { name, value } = e.target;
    setTrackingData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = e => {
    const { name, value } = e.target;
    setNotificationData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Tracking Submitted:', trackingData);
    console.log('Notification Submitted:', notificationData);
    // TODO: Send to API or context
    navigate('/tracking-and-notification');
  };

  const handleCancel = () => {
    navigate('/tracking-and-notification');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 rounded-4 shadow-sm">
        <h4 className="mb-4">Add Tracking & Notification</h4>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <h6 className="mb-3">Tracking Details</h6>
              <Form.Group className="mb-3">
                <Form.Label>Track ID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="#T005"
                  value={trackingData.id}
                  onChange={handleTrackingChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Service Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  placeholder="Room Cleaning, Laundry, etc."
                  value={trackingData.type}
                  onChange={handleTrackingChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Room No</Form.Label>
                <Form.Control
                  type="text"
                  name="room"
                  value={trackingData.room}
                  onChange={handleTrackingChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Staff</Form.Label>
                <Form.Control
                  type="text"
                  name="staff"
                  value={trackingData.staff}
                  onChange={handleTrackingChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={trackingData.status}
                  onChange={handleTrackingChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Timestamp</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="timestamp"
                  value={trackingData.timestamp}
                  onChange={handleTrackingChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <h6 className="mb-3">Notification Details</h6>
              <Form.Group className="mb-3">
                <Form.Label>Notification ID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="#N005"
                  value={notificationData.id}
                  onChange={handleNotificationChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>User</Form.Label>
                <Form.Control
                  type="text"
                  name="user"
                  value={notificationData.user}
                  onChange={handleNotificationChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  name="message"
                  value={notificationData.message}
                  onChange={handleNotificationChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  name="type"
                  value={notificationData.type}
                  onChange={handleNotificationChange}
                >
                  <option value="Info">Info</option>
                  <option value="Success">Success</option>
                  <option value="Warning">Warning</option>
                  <option value="Danger">Danger</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Timestamp</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="timestamp"
                  value={notificationData.timestamp}
                  onChange={handleNotificationChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button
              variant="secondary"
              onClick={handleCancel}
              className="rounded-4"
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="rounded-4">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddTrackingAndNotification;
