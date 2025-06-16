import React, { useState } from 'react';
import { Button, Badge, Table, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const laundryOrders = [
  {
    id: '#L001',
    customer: 'John Doe',
    items: 5,
    date: '2025-06-12',
    status: 'Pending'
  },
  {
    id: '#L002',
    customer: 'Jane Smith',
    items: 3,
    date: '2025-06-11',
    status: 'In Progress'
  },
  {
    id: '#L003',
    customer: 'Michael Brown',
    items: 7,
    date: '2025-06-10',
    status: 'Completed'
  },
  {
    id: '#L004',
    customer: 'Emily Johnson',
    items: 2,
    date: '2025-06-09',
    status: 'Cancelled'
  },
  {
    id: '#L005',
    customer: 'Robert Lee',
    items: 4,
    date: '2025-06-08',
    status: 'Pending'
  },
  {
    id: '#L006',
    customer: 'Sophia Taylor',
    items: 6,
    date: '2025-06-08',
    status: 'Completed'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Pending':
      return 'warning';
    case 'In Progress':
      return 'primary';
    case 'Completed':
      return 'success';
    case 'Cancelled':
      return 'danger';
    default:
      return 'secondary';
  }
};

const LaundryManagement = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredOrders = laundryOrders.filter(order =>
    filter === 'All' ? true : order.status === filter
  );

  const statusOptions = [
    'All',
    'Pending',
    'In Progress',
    'Completed',
    'Cancelled'
  ];

  const goAddOrder = () => {
    navigate('/laundry-management/add-orders');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Laundry Orders</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          {statusOptions.map(status => {
            const count =
              status === 'All'
                ? laundryOrders.length
                : laundryOrders.filter(order => order.status === status).length;

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

        <Button className="rounded-4" variant="primary" onClick={goAddOrder}>
          Add Order
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Items</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, idx) => (
            <tr key={idx}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items}</td>
              <td>{order.date}</td>
              <td>
                <Badge bg={getStatusVariant(order.status)}>
                  {order.status}
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

export default LaundryManagement;
