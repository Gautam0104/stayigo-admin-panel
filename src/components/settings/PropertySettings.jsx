import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Form } from 'react-bootstrap';

const PropertySettings = ({ form = {}, handleChange }) => {
  return (
    <Card className="mb-4 p-3 shadow-sm">
      <Card.Title>Property Settings</Card.Title>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Property Type</Form.Label>
            <Form.Select
              name="propertyType"
              value={form.propertyType || ''}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="hotel">Hotel</option>
              <option value="resort">Resort</option>
              <option value="homestay">Homestay</option>
              <option value="villa">Villa</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Total Rooms</Form.Label>
            <Form.Control
              type="number"
              name="totalRooms"
              value={form.totalRooms || ''}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Default Room Capacity</Form.Label>
            <Form.Control
              type="number"
              name="roomCapacity"
              value={form.roomCapacity || ''}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Default Room Price</Form.Label>
            <Form.Control
              type="number"
              name="roomPrice"
              value={form.roomPrice || ''}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </Card>
  );
};
PropertySettings.propTypes = {
  form: PropTypes.object,
  handleChange: PropTypes.func.isRequired
};

export default PropertySettings;
