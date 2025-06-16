import React, { useState } from 'react';
import { Button, Badge, Table, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const scheduleList = [
  {
    id: '#S001',
    service: 'Room Cleaning',
    room: '101',
    date: '2025-06-13',
    time: '10:00 AM',
    staff: 'Alice',
    status: 'Scheduled'
  },
  {
    id: '#S002',
    service: 'Laundry Pickup',
    room: '102',
    date: '2025-06-13',
    time: '11:00 AM',
    staff: 'Bob',
    status: 'In Progress'
  },
  {
    id: '#S003',
    service: 'Room Inspection',
    room: '103',
    date: '2025-06-12',
    time: '09:30 AM',
    staff: 'Charlie',
    status: 'Completed'
  },
  {
    id: '#S004',
    service: 'Maintenance Check',
    room: '104',
    date: '2025-06-12',
    time: '03:00 PM',
    staff: 'Diana',
    status: 'Cancelled'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Scheduled':
      return 'primary';
    case 'In Progress':
      return 'warning';
    case 'Completed':
      return 'success';
    case 'Cancelled':
      return 'danger';
    default:
      return 'secondary';
  }
};

const Scheduling = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const statusOptions = [
    'All',
    'Scheduled',
    'In Progress',
    'Completed',
    'Cancelled'
  ];

  const filteredSchedules = scheduleList.filter(item =>
    filter === 'All' ? true : item.status === filter
  );

  const goAddSchedule = () => {
    navigate('/laundry-management/add-scheduling');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Scheduling</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          {statusOptions.map(status => {
            const count =
              status === 'All'
                ? scheduleList.length
                : scheduleList.filter(s => s.status === status).length;

            return (
              <Button
                key={status}
                className="me-2 rounded-4"
                variant={filter === status ? 'primary' : 'outline-primary'}
                onClick={() => setFilter(status)}
              >
                {status} ({count})
              </Button>
            );
          })}
        </ButtonGroup>

        <Button className="rounded-4" variant="primary" onClick={goAddSchedule}>
          Add Schedule
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Schedule ID</th>
            <th>Service</th>
            <th>Room</th>
            <th>Date</th>
            <th>Time</th>
            <th>Staff</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredSchedules.map((schedule, idx) => (
            <tr key={idx}>
              <td>{schedule.id}</td>
              <td>{schedule.service}</td>
              <td>{schedule.room}</td>
              <td>{schedule.date}</td>
              <td>{schedule.time}</td>
              <td>{schedule.staff}</td>
              <td>
                <Badge bg={getStatusVariant(schedule.status)}>
                  {schedule.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev disabled />
          {[...Array(3)].map((_, i) => (
            <Pagination.Item key={i} active={i === 0}>
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default Scheduling;
