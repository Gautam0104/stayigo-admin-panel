import React from 'react';
import { Button, Badge, Table, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const categoryList = [
  {
    id: 'C001',
    title: 'Manager',
    description: 'Handles overall hotel operations',
    totalStaff: 3
  },
  {
    id: 'C002',
    title: 'Receptionist',
    description: 'Manages front desk and bookings',
    totalStaff: 5
  },
  {
    id: 'C003',
    title: 'Housekeeping',
    description: 'Maintains cleanliness and room services',
    totalStaff: 8
  },
  {
    id: 'C004',
    title: 'Security',
    description: 'Ensures hotel safety and regulations',
    totalStaff: 2
  },
  {
    id: 'C005',
    title: 'Maintenance',
    description: 'Handles repairs and technical issues',
    totalStaff: 4
  }
];

const StaffCategories = () => {
  const navigate = useNavigate();

  const goAddCategory = () => {
    navigate('/staff-categories/addcategory');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Staff Categories</h4>

      <div className="d-flex justify-content-end mb-3">
        <Button className="rounded-4" variant="primary" onClick={goAddCategory}>
          Add Category
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Total Staff</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((category, idx) => (
            <tr key={idx}>
              <td>{category.id}</td>
              <td>{category.title}</td>
              <td>{category.description}</td>
              <td>
                <Badge bg="info">{category.totalStaff}</Badge>
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

export default StaffCategories;
