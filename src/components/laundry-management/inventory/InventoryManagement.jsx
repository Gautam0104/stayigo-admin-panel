import React from 'react';
import { Table, Badge, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const inventoryItems = [
  {
    id: '#INV001',
    name: 'Bath Towels',
    category: 'Linen',
    quantity: 120,
    status: 'In Stock',
    lastUpdated: '2025-06-12'
  },
  {
    id: '#INV002',
    name: 'Shampoo Bottles',
    category: 'Toiletries',
    quantity: 20,
    status: 'Low Stock',
    lastUpdated: '2025-06-12'
  },
  {
    id: '#INV003',
    name: 'Toilet Paper',
    category: 'Toiletries',
    quantity: 0,
    status: 'Out of Stock',
    lastUpdated: '2025-06-10'
  },
  {
    id: '#INV004',
    name: 'Bedsheets',
    category: 'Linen',
    quantity: 75,
    status: 'In Stock',
    lastUpdated: '2025-06-13'
  },
  {
    id: '#INV005',
    name: 'Slippers',
    category: 'Amenities',
    quantity: 10,
    status: 'Low Stock',
    lastUpdated: '2025-06-11'
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

const InventoryManagement = () => {
  const navigate = useNavigate();

  const handleAddInventory = () => {
    navigate('/laundry-management/add-inventory'); // You can route this to your form page
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Inventory Management</h4>
        <Button
          className="rounded-4"
          variant="primary"
          onClick={handleAddInventory}
        >
          Add Inventory
        </Button>
      </div>

      <Card className="rounded-4 shadow-sm">
        <Card.Body>
          <h6 className="mb-3">Current Inventory</h6>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Badge bg={getStatusVariant(item.status)}>
                      {item.status}
                    </Badge>
                  </td>
                  <td>{item.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InventoryManagement;
