import React, { useState } from 'react';
import { Button, Table, Badge, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const couponList = [
  {
    code: 'WELCOME50',
    discount: '50%',
    type: 'Percentage',
    usage: 'Single Use',
    status: 'Active'
  },
  {
    code: 'NEWUSER100',
    discount: '₹100',
    type: 'Flat',
    usage: 'Multiple Use',
    status: 'Expired'
  },
  {
    code: 'FREESHIP',
    discount: 'Free Shipping',
    type: 'Shipping',
    usage: 'Single Use',
    status: 'Active'
  }
];

const getCouponStatusVariant = status => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Expired':
      return 'secondary';
    default:
      return 'light';
  }
};

const CouponManagement = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredCoupons = couponList.filter(coupon => {
    if (filter === 'All') return true;
    return coupon.status === filter;
  });

  const goToAddCoupon = () => {
    navigate('/coupon-management/add-coupon');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Coupons</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          <Button
            variant={filter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('All')}
          >
            All (10)
          </Button>
          <Button
            variant={filter === 'Active' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Active')}
          >
            Active (6)
          </Button>
          <Button
            variant={filter === 'Expired' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Expired')}
          >
            Expired (4)
          </Button>
        </ButtonGroup>

        <Button variant="primary" className="rounded-4" onClick={goToAddCoupon}>
          Add Coupon
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Coupon Code</th>
            <th>Discount</th>
            <th>Type</th>
            <th>Usage</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoupons.map((coupon, idx) => (
            <tr key={idx}>
              <td>{coupon.code}</td>
              <td>{coupon.discount}</td>
              <td>{coupon.type}</td>
              <td>{coupon.usage}</td>
              <td>
                <Badge bg={getCouponStatusVariant(coupon.status)}>
                  {coupon.status}
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

export default CouponManagement;
