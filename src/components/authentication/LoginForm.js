import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Divider from 'components/common/Divider';
import SocialAuthButtons from './SocialAuthButtons';
import { toast } from 'react-toastify';
import { loginUser } from 'services/authService';
import paths from 'routes/paths';

const forgotPasswordPaths = {
  simple: paths.simpleForgotPassword,
  split: paths.splitForgotPassword,
  card: paths.cardForgotPassword
};

const LoginForm = ({ hasLabel = false, layout = 'simple' }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await loginUser({
        identifier: formData.email,
        password: formData.password
      });
      // Save user info to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      toast.success(`Logged in as ${data.user.email}`, { theme: 'colored' });
      navigate('/welcome'); // Redirect after login
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed', {
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
        {hasLabel && <Form.Label>Password</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Password' : ''}
          value={formData.password}
          name="password"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <Form.Check type="checkbox" id="rememberMe" className="mb-0">
            <Form.Check.Input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={e =>
                setFormData({
                  ...formData,
                  remember: e.target.checked
                })
              }
            />
            <Form.Check.Label className="mb-0 text-700">
              Remember me
            </Form.Check.Label>
          </Form.Check>
        </Col>

        <Col xs="auto">
          <Link className="fs-10 mb-0" to={forgotPasswordPaths[layout]}>
            Forgot Password?
          </Link>
        </Col>
      </Row>

      <Form.Group>
        <Button
          type="submit"
          className="mt-3 w-100"
          disabled={!formData.email || !formData.password}
        >
          Log in
        </Button>
      </Form.Group>

      <Divider className="mt-4">or log in with</Divider>

      <SocialAuthButtons />
    </Form>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

export default LoginForm;
