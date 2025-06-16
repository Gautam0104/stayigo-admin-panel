import React, { useState } from 'react';
import { Button, Badge, Table, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const staffList = [
  {
    id: 'S001',
    name: 'Alice Smith',
    role: 'Manager',
    department: 'Admin',
    contact: '9876543210',
    status: 'Active'
  },
  {
    id: 'S002',
    name: 'Bob Johnson',
    role: 'Housekeeping',
    department: 'Cleaning',
    contact: '9123456780',
    status: 'On Leave'
  },
  {
    id: 'S003',
    name: 'Charlie Lee',
    role: 'Receptionist',
    department: 'Front Desk',
    contact: '9012345678',
    status: 'Active'
  },
  {
    id: 'S004',
    name: 'David Kim',
    role: 'Manager',
    department: 'Operations',
    contact: '8887654321',
    status: 'Inactive'
  },
  {
    id: 'S005',
    name: 'Eve White',
    role: 'Housekeeping',
    department: 'Cleaning',
    contact: '9871234560',
    status: 'Active'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Inactive':
      return 'secondary';
    case 'On Leave':
      return 'warning';
    default:
      return 'light';
  }
};

const Staff = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredStaff = staffList.filter(staff => {
    if (filter === 'All') return true;
    return staff.role === filter;
  });

  const goAddStaff = () => {
    navigate('/staff-management/addstaff');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Staff</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('All')}
          >
            All Staff
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Manager' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Manager')}
          >
            Managers
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Housekeeping' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Housekeeping')}
          >
            Housekeeping
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Receptionist' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Receptionist')}
          >
            Receptionist
          </Button>
        </ButtonGroup>

        <Button className="rounded-4" variant="primary" onClick={goAddStaff}>
          Add Staff
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
            <th>Contact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff, idx) => (
            <tr key={idx}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.role}</td>
              <td>{staff.department}</td>
              <td>{staff.contact}</td>
              <td>
                <Badge bg={getStatusVariant(staff.status)}>
                  {staff.status}
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

export default Staff;
