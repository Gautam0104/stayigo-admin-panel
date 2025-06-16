import React from 'react';
import { Table, Badge, Card } from 'react-bootstrap';

const trackingEvents = [
  {
    id: '#T001',
    type: 'Room Cleaning',
    room: '101',
    staff: 'Alice',
    status: 'In Progress',
    timestamp: '2025-06-13 10:00 AM'
  },
  {
    id: '#T002',
    type: 'Laundry Pickup',
    room: '102',
    staff: 'Bob',
    status: 'Completed',
    timestamp: '2025-06-13 11:30 AM'
  },
  {
    id: '#T003',
    type: 'Maintenance',
    room: '104',
    staff: 'Diana',
    status: 'Pending',
    timestamp: '2025-06-12 02:45 PM'
  },
  {
    id: '#T004',
    type: 'Room Inspection',
    room: '103',
    staff: 'Charlie',
    status: 'Cancelled',
    timestamp: '2025-06-11 04:00 PM'
  }
];

const notifications = [
  {
    id: '#N001',
    user: 'John Doe',
    message: 'Room 101 cleaning started.',
    type: 'Info',
    timestamp: '2025-06-13 10:00 AM'
  },
  {
    id: '#N002',
    user: 'Emily Clark',
    message: 'Laundry for Room 102 is completed.',
    type: 'Success',
    timestamp: '2025-06-13 11:35 AM'
  },
  {
    id: '#N003',
    user: 'Robert King',
    message: 'Maintenance on Room 104 is delayed.',
    type: 'Warning',
    timestamp: '2025-06-12 03:00 PM'
  },
  {
    id: '#N004',
    user: 'Sophia White',
    message: 'Room inspection for Room 103 cancelled.',
    type: 'Danger',
    timestamp: '2025-06-11 04:10 PM'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Completed':
      return 'success';
    case 'In Progress':
      return 'primary';
    case 'Pending':
      return 'warning';
    case 'Cancelled':
      return 'danger';
    default:
      return 'secondary';
  }
};

const getNotificationVariant = type => {
  switch (type) {
    case 'Success':
      return 'success';
    case 'Info':
      return 'primary';
    case 'Warning':
      return 'warning';
    case 'Danger':
      return 'danger';
    default:
      return 'secondary';
  }
};

const TrackingAndNotification = () => {
  return (
    <div className="container mt-4">
      <h4 className="mb-4">Tracking & Notification</h4>

      {/* Tracking Events Table */}
      <Card className="mb-4 rounded-4 shadow-sm">
        <Card.Body>
          <h6 className="mb-3">Live Tracking</h6>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Track ID</th>
                <th>Type</th>
                <th>Room</th>
                <th>Staff</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {trackingEvents.map((event, idx) => (
                <tr key={idx}>
                  <td>{event.id}</td>
                  <td>{event.type}</td>
                  <td>{event.room}</td>
                  <td>{event.staff}</td>
                  <td>
                    <Badge bg={getStatusVariant(event.status)}>
                      {event.status}
                    </Badge>
                  </td>
                  <td>{event.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Notifications Table */}
      <Card className="rounded-4 shadow-sm">
        <Card.Body>
          <h6 className="mb-3">Notifications</h6>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Notification ID</th>
                <th>User</th>
                <th>Message</th>
                <th>Type</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification, idx) => (
                <tr key={idx}>
                  <td>{notification.id}</td>
                  <td>{notification.user}</td>
                  <td>{notification.message}</td>
                  <td>
                    <Badge bg={getNotificationVariant(notification.type)}>
                      {notification.type}
                    </Badge>
                  </td>
                  <td>{notification.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TrackingAndNotification;
