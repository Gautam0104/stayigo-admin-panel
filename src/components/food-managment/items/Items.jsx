import React, { useState } from 'react';
import { Button, Badge, Table, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const itemList = [
  {
    id: '#I001',
    name: 'Chicken Biryani',
    category: 'Main Course',
    price: 250,
    availability: 'Available'
  },
  {
    id: '#I002',
    name: 'Veg Sandwich',
    category: 'Snacks',
    price: 120,
    availability: 'Unavailable'
  },
  {
    id: '#I003',
    name: 'Masala Dosa',
    category: 'Breakfast',
    price: 100,
    availability: 'Available'
  },
  {
    id: '#I004',
    name: 'Mango Juice',
    category: 'Beverages',
    price: 60,
    availability: 'Available'
  },
  {
    id: '#I005',
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    price: 220,
    availability: 'Unavailable'
  },
  {
    id: '#I006',
    name: 'Fried Rice',
    category: 'Main Course',
    price: 180,
    availability: 'Available'
  }
];

const getAvailabilityVariant = status => {
  switch (status) {
    case 'Available':
      return 'success';
    case 'Unavailable':
      return 'danger';
    default:
      return 'secondary';
  }
};

const Items = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredItems = itemList.filter(item => {
    if (filter === 'All') return true;
    return item.availability === filter;
  });

  const goAddItem = () => {
    navigate('/food-management/add-item');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Items</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('All')}
          >
            All Items
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Available' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Available')}
          >
            Available
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Unavailable' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Unavailable')}
          >
            Unavailable
          </Button>
        </ButtonGroup>

        <Button className="rounded-4" variant="primary" onClick={goAddItem}>
          Add Item
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price (₹)</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <Badge bg={getAvailabilityVariant(item.availability)}>
                  {item.availability}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev disabled />
          {[...Array(5)].map((_, i) => (
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

export default Items;
