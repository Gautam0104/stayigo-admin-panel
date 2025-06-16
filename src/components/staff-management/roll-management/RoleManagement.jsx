import React from 'react';
import { Button, Table, Badge, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const roleList = [
  {
    id: 'R001',
    name: 'Admin',
    description: 'Full system access including settings and management',
    permissions: 12
  },
  {
    id: 'R002',
    name: 'Manager',
    description: 'Manage bookings, staff, reports and daily operations',
    permissions: 8
  },
  {
    id: 'R003',
    name: 'Receptionist',
    description: 'Handle guest check-in/out and booking updates',
    permissions: 5
  },
  {
    id: 'R004',
    name: 'Housekeeping',
    description: 'View tasks, update cleaning status',
    permissions: 2
  },
  {
    id: 'R005',
    name: 'Security',
    description: 'View assigned shifts, report incidents',
    permissions: 1
  }
];

const RoleManagement = () => {
  const navigate = useNavigate();

  const goAddRole = () => {
    navigate('/role-management/addrole');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Role Management</h4>

      <div className="d-flex justify-content-end mb-3">
        <Button className="rounded-4" variant="primary" onClick={goAddRole}>
          Add Role
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Role ID</th>
            <th>Role Name</th>
            <th>Description</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map((role, idx) => (
            <tr key={idx}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.description}</td>
              <td>
                <Badge bg="info">{role.permissions}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev disabled />
          {[...Array(1)].map((_, i) => (
            <Pagination.Item key={i} active={i === 0}>
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next disabled />
        </Pagination>
      </div>
    </div>
  );
};

export default RoleManagement;
