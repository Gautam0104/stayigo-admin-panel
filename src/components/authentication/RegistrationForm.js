import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Divider from 'components/common/Divider';
import SocialAuthButtons from './SocialAuthButtons';
import { signupUser } from 'services/authService';

const RegistrationForm = ({ hasLabel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    isAccepted: false
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!', { theme: 'colored' });
      return;
    }

    try {
      await signupUser({
        email: formData.email,
        phone: formData.phone || '0000000000', // fallback
        password: formData.password
      });

      toast.success(`Registered successfully`, { theme: 'colored' });
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed', {
        theme: 'colored'
      });
    }
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Name</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Name' : ''}
          value={formData.name}
          name="name"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Email address' : ''}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Phone</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Phone' : ''}
          value={formData.phone}
          name="phone"
          onChange={handleFieldChange}
          type="tel"
        />
      </Form.Group>

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Password' : ''}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Confirm Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Confirm Password' : ''}
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" id="acceptCheckbox" className="form-check">
          <Form.Check.Input
            type="checkbox"
            name="isAccepted"
            checked={formData.isAccepted}
            onChange={e =>
              setFormData({
                ...formData,
                isAccepted: e.target.checked
              })
            }
          />
          <Form.Check.Label className="form-label">
            I accept the <Link to="#!">terms</Link> and{' '}
            <Link to="#!">privacy policy</Link>
          </Form.Check.Label>
        </Form.Check>
      </Form.Group>

      <Form.Group className="mb-4">
        <Button
          className="w-100"
          type="submit"
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.isAccepted
          }
        >
          Register
        </Button>
      </Form.Group>

      <Divider>or register with</Divider>

      <SocialAuthButtons />
    </Form>
  );
};

RegistrationForm.propTypes = {
  hasLabel: PropTypes.bool
};

export default RegistrationForm;
