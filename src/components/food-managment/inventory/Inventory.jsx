import React, { useState } from 'react';
import { Button, Table, ButtonGroup, Badge, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const inventoryList = [
  {
    id: '#INV001',
    name: 'Rice (5kg)',
    category: 'Food',
    quantity: 10,
    unit: 'bags',
    status: 'In Stock'
  },
  {
    id: '#INV002',
    name: 'Cooking Oil (1L)',
    category: 'Grocery',
    quantity: 0,
    unit: 'bottles',
    status: 'Out of Stock'
  },
  {
    id: '#INV003',
    name: 'Detergent Powder',
    category: 'Cleaning',
    quantity: 15,
    unit: 'packs',
    status: 'In Stock'
  },
  {
    id: '#INV004',
    name: 'Tissue Roll',
    category: 'Supplies',
    quantity: 4,
    unit: 'rolls',
    status: 'Low Stock'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'In Stock':
      return 'success';
    case 'Low Stock':
      return 'warning';
    case 'Out of Stock':
      return 'danger';
    default:
      return 'secondary';
  }
};

const Inventory = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredInventory = inventoryList.filter(item => {
    if (filter === 'All') return true;
    return item.status === filter;
  });

  const goAddInventory = () => {
    navigate('/food-management/add-inventory');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Inventory</h4>

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
            variant={filter === 'In Stock' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('In Stock')}
          >
            In Stock
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Low Stock' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Low Stock')}
          >
            Low Stock
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Out of Stock' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Out of Stock')}
          >
            Out of Stock
          </Button>
        </ButtonGroup>

        <Button
          className="rounded-4"
          variant="primary"
          onClick={goAddInventory}
        >
          Add Inventory
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{`${item.quantity} ${item.unit}`}</td>
              <td>
                <Badge bg={getStatusVariant(item.status)}>{item.status}</Badge>
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

export default Inventory;
