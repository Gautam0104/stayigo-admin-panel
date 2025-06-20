import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import FinancialSettings from './FinancialSettings';
import PropertySettings from './PropertySettings';

const SettingsPage = () => {
  const [form, setForm] = useState({
    hotelName: '',
    email: '',
    phone: '',
    currency: 'USD',
    checkIn: '14:00',
    checkOut: '12:00',
    notifications: true,
    tax: '',
    serviceCharge: '',
    paymentGateway: '',
    refundPolicy: '',
    propertyType: '',
    totalRooms: '',
    roomCapacity: '',
    roomPrice: ''
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted settings:', form);
  };

  return (
    <div className="container mt-4">
      <h3>Settings</h3>
      <Form onSubmit={handleSubmit}>
        <Card className="mb-4 p-3 shadow-sm">
          <Card.Title>General Settings</Card.Title>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control
                  type="text"
                  name="hotelName"
                  value={form.hotelName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Support Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Currency</Form.Label>
                <Form.Select
                  name="currency"
                  value={form.currency}
                  onChange={handleChange}
                >
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option value="EUR">EUR</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Card>

        <Card className="mb-4 p-3 shadow-sm">
          <Card.Title>Booking Settings</Card.Title>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Default Check-In Time</Form.Label>
                <Form.Control
                  type="time"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Default Check-Out Time</Form.Label>
                <Form.Control
                  type="time"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Card>

        <Card className="mb-4 p-3 shadow-sm">
          <Card.Title>Notification Settings</Card.Title>
          <Form.Check
            type="switch"
            id="notifications-switch"
            name="notifications"
            label="Enable email notifications"
            checked={form.notifications}
            onChange={handleChange}
          />
        </Card>

        <FinancialSettings form={form} handleChange={handleChange} />
        <PropertySettings form={form} handleChange={handleChange} />

        <div className="text-end">
          <Button type="submit" variant="primary">
            Save Settings
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SettingsPage;
