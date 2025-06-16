import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddBilling = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    customer: '',
    items: [{ name: '', amount: '' }],
    status: 'Unpaid',
    date: ''
  });

  const handleItemChange = (index, e) => {
    const updatedItems = [...formData.items];
    updatedItems[index][e.target.name] = e.target.value;
    setFormData({ ...formData, items: updatedItems });
  };

  const addItemRow = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: '', amount: '' }]
    });
  };

  const removeItemRow = index => {
    const updatedItems = [...formData.items];
    updatedItems.splice(index, 1);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () =>
    formData.items.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const handleSubmit = e => {
    e.preventDefault();
    const total = calculateTotal();
    const finalData = { ...formData, total };
    console.log('Submitted Bill:', finalData);
    // TODO: API or state management logic
    navigate('/billing');
  };

  const handleCancel = () => {
    navigate('/billing');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 rounded-4 shadow-sm">
        <h4 className="mb-4">Generate New Bill</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Bill ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              placeholder="#BILL004"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Label>Items</Form.Label>
          {formData.items.map((item, index) => (
            <Row key={index} className="mb-2 align-items-center">
              <Col md={6}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Item name"
                  value={item.name}
                  onChange={e => handleItemChange(index, e)}
                  required
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="number"
                  name="amount"
                  placeholder="Amount (₹)"
                  value={item.amount}
                  onChange={e => handleItemChange(index, e)}
                  required
                />
              </Col>
              <Col md={2}>
                <Button
                  variant="danger"
                  onClick={() => removeItemRow(index)}
                  disabled={formData.items.length === 1}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button
            className="mb-3"
            variant="outline-primary"
            onClick={addItemRow}
          >
            + Add Item
          </Button>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
              <option value="Pending">Pending</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Billing Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <h6>Total: ₹{calculateTotal()}</h6>

          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={handleCancel}
              className="rounded-4"
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="rounded-4">
              Submit Bill
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddBilling;
