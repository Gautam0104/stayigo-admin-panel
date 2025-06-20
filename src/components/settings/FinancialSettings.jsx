import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Form } from 'react-bootstrap';

const FinancialSettings = ({ form = {}, handleChange }) => {
  return (
    <Card className="mb-4 p-3 shadow-sm">
      <Card.Title>Financial Settings</Card.Title>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Tax Percentage (%)</Form.Label>
            <Form.Control
              type="number"
              name="tax"
              value={form.tax || ''}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Service Charge (%)</Form.Label>
            <Form.Control
              type="number"
              name="serviceCharge"
              value={form.serviceCharge || ''}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Payment Gateway</Form.Label>
            <Form.Select
              name="paymentGateway"
              value={form.paymentGateway || ''}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="razorpay">Razorpay</option>
              <option value="stripe">Stripe</option>
              <option value="paypal">PayPal</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Refund Policy</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="refundPolicy"
              value={form.refundPolicy || ''}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </Card>
  );
};
FinancialSettings.propTypes = {
  form: PropTypes.object,
  handleChange: PropTypes.func.isRequired
};

export default FinancialSettings;
