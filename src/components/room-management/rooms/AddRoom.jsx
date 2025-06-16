import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { toast } from 'react-toastify';
const AddRoom = () => {
  const [key, setKey] = useState('details');

  const [formData, setFormData] = useState({
    number: '',
    type: '',
    floor: '',
    facility: '',
    status: 'Available',
    image: null,
    facebook: '',
    instagram: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  });

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    toast.success('Room added successfully!');
  };

  return (
    <Container className="mt-4">
      <h4 className="mb-4">Add New Room</h4>

      <Form onSubmit={handleSubmit}>
        <Tabs
          activeKey={key}
          onSelect={k => setKey(k)}
          className="mb-4"
          justify
        >
          {/* Details Tab */}
          <Tab eventKey="details" title="Details">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="roomNumber">
                  <Form.Label>Room Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="#001"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="bedType">
                  <Form.Label>Bed Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Single bed">Single bed</option>
                    <option value="Double bed">Double bed</option>
                    <option value="VIP">VIP</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="roomFloor">
                  <Form.Label>Room Floor</Form.Label>
                  <Form.Control
                    type="text"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    placeholder="Floor -1"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="roomFacility">
                  <Form.Label>Facilities</Form.Label>
                  <Form.Control
                    type="text"
                    name="facility"
                    value={formData.facility}
                    onChange={handleChange}
                    placeholder="AC, shower, TV"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="roomStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Available">Available</option>
                    <option value="Booked">Booked</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Waitlist">Waitlist</option>
                    <option value="Blocked">Blocked</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Tab>

          {/* Upload Image Tab */}
          <Tab eventKey="image" title="Upload Image">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="roomImage">
                  <Form.Label>Room Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleChange}
                    accept="image/*"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Tab>

          {/* Social Media Tab */}
          <Tab eventKey="social" title="Social Media">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="facebook">
                  <Form.Label>Facebook</Form.Label>
                  <Form.Control
                    type="text"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                    placeholder="https://facebook.com/yourpage"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="instagram">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="https://instagram.com/yourpage"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Tab>

          {/* Contact Info Tab */}
          <Tab eventKey="contact" title="Contact Info">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="contactName">
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="contactPhone">
                  <Form.Label>Contact Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="contactEmail">
                  <Form.Label>Contact Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Tab>
        </Tabs>

        <div className="d-flex justify-content-end">
          <Button type="submit" variant="primary" className="rounded-4 px-4">
            Submit Room
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddRoom;
