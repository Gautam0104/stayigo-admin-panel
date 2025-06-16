import React, { useState } from 'react';
import { Button, Badge, Table, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const attendanceList = [
  {
    date: '2025-06-16',
    name: 'Alice Smith',
    role: 'Manager',
    status: 'Present'
  },
  {
    date: '2025-06-16',
    name: 'Bob Johnson',
    role: 'Housekeeping',
    status: 'Absent'
  },
  {
    date: '2025-06-16',
    name: 'Charlie Lee',
    role: 'Receptionist',
    status: 'Leave'
  },
  { date: '2025-06-16', name: 'David Kim', role: 'Manager', status: 'Present' },
  {
    date: '2025-06-16',
    name: 'Eve White',
    role: 'Housekeeping',
    status: 'Present'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Present':
      return 'success';
    case 'Absent':
      return 'danger';
    case 'Leave':
      return 'warning';
    default:
      return 'light';
  }
};

const Attendance = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredAttendance = attendanceList.filter(entry => {
    if (filter === 'All') return true;
    return entry.status === filter;
  });

  const goAddAttendance = () => {
    navigate('/attendance-management/addattendance');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Attendance</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('All')}
          >
            All
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Present' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Present')}
          >
            Present
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Absent' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Absent')}
          >
            Absent
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Leave' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Leave')}
          >
            Leave
          </Button>
        </ButtonGroup>

        <Button
          className="rounded-4"
          variant="primary"
          onClick={goAddAttendance}
        >
          Add Attendance
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAttendance.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.date}</td>
              <td>{entry.name}</td>
              <td>{entry.role}</td>
              <td>
                <Badge bg={getStatusVariant(entry.status)}>
                  {entry.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev disabled />
          {[...Array(2)].map((_, i) => (
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

export default Attendance;
