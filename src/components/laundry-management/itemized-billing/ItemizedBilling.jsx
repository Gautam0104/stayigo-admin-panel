import React from 'react';
import { Table, Badge, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const billingData = [
  {
    id: '#BILL001',
    customer: 'John Doe',
    items: [
      { name: 'Room Charge', amount: 2500 },
      { name: 'Laundry', amount: 300 },
      { name: 'Snacks', amount: 150 }
    ],
    total: 2950,
    status: 'Paid',
    date: '2025-06-12'
  },
  {
    id: '#BILL002',
    customer: 'Emily Clark',
    items: [
      { name: 'Room Charge', amount: 2000 },
      { name: 'Spa', amount: 500 }
    ],
    total: 2500,
    status: 'Unpaid',
    date: '2025-06-13'
  },
  {
    id: '#BILL003',
    customer: 'Michael Lee',
    items: [
      { name: 'Room Charge', amount: 1800 },
      { name: 'Laundry', amount: 250 },
      { name: 'Mini Bar', amount: 400 }
    ],
    total: 2450,
    status: 'Pending',
    date: '2025-06-11'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Paid':
      return 'success';
    case 'Unpaid':
      return 'danger';
    case 'Pending':
      return 'warning';
    default:
      return 'secondary';
  }
};

const ItemizedBilling = () => {
  const navigate = useNavigate();

  const handleGenerateBill = () => {
    navigate('/laundry-management/generate-billing');
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Itemized Billing</h4>
        <Button
          className="rounded-4"
          variant="primary"
          onClick={handleGenerateBill}
        >
          Generate Bill
        </Button>
      </div>

      <Card className="rounded-4 shadow-sm">
        <Card.Body>
          <h6 className="mb-3">Billing Details</h6>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Bill ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total (₹)</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {billingData.map((bill, idx) => (
                <tr key={idx}>
                  <td>{bill.id}</td>
                  <td>{bill.customer}</td>
                  <td>
                    <ul className="mb-0">
                      {bill.items.map((item, i) => (
                        <li key={i}>
                          {item.name}: ₹{item.amount}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>₹{bill.total}</td>
                  <td>
                    <Badge bg={getStatusVariant(bill.status)}>
                      {bill.status}
                    </Badge>
                  </td>
                  <td>{bill.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemizedBilling;
