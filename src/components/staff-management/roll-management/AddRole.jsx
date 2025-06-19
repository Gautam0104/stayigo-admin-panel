import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddRole = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    permissions: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('New Role:', formData);
    // TODO: API integration goes here
    navigate('/role-management');
  };

  return (
    <div className="container mt-4">
      <Card className="p-4 shadow-sm">
        <h4 className="mb-4">Add New Role</h4>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="id">
                <Form.Label>Role ID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="e.g. R006"
                  value={formData.id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="name">
                <Form.Label>Role Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="e.g. Chef"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="permissions">
                <Form.Label>Total Permissions</Form.Label>
                <Form.Control
                  type="number"
                  name="permissions"
                  placeholder="e.g. 4"
                  value={formData.permissions}
                  onChange={handleChange}
                  min={0}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows={3}
                  placeholder="Describe the role's access and responsibility"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => navigate('/role-management')}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Role
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddRole;
