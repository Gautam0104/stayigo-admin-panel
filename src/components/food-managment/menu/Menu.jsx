import React, { useState } from 'react';
import { Button, Table, ButtonGroup, Badge, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const menuList = [
  {
    id: '#M001',
    name: 'Idli & Sambar',
    type: 'Breakfast',
    price: 80,
    status: 'Available'
  },
  {
    id: '#M002',
    name: 'Chicken Curry',
    type: 'Main Course',
    price: 250,
    status: 'Available'
  },
  {
    id: '#M003',
    name: 'Pav Bhaji',
    type: 'Snacks',
    price: 120,
    status: 'Unavailable'
  },
  {
    id: '#M004',
    name: 'Cold Coffee',
    type: 'Drinks',
    price: 90,
    status: 'Available'
  },
  {
    id: '#M005',
    name: 'Paneer Tikka',
    type: 'Starters',
    price: 180,
    status: 'Unavailable'
  },
  {
    id: '#M006',
    name: 'Lassi',
    type: 'Drinks',
    price: 70,
    status: 'Available'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Available':
      return 'success';
    case 'Unavailable':
      return 'danger';
    default:
      return 'secondary';
  }
};

const Menu = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredMenu = menuList.filter(item => {
    if (filter === 'All') return true;
    return item.status === filter;
  });

  const goAddMenu = () => {
    navigate('/food-management/add-menu');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Menu</h4>

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

        <Button className="rounded-4" variant="primary" onClick={goAddMenu}>
          Add Menu
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Menu ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price (₹)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredMenu.map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.price}</td>
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
          {[...Array(4)].map((_, i) => (
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

export default Menu;
