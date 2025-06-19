import React, { useState } from 'react';
import { Button, Table, Badge, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const affiliateList = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    code: 'AFF123',
    totalEarnings: '₹5000',
    status: 'Active'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    code: 'AFF456',
    totalEarnings: '₹3200',
    status: 'Inactive'
  },
  {
    name: 'Mark Wilson',
    email: 'mark@example.com',
    code: 'AFF789',
    totalEarnings: '₹1000',
    status: 'Pending'
  }
];

const getAffiliateStatusVariant = status => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Inactive':
      return 'danger';
    case 'Pending':
      return 'warning';
    default:
      return 'light';
  }
};

const AffiliateManagement = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredAffiliates = affiliateList.filter(affiliate => {
    if (filter === 'All') return true;
    return affiliate.status === filter;
  });

  const goToAddAffiliate = () => {
    navigate('/affiliate-management/add-affiliate');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Affiliates</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          <Button
            variant={filter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('All')}
          >
            All
          </Button>
          <Button
            variant={filter === 'Active' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Active')}
          >
            Active
          </Button>
          <Button
            variant={filter === 'Inactive' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Inactive')}
          >
            Inactive
          </Button>
          <Button
            variant={filter === 'Pending' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Pending')}
          >
            Pending
          </Button>
        </ButtonGroup>

        <Button
          variant="primary"
          className="rounded-4"
          onClick={goToAddAffiliate}
        >
          Add Affiliate
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Affiliate Code</th>
            <th>Total Earnings</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAffiliates.map((affiliate, idx) => (
            <tr key={idx}>
              <td>{affiliate.name}</td>
              <td>{affiliate.email}</td>
              <td>{affiliate.code}</td>
              <td>{affiliate.totalEarnings}</td>
              <td>
                <Badge bg={getAffiliateStatusVariant(affiliate.status)}>
                  {affiliate.status}
                </Badge>
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

export default AffiliateManagement;
