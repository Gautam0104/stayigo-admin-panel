import React from 'react';
import { Table, Button, Badge } from 'react-bootstrap';

const categories = [
  {
    name: 'Single Bed',
    description: 'Basic room with single bed',
    status: 'Active'
  },
  { name: 'Double Bed', description: 'Room with double bed', status: 'Active' },
  { name: 'Suite', description: 'Luxury suite room', status: 'Inactive' }
];

const Categories = () => (
  <div className="container mt-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4>Categories</h4>
      <Button className="me-2 rounded-4" variant="primary">
        Add Category
      </Button>
    </div>

    <Table bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((cat, i) => (
          <tr key={i}>
            <td>{cat.name}</td>
            <td>{cat.description}</td>
            <td>
              <Badge bg={cat.status === 'Active' ? 'success' : 'secondary'}>
                {cat.status}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
export default Categories;
