import React from 'react';
import { Card, Row, Col, Table, Badge } from 'react-bootstrap';

const analyticsSummary = [
  {
    title: 'Total Bookings',
    value: 128,
    variant: 'primary'
  },
  {
    title: 'Total Laundry Orders',
    value: 64,
    variant: 'success'
  },
  {
    title: 'Scheduled Services',
    value: 42,
    variant: 'warning'
  },
  {
    title: 'Cancelled Services',
    value: 5,
    variant: 'danger'
  }
];

const recentActivities = [
  {
    id: '#U001',
    user: 'John Doe',
    activity: 'Booked Room #101',
    date: '2025-06-13',
    status: 'Success'
  },
  {
    id: '#U002',
    user: 'Emily Clark',
    activity: 'Scheduled Laundry for Room #102',
    date: '2025-06-13',
    status: 'Pending'
  },
  {
    id: '#U003',
    user: 'Robert King',
    activity: 'Cancelled Maintenance',
    date: '2025-06-12',
    status: 'Cancelled'
  },
  {
    id: '#U004',
    user: 'Sophia White',
    activity: 'Completed Room Cleaning',
    date: '2025-06-12',
    status: 'Completed'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Success':
    case 'Completed':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Cancelled':
      return 'danger';
    default:
      return 'secondary';
  }
};

const UsageAnalytics = () => {
  return (
    <div className="container mt-4">
      <h4 className="mb-3">Usage Analytics</h4>

      {/* Summary Cards */}
      <Row className="mb-4">
        {analyticsSummary.map((item, idx) => (
          <Col key={idx} md={3}>
            <Card
              bg={item.variant}
              text="white"
              className="mb-3 rounded-4 shadow"
            >
              <Card.Body>
                <Card.Title className="fs-6">{item.title}</Card.Title>
                <h5>{item.value}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Recent Activities Table */}
      <Card className="rounded-4 shadow-sm">
        <Card.Body>
          <h6 className="mb-3">Recent Activities</h6>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Activity</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity, idx) => (
                <tr key={idx}>
                  <td>{activity.id}</td>
                  <td>{activity.user}</td>
                  <td>{activity.activity}</td>
                  <td>{activity.date}</td>
                  <td>
                    <Badge bg={getStatusVariant(activity.status)}>
                      {activity.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UsageAnalytics;
